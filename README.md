# Servian DevOps Fundamentals Bootcamp Labs
This repo contains the labs used as part of Servians DevOps Bootcamp. These labs are designed to be run on Servians Hashiqube/DevOps Lab framework. To run through these labs you will require the following dependencies:

* Vagrant 
* Docker 
* Git 
* Hashiqube 
* VSCode

## Included in this Repo:
There are a number of different labs included in this repo:

* __Continous Integration:__ This folder is used as part of the Continous Integration & automated testing (Linting, Unit Tests & Integration Test) labs. It will generate a deployable artifact at the end of the pipeline. 
* __Continous Delivery/Deployment:__ This folder is used as part of the Docker & Continous Deployment/Delivery labs and will deploy a dockerised version of the todo application into minikube which is hosted on Hashiqube. It includes a dockerfile to create a docker image of the application, helm charts to deploy the application
* __Terraform:__ This folder includes the terraform scafolding required to write a set of terraform files that can be used with localstack.
* __Ansible:__ This folder is used to demo Ansible and apply an ansible playbook to a provisioned ubuntu Vagrantbox. 

## Todo Application
The application that is used for these labs is a simple NodeJS App that is backed by a MongoDB Database. For details of the application itself, please refer to the README inside the Comntinous Integration & Continous Delivery Labs. 

## Dependencies
To get started we are now going to install some core dependencies on your local machine (or Azure VD) to get the Lab started:

* Vagrant - Please download __Vagrant__ from https://www.vagrantup.com/downloads.html and install
* Docker - Please download __Docker__ from https://www.docker.com/products/docker-desktop and install
* VSCode - Please download __VSCode__ from https://code.visualstudio.com/download and install
* Hashiqube - Please Clone the following repo to your local machine - `git clone https://source.servian.com/all-staff/hashiqube.git`

## Configuring Hashiqube
Hashiqube requires some configuration before it is ready to be used for these labs to set up hashiqube, first run the following commands from the root folder of your cloned hashiqube repo:

```
vagrant up --provision-with basetools --provider docker
vagrant up --provision-with docker --provider docker
vagrant up --provision-with localstack --provider docker
vagrant up --provision-with minikube --provider docker
vagrant up --provision-with prometheus-grafana --provider docker
vagrant up --provision-with gitlab --provider docker
```

Once the above has been installed into Hashiqube, you will need to set up a few services & items into the Hashiqube Vagrantbox. 

1. In your browser, navigate to `localhost:5580` & using the root credentials provided in the output, login to your gitlab environment and create a new admin user.

2. Log back in as your newly created admin user amd set up a new project (Uncheck the "Initialize repository with a README" box)

![hosts](images/gitlab-project.png?raw=true)

4. In your new project, navigate to settings, cicd & expand & copy the Registration Token and hold it for later.

![hosts](images/runner-reg.png?raw=true)

5. From your hashiquibe folder, SSH into the Vagrant Box:

```
vagrant ssh
```

6. Install nodejs,npm & gitlab-runner

```
sudo apt-get install nodejs npm gitlab-runner -y
```

7. add the `gitlab-runner` user to the `docker` & `sudo` user groups

```
sudo usermod -aG docker gitlab-runner
sudo usermod -aG sudo gitlab-runner
```

8. Append the following `gitlab-runner ALL=(ALL) NOPASSWD:ALL` to the bottom of the sudoers file

```
sudo nano /etc/sudoers
```
![sudoers](images/sudoers.png?raw=true)

9. Add the gitlab.localhosts to the hosts file

```
sudo nano /etc/host
```
![hosts](images/hosts.png?raw=true)

11. Remove the ./bash_logout from the `gitlab-runner` user

```
sudo rm /home/gitlab-runner/.bash_logout
```

10. Set up the Gitlab Runner, by copying the following line into your terminal

```
sudo gitlab-runner register --non-interactive --url "http://localhost:5580" --registration-token "TOKEN" --executor "shell" --description "shell-runner" --tag-list "hashiqube" --run-untagged="true" --locked="false" 
```

Where TOKEN is the registration token ID you took down from gitlab earlier.

11. Forward the web port for the `gitlab-webservice` pod.

```
kubectl port-forward -n default service/gitlab-webservice-default 80:8181 > /dev/null 2>&1 &
```

You are good to go! Enjoy the bootcamp.

## Support & Feedback
For suggestions, feedback and queries please branch or and submit a Pull Request or directly contact the architects of the HashiQube via email:

Lead Automation Architect [riaan.nolan@servian.com](mailto:riaan.nolan@servian.com)

## Contributors and Special mentions
A Very special mention to contributors that gave your time
 - Riaan Nolan
 - James Bannan

## License
DevOps Fundamentals Bootcamp is available as open-source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
