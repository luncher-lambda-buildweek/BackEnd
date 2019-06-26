

# Luncher-BE

## Server

https://luncher-app.herokuapp.com

## Dependencies
-  "bcryptjs": "^2.4.3",
-  "cors": "^2.8.5",
-  "dotenv": "^8.0.0",
-  "email-validator": "^2.0.4",
-  "express": "^4.17.1",
-  "express-session": "^1.16.2",
-  "helmet": "^3.18.0",
-  "jsonwebtoken": "^8.5.1",
-  "knex": "^0.17.6",
-  "knex-cleaner": "^1.1.4",
-  "pg": "^7.11.0",
-  "sqlite3": "^4.0.9"

## devDependencies
- "cross-env": "^5.2.0",
- "jest": "^24.8.0",
- "nodemon": "^1.19.0",
- "supertest": "^4.0.2"

# Auth Routes
## Register /api/register (POST)
**Users Table:**
- email <-- Required (string) (unique)
- password <-- Required (string) 
- role (string: has to be either donor or school) <-- Required
- firstName (string)
- lastName (string)



#### 201 Created Responds with
Example of a successful response
```
{
    "message": "You are registered as sarahlee@email.com!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmFobGVlQGVtYWlsLmNvbSIsInJvbGUiOiJzY2hvb2wiLCJpYXQiOjE1NjE0OTQxODYsImV4cCI6MTU2MTU4MDU4Nn0.raH3thnFjS0a6OHEyD1QRQ6_MHlLpGLycNmkwTHmvDo",
    "role": "school"
}
```

## Login /api/login (POST)

- email <-- Required
- password <-- Required

#### 200 Success Responds with
Example of the following body
```
{
    "message": "Welcome sarahlee@email.com!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJlbWFpbCI6InNhcmFobGVlQGVtYWlsLmNvbSIsInJvbGUiOiJzY2hvb2wiLCJpYXQiOjE1NjE0OTQzMzQsImV4cCI6MTU2MTU4MDczNH0.WJPO65qAfrZSxX6n8oAXX-c52ZCFIJmfVNaUXf8PcQU",
    "id": 7,
    "role": "school"
}
```

# Schools Routes
## Get Schools /api/schools (GET)
#### 200 Success Responds with
Example of an array of objects 
```
[
    {
        "id": 2,
        "user_id": 5,
        "schoolName": "Harvest",
        "location": "San Francisco",
        "email": null,
        "phoneNumber": null,
        "fundsNeeded": 5000,
        "currentFunds": null,
        "schoolImg": null
    },
    {
        "id": 3,
        "user_id": 5,
        "schoolName": "NorthRidge Highschool",
        "location": "San Francisco",
        "email": null,
        "phoneNumber": null,
        "fundsNeeded": 400,
        "currentFunds": null,
        "schoolImg": null
    }
]
```
## Get Specific School /api/schools/:id (GET)
#### 200 Success Responds with
Example of an object with body
```
{
    "id": 3,
    "user_id": 5,
    "schoolName": "NorthRidge Highschool",
    "location": "San Francisco",
    "email": null,
    "phoneNumber": null,
    "fundsNeeded": 400,
    "currentFunds": null,
    "schoolImg": null
}
```
## Add School /api/schools (POST)
#### Must be a registered user with role as school or logged in
**Schools Table**
- user_id <-- Foreign key that references the id of users
- id <-- Primary key 
- schoolName <-- Required (string)
- location <-- Required (string)
- fundsNeeded <-- Required (integer)
- currentFunds <-- (integer)
- phoneNumber <-- (integer)
- email <-- (string))


#### 201 Success Responds with 
Message and example of body with any non-required inputs
```
{
    "message": "School has been added",
    "school": {
        "id": 2,
        "user_id": 5,
        "schoolName": "Harvest",
        "location": "San Francisco",
        "email": null,
        "phoneNumber": null,
        "fundsNeeded": 5000,
        "currentFunds": null,
        "schoolImg": null
    }
}
```

## Update Specific school(PUT)
#### Must be a registered user with role as school or logged in to update item
#### 202 Success Responds with
Message and example with updated values
```
{
    "message": "The following updates have been made:",
    "changes": {
        "id": 3,
        "user_id": 5,
        "schoolName": "NorthRidge Highschool",
        "location": "San Francisco",
        "email": null,
        "phoneNumber": null,
        "fundsNeeded": 50000,
        "currentFunds": null,
        "schoolImg": null
    }
}
```
## Delete Specific school (DELETE)
#### Must be a registered user with role as school or logged in to delete item
#### 202 Success Responds with
Message with name of school deleted
```
{
    "message": "The following school listing was removed:",
    "schoolName": "NorthRidge Highschool"
}
```


## Donate /api/schools/:id/donate (POST)
#### 202 Success Responds with
Message and example with changes
```
{
    "message": "The donation has been made!",
    "changes": {
        "currentFunds": 150
    }
}
```

