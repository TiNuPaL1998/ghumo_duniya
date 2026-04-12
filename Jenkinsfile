pipeline {
    agent any

    tools {
        maven 'Maven'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TiNuPaL1998/ghumo_duniya.git'
            }
        }

        stage('Build') {
            steps {
                dir('demo') {   // ✅ IMPORTANT FIX
                    sh 'mvn -Dmaven.test.skip=true clean package'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t java-app .'
            }
        }

        stage('Deploy via Ansible') {
            steps {
                sh 'ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i hosts deploy.yml'
            }
        }
    }
}