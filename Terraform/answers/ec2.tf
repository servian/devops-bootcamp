resource "aws_key_pair" "deployer" {
  key_name   = "ssh-key"
  public_key = var.public_key
}

resource "aws_security_group" "allow_http_ssh" {
  description = "Allow SSH and http inbound traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "ssh from internet"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "http from internet"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_http_ssh"
  }
}

resource "aws_instance" "server" {
  ami                    = var.ami_id
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.public_az1.id
  key_name               = aws_key_pair.deployer.key_name

  tags = {
    Name = "Demo EC2 Instance"
  }
}
