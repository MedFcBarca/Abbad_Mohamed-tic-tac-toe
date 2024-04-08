pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing'
                sh 'npm install'
            }
        }

        stage('Deploy / Deliver') {
            steps {
                echo 'Deploying...'
                sh 'npm run build'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'build/**/*.*', onlyIfSuccessful: true
                }
            }
        }
    }
}
