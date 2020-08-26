resource "aws_acm_certificate" "cert" {
    provider = aws.us-east-1
    domain_name       = local.domain
    validation_method = "DNS"

    subject_alternative_names = ["www.${local.domain}"]

    lifecycle {
        create_before_destroy = true
    }
}

resource "aws_acm_certificate_validation" "cert" {
    provider = aws.us-east-1
    certificate_arn         = aws_acm_certificate.cert.arn
    validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
