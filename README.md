

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
- role (string: has to be either donor or school)
- firstName (string)
- lastName (string)



#### 201 Created Responds with
Example of the following body with any of the non-required inputs
```
{
    "id": 2,
    "email": "sarah@email.com",
    "password": "$2a$10$V9ZkIkDMa0knA/I5l7BwoOmjJ3reCFNlASdhASHDdDDnAIQuzVBPrhuUyC",
    "role": "school",
    "firstName": John,
    "lastName": Smith,
}
```

## Login /api/login (POST)

- email <-- Required
- password <-- Required

#### 200 Success Responds with
Example of the following body
```
{
    "email": "sarah@email.com",
    "token": "eYsdasyfsAYDhyeyseyewyeYASDYYySYyefhFHEUWWEYyweyfYUEYYFYWEYWEYFweFYEYWEFWYwYWEYFHWEYFweYFYWEDHFHfdhhfdhfhewOEIOWOEIuu",
    "id": 2
}
```

# Schools Routes
## Get Schools /api/schools (GET)
#### 200 Success Responds with
Example of an array of objects 
```
[
    {
        "id": 1,
        "school": "NorthRidge Highschool",
        "address": "58 northridge street
        San Francisco, CA 94066"
        "phone": 4158859292,
        "email": sarah@email.com,
        "neededFund": 5000.00,
        "imgURL": "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?cs=srgb&dl=chairs-classroom-college-289740.jpg&fm=jpg"
    },
    {
        "id": 2,
        "school": "Southgate Highschool",
        "address": "330 southgate street
        San Francisco, CA 94066"
        "phone": 4157896192,
        "email": bob@email.com,
        "neededFund": 400.00,
        "imgURL": "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?cs=srgb&dl=chairs-classroom-college-289740.jpg&fm=jpg"
    },
]
```
## Get Specific School /api/schools/:id (GET)
#### 200 Success Responds with
Example of an object with body
```
{
    "id": 2,
    "school": "Southgate Highschool",
    "address": "330 southgate street
    San Francisco, CA 94066"
    "phone": 4157896192,
    "email": bob@email.com,
    "neededFund": 400.00,
    "currentFund": 20.00
    "imgURL": "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?cs=srgb&dl=chairs-classroom-college-289740.jpg&fm=jpg"
}
```
## Add School /api/schools (POST)
#### Must be a registered user with role as school or logged in
**Schools Table**
- users_id <-- Foreign key that references the id of users
- id <-- Primary key 
- school <-- Required (string)
- address <-- Required (string)
- neededFund <-- Required (integer)
- currentFund <-- (integer)
- phone <-- (integer)
- email <-- (string))


#### 201 Success Responds with 
Message and example of body with any non-required inputs
```
{
    "message": "School has been added",
    "school": {
        "id": 10,
        "user_id": 2,
        "school": "Hogwarts",
        "address": "9 Hogwarts street Los Angeles, CA 92222",
        "neededFund": 4000.00,
        "currentFund": 90,
        "phone": 2332223443,
        "email": "hogwarts@email.com"
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
    "school": {
        "id": 10,
        "user_id": 2,
        "school": "Hogwarts",
        "address": "9 Hogwarts street Los Angeles, CA 92222",
        "neededFund": 4000.00,
        "currentFund": 90,
        "phone": 2332223443,
        "email": "hogwarts@email.com"
    }
}
```
## Delete Specific school (DELETE)
#### Must be a registered user with role as school or logged in to delete item
#### 202 Success Responds with
Message with title of school deleted
```
{
    "message": "The following school listing was removed:",
    "deleted": "Hogwarts"
}
```