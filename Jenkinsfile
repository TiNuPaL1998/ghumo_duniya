pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Build Simulation') {
            steps {
                echo 'Docker build simulated successfully'
            }
        }

        stage('Test Simulation') {
            steps {
                echo 'Application tested successfully'
            }
        }

        stage('Success Message') {
            steps {
                echo 'PRT – CI/CD Completed Successfully'
            }
        }
    }
}