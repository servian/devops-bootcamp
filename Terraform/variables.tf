variable "public_key" {
    description = "The public key attached to the instance"
    type        = string
    default     = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDJkEbTmzj+3DgTEc7qqyq3IyAcWeYTNMajrmthRM9zzRfX3vSAbp2VVuwT/+7/GEhukVNMoq7q//z9DirbX/OLfOvBrCWlMVcPDHAyeO/qIE7flfoDfGl3nm8EnOOWJM7IDCf6Hf5/XDbro/CxBy4NEVmuYa/z/BEpd424hRWKn8Ct5Tc4Og5eTTtwJt5BCIE9DLyqFj58F1Kfi4SYONifEboq7/A9zWYw+0hMZwYk90326jSXMDRh7zSDRNY7dsPUuO8chBkDb8WXCQIlLMGLrFpxw3FouNSAlrMVSWlvLlgDuc2KK1UgPH6DOjZsbsgJ26cICGSwCm6eg9suGgVBitEaw5LS/ix17YSwDF1lyu03kuLQNtyJQdLuC4T6q6nvtTJf/mg5bvYo3HxnjxHtsgYHIu4fBBw6a1WMhtZlLI+XYfZSxV/rxS5s7J13ljZ/g3V6MRNsmtNbW4MvBZ4jggH8/JBhGD9xBGMQKo5Eb8qEbAO88k0lKajXEbW89yhJV9UDpqJdTAgMx+DL19qgbWiScMJll32hno7ca82wMtk/Im0bMYhBI2J/fCgxm5sRFIDu69tn1YrrMR8iExUC6x4YT/1UGWa9XR6nQi35/QMen+Ua1SQPIZeKIRcXnV9nU8fQ8+P6QJ48S8JjpC4rSIOIsmDbtB+o+mDm5i2Gtw== benjamin.ashby@servian.com"

}

variable "ami_id" {
    description = "The ID Of the AMI that will be deployed"
    type        = string
    default     = "ami-07308cfa217e347fb"
}
