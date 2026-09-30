# Full Stack Docker App (React + Node.js)

## Run locally without Docker
    cd backend  && npm install && node server.js      # http://localhost:4000
    cd frontend && npm install && npm start           # http://localhost:3000

## Docker (individual containers)
    docker build -t USERNAME/backend-app ./backend
    docker build -t USERNAME/frontend-app ./frontend
    docker run -d -p 4000:4000 USERNAME/backend-app
    docker run -d -p 3000:80  USERNAME/frontend-app

## Docker Compose (both at once)
    docker compose up -d --build

## Push to Docker Hub
    docker login
    docker tag  USERNAME/backend-app  USERNAME/backend-app:v1
    docker push USERNAME/backend-app:v1
    docker tag  USERNAME/frontend-app USERNAME/frontend-app:v1
    docker push USERNAME/frontend-app:v1

## How to run this project repo
    podman login
    username enter
    password enter
