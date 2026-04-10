pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Cleanup') {
            steps {
                cleanWs() // Clear previous build artifacts
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TiNuPaL1998/ghumo_duniya.git'
            }
        }
        stage('Docker Build') {
            steps {
                // The Dockerfile now handles the 'npm install' and 'npm build'
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
        sh 'kubectl apply -f k8s-service.yaml'
        // This forces the pods to restart with the new UI code
        sh 'kubectl rollout restart deployment/ghumo-duniya'
    }
}
    }
}
