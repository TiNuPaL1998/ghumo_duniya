pipeline {
    agent any
    triggers {
        githubPush()   // webhook triggers Jenkins on every push
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TiNuPaL1998/ghumo_duniya.git'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t ghumo_duniya:latest .'
            }
        }
        stage('Push to Registry') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u yourdockeruser --password-stdin'
                    sh 'docker tag ghumo_duniya:latest yourdockeruser/ghumo_duniya:latest'
                    sh 'docker push yourdockeruser/ghumo_duniya:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
