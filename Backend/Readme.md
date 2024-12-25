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


## `Captain` 


## `/captains/register` Endpoint

### Description 
Registers a new captain by creating a captain account with the provided information.

### HTTP Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:
- `fullname` : (object)
    - `firstname`: (string, required) : Captain's firstname minimum 3 character. 
    - `lastname` : (string,optional) : Captain's lastname.
- `email` : (string,required) : Captain's email address (must be a valid email).
- `password` : (string) : Captain's Password minimum 6 character.
- `vehicle` : (object) : 
    - `Color` : (string, required) : Vehicle Color ( minimum 3 character).
    - `plate` : (string, required) : Vehicle plate number (minimum 3 character).
    -  `capacity` : (number, required) : Vehicle Passenger Capacity (minimum 1 ).
    - `vehicleType` : (string, required) : Type of vehicle (must be 'car', 'motorcycle' 'auto').

### Example Response 
- `captain` : (object)
    - `fullname` : (object)
        - `firstname`: (string, required) : Captain's firstname minimum 3 character. 
        - `lastname` : (string,optional) : Captain's lastname.
    - `email` : (string,required) : Captain's email address (must be a valid email).
    - `password` : (string) : Captain's Password minimum 6 character.
    - `vehicle` : (object) : 
        - `Color` : (string, required) : Vehicle Color ( minimum 3 character).
        - `plate` : (string, required) : Vehicle plate number (minimum 3 character).
        -  `capacity` : (number, required) : Vehicle Passenger Capacity (minimum 1 ).
        - `vehicleType` : (string, required) : Type of vehicle (must be 'car', 'motorcycle' 'auto').
- `token` : (string) : JWT Token



### `/captains/login` Endpoint
### Description
Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method
`POST`

### Request body
The request body should be in JSON format and include the following fields:
- `email` : (string, required) : Captain's email address (must be a valid email).
- `password` : (string, required) : Captain's password (minimum 6 character).

### Example Response
- `captain` : (Object)
    - `fullname` : (Object)
        - `firstname` : (string) : Captain's firstname 
        - `lastname` : (string) : Captain's lastname
    - `email` : (string) : captain's valid email address
    - `password` : (string) : captain's login password
    - `vehicle` : (Object).
        - `color` : (string) : vehicle color
        - `plate` : (string) : vehicle palte no.
        - `capacity` : (number) : vehicle passenger capacity
        - `vehicleType` : (string) : Type of Vehicle.
    - `status` (String) : captain's status (Bydefault Inactive)
- `token` : (String) : JWT Token

### `/captains/profile` Endpoint

### Description
Retrieves the profile information of the currently authenticated captain.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in the Authorization header: `Authorization: Bearer <token>`

### Example Response 
- `captain` : (Object)
    - `fullname` : (Object)
        - `firstname` : (string) : Captain's firstname 
        - `lastname` : (string) : Captain's lastname
    - `email` : (string) : captain's valid email address
    - `password` : (string) : captain's login password
    - `vehicle` : (Object).
        - `color` : (string) : vehicle color
        - `plate` : (string) : vehicle palte no.
        - `capacity` : (number) : vehicle passenger capacity
        - `vehicleType` : (string) : Type of Vehicle.
    - `status` (String) : captain's status (Bydefault Inactive)

### `/captain/logout` Endpoint

### Description
Logout the current captain and blacklist the token provided in cookie or headers.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in the Authorization header or cookie.

### Example Response
- `message` (String) : Logout Successfully.



