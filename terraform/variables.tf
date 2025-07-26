variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}

variable "public_key_path" {
  type    = string
  default = "~/.ssh/id_rsa.pub" # Update if using a different key
}

variable "dockerhub_username" {
  type = string
}
