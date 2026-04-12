pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/TiNuPaL1998/ghumo_duniya.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t java-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop java-app || true
                docker rm java-app || true
                docker run -d -p 8080:8080 --name java-app java-app
                '''
            }
        }
    }
}