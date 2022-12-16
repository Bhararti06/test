pipeline {
  agent any
    
  stages {
        
    stage('checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Bhararti06/test.git']]])
      }
    }
    
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'tar czf test.tar.gz node_modules index.js package.json'
      }
    }  
     stage('Publish ECR') { 
            steps { 
                bat'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/c5h0b4m1'
                bat 'docker build -t bharatirepo .'
                bat'docker tag bharatirepo:latest public.ecr.aws/c5h0b4m1/bharatirepo:latest'
                bat'docker push public.ecr.aws/c5h0b4m1/bharatirepo:latest'
            }
        }
    
  
  
    
  }
    
}


for sonarQube integaration with jenkines

node {
    stage('Clone the Git') {
    git  'https://github.com/Bhararti06/test.git'
     }
  stage('SonarQube analysis') {
       def scannerHome = tool 'sonarQubeScanner'
       withSonarQubeEnv('sonarQube') {
       bat"${scannerHome}/bin/sonar-scanner \
      -D sonar.login=admin \
      -D sonar.password=bharati@06 \
      -D sonar.projectKey=sonarqubetest2 \
      -D sonar.exclusions=vendor/**,resources/**,**/*.java \
      -D sonar.host.url=http://localhost:9000/"
    
  }
}
}
