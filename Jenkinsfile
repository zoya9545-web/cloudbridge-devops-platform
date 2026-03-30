pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/YOUR_USERNAME/cloudbridge-devops-platform.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudbridge-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop cloudbridge-container || true
                docker rm cloudbridge-container || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name cloudbridge-container cloudbridge-app'
            }
        }
    }
}
