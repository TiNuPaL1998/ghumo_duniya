pipeline {
    agent any
    triggers {
        githubPush()   // webhook triggers Jenkins automatically
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
                withCredentials([usernamePassword(credentialsId: 'dockerhub-pass', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag ghumo_duniya:latest $DOCKER_USER/ghumo_duniya:latest'
                    sh 'docker push $DOCKER_USER/ghumo_duniya:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}
