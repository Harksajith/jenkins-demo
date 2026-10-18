pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps { sh 'docker build -t jenkins-demo:${BUILD_NUMBER} .' }
    }
    stage('Run Container') {
      steps {
        sh 'docker rm -f demo || true'
        sh 'docker run -d --name demo -p 3000:3000 jenkins-demo:${BUILD_NUMBER}'
      }
    }
    stage('Test') {
      steps { sh 'sleep 3 && curl -f http://localhost:3000' }
    }
  }
}
