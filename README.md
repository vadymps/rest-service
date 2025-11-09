# REST Service

This is a simple REST web service built with Spring Boot, following the Spring.io REST tutorial.

## What You'll Build

A service that will accept HTTP GET requests at:
```
http://localhost:8080/greeting
```

And respond with a JSON representation of a greeting:
```json
{"id":1,"content":"Hello, World!"}
```

You can customize the greeting with an optional `name` parameter in the query string:
```
http://localhost:8080/greeting?name=User
```

## How to Run

### Build the application
```bash
./gradlew build
```

### Run the application
```bash
./gradlew bootRun
```

### Test the application
```bash
./gradlew test
```

## Try it out

Once the application is running, visit:
- http://localhost:8080/greeting
- http://localhost:8080/greeting?name=User

## Project Structure

- `src/main/java/com/example/restservice/RestServiceApplication.java` - Main application class
- `src/main/java/com/example/restservice/Greeting.java` - Greeting data model
- `src/main/java/com/example/restservice/GreetingController.java` - REST controller
- `src/test/java/com/example/restservice/GreetingControllerTests.java` - Integration tests