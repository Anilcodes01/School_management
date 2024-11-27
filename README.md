# School Management System

[](https://github.com/Anilcodes01/School_management/tree/main#school-management-system)

This is a School Management System API built using  **Node.js**,  **Express.js**, and  **MySQL**. It allows the management of school records, including adding new schools, and listing schools based on proximity (using latitude and longitude).

## Features

[](https://github.com/Anilcodes01/School_management/tree/main#features)

-   **Add a School**: Allows adding a school with details like name, address, latitude, and longitude.
-   **List Schools**: Lists all the schools and calculates the distance from a given latitude and longitude, sorting them by proximity.

## Technologies Used

[](https://github.com/Anilcodes01/School_management/tree/main#technologies-used)

-   **Node.js**: JavaScript runtime for building the backend.
-   **Express.js**: Web framework for Node.js to build RESTful APIs.
-   **MySQL**: Relational database to store school data.
-   **Postman**: Tool for testing API requests.
-   **Vercel**: Cloud platform for deploying the API.

## Setup Instructions

[](https://github.com/Anilcodes01/School_management/tree/main#setup-instructions)

### Prerequisites

[](https://github.com/Anilcodes01/School_management/tree/main#prerequisites)

Before setting up the project, make sure you have the following installed:

-   **Node.js**  (LTS version recommended)
-   **MySQL**  (or any MySQL-compatible database like MariaDB)

### 1. Clone the Repository

[](https://github.com/Anilcodes01/School_management/tree/main#1-clone-the-repository)

`git clone https://github.com/your-username/school-management.git cd school-management`

### 2. Install Dependencies

[](https://github.com/Anilcodes01/School_management/tree/main#2-install-dependencies)

Run the following command to install the required dependencies:

`npm install`

### 3. Configure MySQL Database

[](https://github.com/Anilcodes01/School_management/tree/main#3-configure-mysql-database)

1.  **Create the Database**: Log into your MySQL server and create a database for this project.

`CREATE DATABASE school_db;`

2.  **Create the  `schools`  Table**: After creating the database, run the following SQL query to create the table that will store school data.

`USE school_db;

CREATE TABLE schools ( 
id   INT AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL, 
latitude DECIMAL(10, 6) NOT NULL, 
longitude DECIMAL(10, 6) NOT NULL );`

### 4. Configure Environment Variables

[](https://github.com/Anilcodes01/School_management/tree/main#4-configure-environment-variables)

Create a  `.env`  file in the root of the project and add the following database connection details:

`DB_HOST=localhost 
DB_USER=root 
DB_PASSWORD=your_mysql_password 
DB_NAME=school_db`

Replace the values with your actual MySQL credentials.

### 5. Start the Application

[](https://github.com/Anilcodes01/School_management/tree/main#5-start-the-application)

To start the application locally, run the following command:

`npm run dev`

This will start the server on port 3000. You can access the API at  `http://localhost:3000`.

## API Endpoints

[](https://github.com/Anilcodes01/School_management/tree/main#api-endpoints)

### 1. Add a School

[](https://github.com/Anilcodes01/School_management/tree/main#1-add-a-school)

-   **Endpoint**:  `POST /api/schools/addSchool`
    
-   **Request Body**:
    
    `{ "name": "School Name", "address": "School Address", "latitude": 40.7128, "longitude": -74.0060 }`
    
-   **Response**:
    
    `{ "message": "School added successfully!", "schoolId": 1 }`
    

### 2. List Schools by Proximity

[](https://github.com/Anilcodes01/School_management/tree/main#2-list-schools-by-proximity)

-   **Endpoint**:  `GET /api/schools/listSchools`
    
-   **Query Parameters**:
    
    -   `latitude`: The latitude of the user’s location.
    -   `longitude`: The longitude of the user’s location.
-   **Example**:  `GET /api/schools/listSchools?latitude=40.7128&longitude=-74.0060`
    
-   **Response**:
    
    `[ { "id": 1, "name": "School Name", "latitude": 40.7128, "longitude": -74.0060, "distance": 0.0 }, ... ]`
    

## Testing with Postman

[](https://github.com/Anilcodes01/School_management/tree/main#testing-with-postman)

You can use  **Postman**  to test the API endpoints.

1.  **Add School**: Use a  `POST`  request to  `http://localhost:3000/api/schools/addSchool`  with the body containing the school data.
2.  **List Schools**: Use a  `GET`  request to  `http://localhost:3000/api/schools/listSchools?latitude=40.7128&longitude=-74.0060`.

## License

[](https://github.com/Anilcodes01/School_management/tree/main#license)

This project is licensed under the MIT License - see the LICENSE file for details.