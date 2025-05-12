# Dev Portfolio Blog

## Overview

This is a personal portfolio and blog built with **React**, **TypeScript**, **Tailwind CSS**, and hosted on **Vercel**. It showcases my front-end development skills, featuring a clean, responsive design. The site includes various sections such as my **projects**, **certificates**, **about me**, **CV**, and a **blog**.

The project is fully integrated with a **Spring Boot** backend, which is built with **Java 17+**, **PostgreSQL**, and exposed via a **REST API**. Future updates will include user management and dynamic content through the backend.

## Features

- **Responsive Design**: The portfolio adapts seamlessly to all screen sizes, ensuring a great user experience across devices.
- **Showcase**: Includes sections to display your **projects**, **certificates**, **CV**, and **blog**.
- **Frontend**: Built with **React**, **TypeScript**, and **Tailwind CSS** for a modern and scalable UI.
- **Backend**: Built with **Spring Boot**, **Java 17+**, **PostgreSQL**, and using **Hibernate**, **Flyway**, and **Swagger** for API documentation.
- **Live Demo**: Check out the live demo of the portfolio and blog at [lukaszpelikan.com](https://www.lukaszpelikan.com).

## Technologies

- **Frontend**:  
  - React  
  - TypeScript  
  - Tailwind CSS  
  - Vercel Hosting  

- **Backend**:  
  - Spring Boot  
  - Java 17+  
  - PostgreSQL  
  - Hibernate  
  - Flyway  
  - Swagger (for API documentation)  

- **Other**:
  - Docker
  - Kubernetes

## Project Structure

### Frontend

- **/src**: Contains the main React application with components and pages.  
- **/public**: Contains static assets like images, fonts, and favicon.  
- **tailwind.config.js**: Tailwind CSS configuration file.  
- **tsconfig.json**: TypeScript configuration file.

### Backend

- **/src**: Contains Spring Boot application with RESTful APIs.  
- **/resources**: Contains application configuration files like `application.properties`.  
- **/db/migrations**: Flyway migration scripts for managing the database schema.

## Setup and Installation

### Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/Senegalion/Dev-Portfolio-Blog.git
   cd dev-portfolio-blog/frontend

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm yarn run

4. Open the application in your browser at http://localhost:3000.

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Senegalion/Dev-Portfolio-Blog.git
   cd dev-portfolio-blog/backend

2. Make sure you have Java 17+ and Docker installed.

3. Update your application.properties file with your database credentials:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/yourdb
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword

4. Build the Spring Boot application:
   ```bash
   ./mvnw clean install

5. Build the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run

6. The backend will be available at http://localhost:8080.

## Live Demo
You can check the live version of the project at [lukaszpelikan.com](https://www.lukaszpelikan.com)
