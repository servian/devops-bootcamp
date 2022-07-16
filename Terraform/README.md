# DevOps Bootcamp Terraform Lab
This lab is desigend to give students experience in using HCL syntax to write Terraform files. Using this repo, students can write TF files and then execute them locally against a cloud testing framework known as Localstack.

## What is Localstack
Localstack is a testing/mocking framework for developing Cloud applications locally. Where in theory, you can stick any AWS service and emulate them in localhost without ever needing the real AWS account.

Localstack’s primary goal to make integration/system testing less painful for developers.

### Running Localstack
To get started you will need to have docker installed on your local machine. With docker installed you can start a loclstack container using the following command:
```
docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 -d localstack/localstack
```

## Terraform
To get you started we have included a set of Terraform files, `main.tf`, `vpc.tf`, `variables.tf`, `ec2.tf` & `outputs.tf`. `main.tf` has already been configured to talk to the localstack endpoint, so all you have to do is initalise your TF repo, write your terraform files and then execute.

### Initalise
To initalise your TF repo simply exeucte the following from the root directory:

```
terraform init
```

### Plan & Apply
Once you have written your TF files you simply need to run a `tf plan` to review your proposed chanegs and `tf apply` to then execute.

To plan your changes type the following in from the root directory:

```
terraform plan
```

To apply your changes type the following in from the root directory:

```
terraform apply
```