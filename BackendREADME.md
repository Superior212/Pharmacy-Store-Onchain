# Pharmacy Onchain Platform Backend

## Overview
This provides an overview of the backend API for managing medications and medical professional licenses for the Pharmacy Onchain Platform. The API allows users to upload, update, delete, and manage medications, as well as verify professional licenses. It is built using Node.js, Express, and MongoDB with Mongoose as the object data modeling (ODM) library.

## Project Structure

```bash

├── src
│   ├── Controllers
│   │   ├── MedicationController.ts
│   │   └── LicenseController.ts
│   ├── Models
│   │   ├── DrugModel.ts
│   │   └── LicenseModel.ts
│   ├── Routes
│   │   ├── medicationRoutes.ts
│   │   └── licenseRoutes.ts
│   ├── Services
│   │   └── Database.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
└── README.md

```

## Files

**1. Controllers**: Contains the business logic for handling requests and responses.
**2. Models**: Defines the data models for medications and licenses.
**3. Routes**: Defines the RESTful API endpoints for medications and licenses.
**4. Services**: Contains utilities like database connection logic.
**5. app.ts**: Application setup, including middleware and route configuration.
**6. server.ts**: Starting point of the backend server.
**7. .env**: Environment variables for database connection and server configuration.

## Features
**1. Medication Management**

- Upload new medications
- Get medication details by ID
- Update medication details
- Unlist or delete medications
- Update medication availability
- License Verification

Verify the validity of a medical license using license ID and expiry date

## Prerequisites
The following are required to run this project locally:

- Node.js (version 14 or above)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)
- Setup and Installation

Clone the Repository

```bash

https://github.com/Superior212/Pharmacy-Store-Onchain/tree/main/Backend
cd Pharmacy-Store-Onchain
cd Backend
Install Dependencies
```

```bash

npm install
Environment Variables Create a .env file in the root directory and define the following variables:

makefile

MONGO_URI=<mongodb-uri>
PORT=5000
Start the Server

```

```bash

npm start
The server will start running on http://localhost:5000

```

## API Endpoints

### Medications

- **POST /medications**
  - Upload a new medication.
  - **Request Body**: 
    ```json
    {
      "productName": "Aspirin",
      "category": "Pain Relief",
      "brandName": "Bayer",
      "drugType": "Tablet",
      "isPrescriptionRequired": true,
      "price": 9.99,
      "expiryDate": "2024-12-31",
      "description": "For pain relief",
      "medicationImageUrl": "http://image.url",
      "quantityInStock": 100
    }
    ```
  
- **GET /medications/:id**
  - Retrieve a medication by its ID.
  
- **PUT /medications/:id**
  - Update medication details.
  - **Request Body** (fields that can be updated):
    ```json
    {
      "productName": "Updated Name",
      "price": 10.99
    }
    ```

- **PATCH /medications/:id/availability**
  - Update availability status of a medication.
  - **Request Body**:
    ```json
    { "isAvailable": false }
    ```

- **DELETE /medications/:id**
  - Delete a medication by ID.

- **PATCH /medications/:id/unlist**
  - Unlist a medication (marks it as unavailable and unlisted).

### Licenses

- **POST /licenses/verify**
  - Verify the validity of a medical professional’s license.
  - **Request Body**:
    ```json
    { "licenseId": "123456" }
    ```

## Models

### Medication Model

The `Medication` model represents a medication in the database. Below are the fields:

- `productName`: Name of the product (required).
- `category`: Medication category (required).
- `brandName`: Brand name of the medication (required).
- `drugType`: The type of drug, e.g., tablet, liquid (required).
- `isPrescriptionRequired`: Whether a prescription is needed (default: `false`).
- `price`: Price of the medication (required).
- `expiryDate`: Expiry date of the medication (required).
- `description`: Description of the medication (required).
- `medicationImageUrl`: Optional image URL for the medication.
- `isListed`: Whether the medication is listed on the platform (default: `true`).
- `isAvailable`: Whether the medication is currently available (default: `true`).
- `quantityInStock`: Number of units available (default: `0`).

### License Model

The `License` model represents a professional license of a user. It contains the following fields:

- `licenseId`: Unique ID of the license (required).
- `fullName`: Full name of the license holder (required).
- `specialization`: The specialization of the medical professional (required).
- `licenseExpiry`: Expiration date of the license (required).
- `issuingAuthority`: The authority that issued the license (required).
- `isVerified`: Whether the license is verified (default: `false`).

## Controllers

### MedicationController

- **`uploadMedication`**: Handles uploading a new medication to the database.
- **`getMedication`**: Retrieves a medication by ID.
- **`updateMedication`**: Updates an existing medication.
- **`deleteMedication`**: Deletes a medication from the database.
- **`unlistMedication`**: Unlists a medication (sets `isListed` and `isAvailable` to `false`).
- **`updateDrugAvailability`**: Updates the availability status of a medication.

### LicenseController

- **`verifyLicense`**: Verifies the validity of a professional license based on the `licenseId` and checks if it is verified and not expired.

## Database Connection

The project uses MongoDB as its database. Mongoose is used to define models and interact with the database. The connection logic is handled in the `Database.ts` file inside the **Services** directory.

### Connecting to MongoDB

The MongoDB connection URL should be stored in the `.env` file under the `MONGO_URI` variable. The database connection is initialized when the server starts.

## Error Handling

The API includes basic error handling using `try-catch` blocks in each controller. If any operation fails, it returns an error message status code:

- `500`: Internal server error
- `404`: Resource not found (for non-existent medications or licenses)


