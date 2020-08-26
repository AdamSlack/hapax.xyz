terraform {
    backend "s3" {
        bucket         = "hapax.xyz-remote-state"
        key            = "global/s3/hapax.xyz/terraform.tfstate"
        region         = "eu-west-2"
    }
}
