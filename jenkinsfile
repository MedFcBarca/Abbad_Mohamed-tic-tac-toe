pipeline {
    agent any
    tools {
        nodejs 'node'
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
                sh 'CI=true npm test -- --coverage'
            }
        }

        stage('Deploy / Deliver') {
            steps {
                echo 'Deploying...'
                sh 'npm run build'
            }
        }
    }
}
