# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `1-physical-ai-textbook`
**Date**: 2025-12-06

## Entities and Relationships

### User
-   **Description**: Represents an authenticated user of the textbook platform.
-   **Attributes**:
    -   `id` (UUID/Integer): Primary key, unique identifier for the user.
    -   `email` (String): User's email address, unique, used for authentication.
    -   `password_hash` (String): Hashed password for secure storage.
    -   `background_data` (JSON/Text): Stores answers to 3-5 general learning preference questions from signup, used for personalization.
    -   `created_at` (Timestamp): Date and time of user creation.
    -   `updated_at` (Timestamp): Last date and time of user update.
-   **Relationships**:
    -   One-to-many with `ChatHistory` (a user can have many chat interactions).
    -   One-to-many with `PersonalizedContent` (a user can have many personalized chapter versions).
    -   One-to-many with `Progress` (a user can have progress tracked across many chapters).

### Chapter
-   **Description**: Represents a static chapter of the textbook.
-   **Attributes**:
    -   `id` (UUID/Integer): Primary key, unique identifier for the chapter (e.g., chapter number or slug).
    -   `title` (String): Title of the chapter.
    -   `content` (Text): Original, unpersonalized content of the chapter.
    -   `order` (Integer): Display order of the chapter.
-   **Relationships**:
    -   One-to-many with `PersonalizedContent` (a chapter can have many personalized versions by different users).
    -   One-to-many with `Progress` (a chapter can be part of many users' progress tracking).

### ChatHistory
-   **Description**: Stores the history of interactions between a user and the RAG chatbot.
-   **Attributes**:
    -   `id` (UUID/Integer): Primary key.
    -   `user_id` (UUID/Integer): Foreign key referencing `User.id`.
    -   `question` (Text): The user's query to the chatbot.
    -   `answer` (Text): The chatbot's response.
    -   `context_text` (Text, Optional): The selected text from the textbook that was used as context for the question.
    -   `created_at` (Timestamp): Date and time of the chat interaction.
-   **Relationships**:
    -   Many-to-one with `User`.

### PersonalizedContent
-   **Description**: Stores user-specific adapted versions of chapter content.
-   **Attributes**:
    -   `id` (UUID/Integer): Primary key.
    -   `user_id` (UUID/Integer): Foreign key referencing `User.id`.
    -   `chapter_id` (UUID/Integer): Foreign key referencing `Chapter.id`.
    -   `personalized_text` (Text): The AI-adapted content for the specific user and chapter.
    -   `created_at` (Timestamp): Date and time of personalization generation.
-   **Relationships**:
    -   Many-to-one with `User`.
    -   Many-to-one with `Chapter`.

### Progress
-   **Description**: Tracks a user's reading progress within chapters.
-   **Attributes**:
    -   `id` (UUID/Integer): Primary key.
    -   `user_id` (UUID/Integer): Foreign key referencing `User.id`.
    -   `chapter_id` (UUID/Integer): Foreign key referencing `Chapter.id`.
    -   `status` (String): Current status of the chapter for the user (e.g., 'started', 'in_progress', 'completed').
    -   `last_accessed` (Timestamp): Last date and time the user accessed this chapter.
-   **Relationships**:
    -   Many-to-one with `User`.
    -   Many-to-one with `Chapter`.

## Database Considerations

-   **Primary Database**: Neon PostgreSQL (free tier).
-   **Vector Database**: Qdrant Cloud (free tier) for RAG embedding storage and retrieval.
-   **Schema Evolution**: Use database migration tools (e.g., Alembic for Python) to manage schema changes.

