# my-frontend

### Overview

This repository contains a Next.js frontend application that communicates with a backend API. The application displays a message and the current date and time retrieved from the backend API.

### Prerequisites

Make sure you have the following installed before running the application:
- [Node.js](https://nodejs.org/en)

## Installation

**Clone the repository:**
   ```bash
   git clone https://github.com/Zeeshan1920/my-frontend
```
## Change into the project directory:
```bash
cd my-frontend
```

## Install the dependencies:
```bash
npm install
```

### Usage
To run the Next.js frontend, use the following command:
```bash
npm run dev
```
This will start the development server, and your frontend will be accessible at http://localhost:3000.

### Docker
This project includes a Dockerfile for containerized deployment. To build and run the Docker container, follow these steps:

## Build the Docker Image
Run the following commands to build the Docker image:
```bash
docker build -t image-name .
```
## Run the Docker Container
After building the image, run the Docker container with the following command:
```bash
docker run -p 3000:3000 image-name
```
This command starts the Docker container, mapping port 3000 on your local machine to port 3000 inside the container.

### Kubernetes Deployment
This project includes Kubernetes deployment files for orchestrating the frontend. To deploy the frontend using Kubernetes, follow these steps:

## Apply the Deployment
Apply the deployment file:
```bash
kubectl apply -f path/to/your/kubernetes/deployment.yaml
```

