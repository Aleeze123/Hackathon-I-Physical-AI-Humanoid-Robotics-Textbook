# API Contracts: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `1-physical-ai-textbook`
**Date**: 2025-12-06

## OpenAPI Specification (Conceptual)

This document outlines the conceptual API contracts. A formal OpenAPI (Swagger) YAML/JSON specification will be generated during implementation.

### Authentication Endpoints

#### `POST /api/auth/signup`
-   **Description**: Registers a new user with email, password, and learning background data.
-   **Request Body (JSON)**:
    ```json
    {
      "email": "user@example.com",
      "password": "secure_password_123",
      "background_data": {
        "learning_style": "visual",
        "prior_knowledge": "intermediate",
        "areas_of_interest": ["robotics", "AI ethics"]
      }
    }
    ```
-   **Responses**:
    -   `201 Created`: User successfully registered.
    -   `400 Bad Request`: Invalid input or missing required fields.
    -   `409 Conflict`: Email already registered.

#### `POST /api/auth/login`
-   **Description**: Authenticates an existing user and returns an access token.
-   **Request Body (JSON)**:
    ```json
    {
      "email": "user@example.com",
      "password": "secure_password_123"
    }
    ```
-   **Responses**:
    -   `200 OK`: Successful login, returns `{"access_token": "jwt_token", "token_type": "bearer"}`.
    -   `401 Unauthorized`: Invalid credentials.

### RAG Chatbot Endpoint

#### `POST /api/chat`
-   **Description**: Submits a query to the RAG chatbot, optionally with selected text for context.
-   **Request Body (JSON)**:
    ```json
    {
      "user_id": "uuid_of_user",
      "question": "What is ROS 2?",
      "selected_text": "ROS 2 is the Robotic Operating System..." (optional)
    }
    ```
-   **Responses**:
    -   `200 OK`: Returns `{"answer": "AI generated response"}`.
    -   `400 Bad Request`: Invalid input or missing required fields.
    -   `401 Unauthorized`: User not authenticated.
    -   `500 Internal Server Error`: RAG processing error.

### Personalization Endpoint

#### `POST /api/personalize/{chapter_id}`
-   **Description**: Generates a personalized version of a specific chapter for the authenticated user based on their background data.
-   **Path Parameters**:
    -   `chapter_id` (Integer/UUID): The ID of the chapter to personalize.
-   **Request Body (JSON)**:
    ```json
    {
      "user_id": "uuid_of_user"
    }
    ```
-   **Responses**:
    -   `200 OK`: Returns `{"personalized_content": "Adapted chapter text"}`.
    -   `400 Bad Request`: Invalid chapter ID or user ID.
    -   `401 Unauthorized`: User not authenticated.
    -   `500 Internal Server Error`: Personalization generation error.

### Translation Endpoint

#### `POST /api/translate`
-   **Description**: Translates a given text snippet to Urdu.
-   **Request Body (JSON)**:
    ```json
    {
      "text": "Hello World",
      "target_language": "ur" (e.g., for Urdu)
    }
    ```
-   **Responses**:
    -   `200 OK`: Returns `{"translated_text": "Urdu translation"}`.
    -   `400 Bad Request`: Invalid input or missing text.
    -   `500 Internal Server Error`: Translation service error.