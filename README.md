# Balanceè Internship Submission

This project is a Next.js application created as a submission for the Balanceè DevOps Internship. It features a responsive and dynamic landing page.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Docker](#docker)
- [CI/CD](#cicd)

## Features

- Next.js framework
- TypeScript support
- Responsive design with Tailwind CSS
- Docker containerization
- Nginx as a reverse proxy
- CI/CD pipeline with GitHub Actions

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- pnpm (v9 or later)
- Docker and Docker Compose
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Ravencodess/balancee.git
   cd balancee-internship-submission
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

## Running the Application

To run the application in development mode:

```
pnpm dev
```

The application will be available at `http://localhost:3000`.

To build and start the application in production mode:

```
pnpm build
pnpm start
```

## Testing

To run the unit tests:

```
pnpm test
```

To run the end-to-end tests with Cypress:

```
pnpm test:e2e
```

## Docker

This project includes Docker and Docker compose configuration for easy deployment. To build and run the Docker containers:
The docker compose file first tries to pull the image but defaults to building the Dockerfile if the image is not found
```
docker-compose up -d 
```

The application will be available at `http://localhost:3080`.

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow includes:

- Installing dependencies
- Running unit tests
- Building the application
- Running Cypress tests
- Deploying the application (if configured)

The workflow is triggered on pushes to the main branch.

## Project Structure

```
project-root/
├── .github/
│   └── workflows/
│       └── main.yml
├── src/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── __tests__/
├── cypress/
├── public/
├── .gitignore
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── jest.config.js
├── jest.setup.js
├── Dockerfile
├── docker-compose.yaml
└── nginx.conf
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
