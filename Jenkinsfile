pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            sh 'echo "end of pipeline"'
        }
    }
}