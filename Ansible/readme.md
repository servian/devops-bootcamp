# Course - Ansible 101 demo

This repo will spin up an Ubuntu Vagrant box and then apply the ansible playbook. The anisble playbook will deploy and install apache2 webserver on the target machine. It gives a practical demo of using ansible to configure a system. 

## Deploying App

1. Ensure Hashicorp Vagrant is installed
2. Ensure Ansible is installed on your machine
3. Ensure Docker is installed on your machine
4. run `vagrant up --provider docker`

An ubuntu based vagrantbox will be provisioned an apply the `playbook.yml` file. This playbook will install apache, configure it with a simple template. The vagrantbox will expose port 80 to connect to the site. From your browser, simply type in `localhost`. 

If you want to apply the playbook  without re running `vagrant up`, simply execute the following command from the root Ansible folder after you have provisioned your vagrant box. 

`ansible-playbook -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory playbook.yml`