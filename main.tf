provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "jenkins" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu 20.04 example
  instance_type = "t2.micro"

  tags = {
    Name = "jenkins-controller"
  }
}

resource "aws_instance" "agent" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "jenkins-agent"
  }
}
