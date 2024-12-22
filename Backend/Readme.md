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

## `users/login`  Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST` 
### Endpoint
`users/login`

### Request Body 

The Request body should be in JSON format and include the following fiels:
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


## `/users/profile` Endpoint

### Description 

Retrieves the profile information of the currently authenticated user.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

### Example Response 
- `users` (object) 
    - `fullname` (object)
        - `firstname` : (string) user's firstname (minimum 3 character)
        - `lastname` : (string) user's lastname (minimun 3 character)
    -  `email` : (string) user's email address 

## `/users/logout` Endpoint

### Description
Logout the current user and blacklist the token and provided in the cookie or headers

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in the Authorization header or cookie:




