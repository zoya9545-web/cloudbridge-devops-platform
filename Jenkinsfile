pipeline {
    agent any

    environment {
        IMAGE_NAME = "zoya9545/cloudbridge-app:latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudbridge-app:latest .'
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh 'docker tag cloudbridge-app:latest $IMAGE_NAME'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
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
                sh 'docker run -d -p 3000:3000 --name cloudbridge-container cloudbridge-app:latest'
            }
        }
    }
}
