# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information

### HTTP Method

`POST`

### Request Body
The Request body should be in JSON format and include the following fiels:
-  `fullname` (object)
    - `firstname` : (string, require) user's firstname (minimum 3 character)
    - `lastname` : (string, optional) user's lastname (minimun 3 character)
-  `email` : (string, required) user's email address (must be a valid email )
- `password` : (string, required) user's password (minimum 6 character)

### Example Response
- `users` (object) 
    - `fullname` (object)
        - `firstname` : (string, require) user's firstname (minimum 3 character)
        - `lastname` : (string, optional) user's lastname (minimun 3 character)
    -  `email` : (string, required) user's email address (must be a valid email )
    - `password` : (string, required) user's password (minimum 6 character)
- `token` : (string) JWT Token
