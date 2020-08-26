resource "aws_s3_bucket" "hapax" {
    bucket = local.domain
    acl    = "private"
    policy = data.aws_iam_policy_document.moistsquid_bucket_policy.json

    website {
        index_document = "index.html"
        error_document = "error.html"
    }

    force_destroy = false

    lifecycle {
        prevent_destroy = true
    }
}

data "aws_iam_policy_document" "hapax_bucket_policy" {
    statement {
        sid = "AllowReadFromAll"

        actions = [
            "s3:GetObject",
        ]

        resources = [
            "arn:aws:s3:::${local.domain}/*"
        ]

        principals {
            type        = "*"
            identifiers = ["*"]
        }
    }

}
