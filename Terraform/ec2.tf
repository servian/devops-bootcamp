resource "aws_key_pair" "deployer" {
  key_name   = "ssh-key"
  public_key = var.public_key
}

