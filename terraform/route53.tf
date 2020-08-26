data "aws_route53_zone" "hapax" {
    name = local.domain
    private_zone = false
}

resource "aws_route53_record" "hapax_cloudfront" {
    zone_id = data.aws_route53_zone.hapax.zone_id
    name    = local.domain
    type    = "A"

    alias {
        name                   = aws_cloudfront_distribution.hapax.domain_name
        zone_id                = aws_cloudfront_distribution.hapax.hosted_zone_id
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "www_hapax_cloudfront" {
    zone_id = data.aws_route53_zone.hapax.zone_id
    name    = "www.${local.domain}"
    type    = "A"

    alias {
        name                   = aws_cloudfront_distribution.hapax.domain_name
        zone_id                = aws_cloudfront_distribution.hapax.hosted_zone_id
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "cert_validation" {
    for_each = {
        for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
            name   = dvo.resource_record_name
            record = dvo.resource_record_value
            type   = dvo.resource_record_type
        }
    }

    name            = each.value.name
    records         = [each.value.record]
    ttl             = 60
    type            = each.value.type
    zone_id         = data.aws_route53_zone.hapax.zone_id
}
