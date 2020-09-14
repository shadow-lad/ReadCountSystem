# README

To run the backend, cd into the directory and execute the following command

```sh
./gradlew bootRun
```

## RESTful API information

### 1. To Signup

Send POST with body containing the following JSON in the body to localhost:8080/auth/signup

```json
{
	"username": "user123",
	"password": "pwd"
}
```

Response received with code 200 on successful signup will be

```json
{
	"message": "User registered!"
}
```

### 2. To Signin

Send POST with body containing the following JSON in the body to localhost:8080/auth/signin

```json
{
	"username": "user123",
	"password": "pwd"
}
```

Response received with code 200 on successful login will be

```json
{
	"token": "ddffgggddghghggws...",
	"type": "Bearer"
	// more
	// entries
	// here
}
```

The important thing to note is the token and type of token this will be used to authorize the user.

To use this token, add it to the html request header in the authorization field. For more information on Authorization field, refer to the following link:

[Authorization in HTML]("https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#:~:text=The%20HTTP%20Authorization%20request%20header,and%20the%20WWW%2DAuthenticate%20header.")
