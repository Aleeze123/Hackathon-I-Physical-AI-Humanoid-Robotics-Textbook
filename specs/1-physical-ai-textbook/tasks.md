# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/1-physical-ai-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/`
- Paths shown below assume web app structure.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create Docusaurus project structure in `frontend/`
- [ ] T002 [P] Install frontend dependencies (Docusaurus, React, Tailwind CSS, i18next, Better-Auth) in `frontend/package.json`
- [ ] T003 [P] Configure tsconfig.json for frontend in `frontend/tsconfig.json`
- [ ] T004 Create FastAPI application structure in `backend/src/`
- [ ] T005 [P] Install backend dependencies (FastAPI, Uvicorn, SQLAlchemy, psycopg2-binary) in `backend/requirements.txt`
- [ ] T006 Configure environment variables for both frontend and backend in `.env` files (`frontend/.env`, `backend/.env`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

⚠️ **CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Setup Neon PostgreSQL database connection and ORM (SQLAlchemy) in `backend/src/config.py`, `backend/src/database.py`
- [ ] T008 Setup Qdrant Cloud client in `backend/src/services/qdrant_client.py`
- [ ] T009 Implement base User model and database schema migration for it in `backend/src/models/user.py`, `backend/src/alembic/versions/`
- [ ] T010 [P] Implement JWT token generation and validation utilities in `backend/src/utils/jwt.py`
- [ ] T011 [P] Configure basic API routing and middleware structure in `backend/src/main.py`
- [ ] T012 Configure frontend internationalization (i18n) for Urdu/English in `frontend/i18n/` and `frontend/docusaurus.config.js`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Core Textbook Navigation (Priority: P1) 🎯 MVP

**Goal**: Users can navigate through the 6 chapters of the textbook to learn about Physical AI & Humanoid Robotics.

**Independent Test**: Access the textbook on a web browser and navigate between chapters.

### Implementation for User Story 1

- [ ] T013 [US1] Create main Docusaurus Layout component in `frontend/src/components/Layout.tsx`
- [ ] T014 [US1] Configure Docusaurus navigation sidebar with 6 chapters in `frontend/docusaurus.config.js`
- [ ] T015 [US1] Write Chapter 1: Introduction content in `frontend/docs/chapter1.mdx`
- [ ] T016 [US1] Write Chapter 2: Humanoid Robotics Fundamentals content in `frontend/docs/chapter2.mdx`
- [ ] T017 [US1] Write Chapter 3: ROS 2: The Robotic Nervous System content in `frontend/docs/chapter3.mdx`
- [ ] T018 [US1] Write Chapter 4: Digital Twins: Gazebo & NVIDIA Isaac content in `frontend/docs/chapter4.mdx`
- [ ] T019 [US1] Write Chapter 5: Vision-Language-Action (VLA) Models content in `frontend/docs/chapter5.mdx`
- [ ] T020 [US1] Write Chapter 6: Capstone: Autonomous Humanoid Pipeline content in `frontend/docs/chapter6.mdx`
- [ ] T021 [US1] Implement basic chapter display and routing in `frontend/src/pages/chapters/`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - RAG Chatbot Interaction (Priority: P1)

**Goal**: Users can ask questions about the textbook content and receive relevant answers from an AI chatbot.

**Independent Test**: Interact with the chatbot and verify its responses to questions and selected text.

### Implementation for User Story 2

- [ ] T022 [US2] Create embeddings for textbook content and upload to Qdrant in `backend/scripts/generate_embeddings.py`
- [ ] T023 [P] [US2] Implement Qdrant vector search logic for RAG in `backend/src/services/rag_service.py`
- [ ] T024 [P] [US2] Implement OpenAI LLM integration for RAG responses in `backend/src/services/llm_service.py`
- [ ] T025 [US2] Implement `/api/chat` endpoint (RAG with selected text) in `backend/src/api/chat.py`
- [ ] T026 [US2] Create ChatHistory model and migrations in `backend/src/models/chat_history.py`
- [ ] T027 [P] [US2] Create `ChatbotWidget.tsx` component in `frontend/src/components/ChatbotWidget.tsx`
- [ ] T028 [US2] Implement client-side logic for text selection and "Ask AI" feature in `frontend/src/utils/text_selection.ts`, `frontend/src/components/TextSelector.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - User Authentication & Personalization (Priority: P2)

**Goal**: Users can sign up/sign in, provide background information, personalize chapter content, and track their reading progress.

**Independent Test**: Complete signup/signin flow, interact with personalize chapter button and verify content adaptation, navigate chapters to verify progress tracking.

### Implementation for User Story 3

- [ ] T029 [P] [US3] Implement `POST /api/auth/signup` endpoint with background questions in `backend/src/api/auth.py`
- [ ] T030 [P] [US3] Implement `POST /api/auth/login` endpoint in `backend/src/api/auth.py`
- [ ] T031 [US3] Update User model to store background data and preferences in `backend/src/models/user.py`
- [ ] T032 [P] [US3] Create `AuthButton.tsx` component for signup/signin in `frontend/src/components/AuthButton.tsx`
- [ ] T033 [P] [US3] Create background survey form and integrate with signup flow in `frontend/src/components/SignupForm.tsx`
- [ ] T034 [US3] Create PersonalizedContent model and migrations in `backend/src/models/personalized_content.py`
- [ ] T035 [US3] Implement `POST /api/personalize/{chapter_id}` endpoint (AI-driven content adaptation) in `backend/src/api/personalize.py`
- [ ] T036 [P] [US3] Create `PersonalizeButton.tsx` component in `frontend/src/components/PersonalizeButton.tsx`
- [ ] T037 [US3] Create Progress model and migrations in `backend/src/models/progress.py`
- [ ] T038 [US3] Implement progress tracking service in `backend/src/services/progress_service.py`
- [ ] T039 [US3] Integrate progress tracking in frontend chapter views in `frontend/src/hooks/useProgress.ts`, `frontend/src/pages/chapters/`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: User Story 4 - Multi-language and Theme Customization (Priority: P2)

**Goal**: Users can switch the textbook's language between Urdu and English, toggle between dark and light themes, and translate specific text to Urdu in real-time.

**Independent Test**: Interact with the language and theme switchers, and the real-time Urdu translation feature.

### Implementation for User Story 4

- [ ] T040 [P] [US4] Create `ThemeToggle.tsx` component in `frontend/src/components/ThemeToggle.tsx`
- [ ] T041 [P] [US4] Implement dark/light theme context and persistence in `frontend/src/theme/ThemeProvider.tsx`, `frontend/src/css/custom.css`
- [ ] T042 [P] [US4] Create `LanguageSwitcher.tsx` component in `frontend/src/components/LanguageSwitcher.tsx`
- [ ] T043 [US4] Implement dynamic language switching logic in `frontend/src/utils/i18n.ts`, `frontend/src/pages/chapters/`
- [ ] T044 [US4] Implement `POST /api/translate` endpoint (Urdu translation) in `backend/src/api/translate.py`
- [ ] T045 [P] [US4] Create `TranslateButton.tsx` component for text selection translation in `frontend/src/components/TranslateButton.tsx`
- [ ] T046 [US4] Integrate selected text translation with frontend UI in `frontend/src/components/TextSelector.tsx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T047 [P] Add comprehensive unit tests for frontend components in `frontend/src/components/__tests__/`
- [ ] T048 [P] Add comprehensive unit and integration tests for backend services and API endpoints in `backend/tests/`
- [ ] T049 Implement logging and error handling across both frontend and backend for production readiness.
- [ ] T050 Conduct security review and hardening for authentication and API endpoints.
- [ ] T051 Optimize frontend assets and deployment for faster loading on GitHub Pages.
- [ ] T052 Review and refine UI/UX for all features, ensuring a clean, professional interface.
- [ ] T053 Create a detailed `quickstart.md` in `specs/1-physical-ai-textbook/`
- [ ] T054 Prepare for 90-second demo video, ensuring all features are showcase-ready.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed) or sequentially in priority order (P1 → P2 → P3 → P4)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1 - Core Textbook Navigation)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1 - RAG Chatbot Interaction)**: Can start after Foundational (Phase 2) - No dependencies on other stories, but benefits from Chapter content in US1.
- **User Story 3 (P2 - User Authentication & Personalization)**: Can start after Foundational (Phase 2) - Integrates with US1 (chapters) for personalization and US4 (theme for dark/light mode persistence).
- **User Story 4 (P2 - Multi-language and Theme Customization)**: Can start after Foundational (Phase 2) - No dependencies on other stories for core switching, but integrates with US1 (chapters) and US3 (auth) for UI elements.

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Many tasks within each user story are marked [P] for parallel execution
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 3 - User Authentication & Personalization

```bash
# Frontend components for Auth & Personalization can be developed in parallel:
Task: "Create AuthButton.tsx component for signup/signin in frontend/src/components/AuthButton.tsx"
Task: "Create background survey form for signup in frontend/src/components/SignupForm.tsx"
Task: "Create PersonalizeButton.tsx component in frontend/src/components/PersonalizeButton.tsx"

# Backend logic can be developed in parallel with frontend:
Task: "Implement POST /api/auth/signup endpoint with background questions in backend/src/api/auth.py"
Task: "Implement POST /api/auth/login endpoint in backend/src/api/auth.py"
Task: "Implement POST /api/personalize/{chapter_id} endpoint (AI-driven content adaptation) in backend/src/api/personalize.py"
```

---

## Implementation Strategy

### MVP First (User Story 1 & 2)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3.  Complete Phase 3: User Story 1 (Core Textbook Navigation)
4.  Complete Phase 4: User Story 2 (RAG Chatbot Interaction)
5.  **STOP and VALIDATE**: Test User Stories 1 & 2 independently
6.  Deploy/demo if ready

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 → Test independently → Deploy/Demo
3.  Add User Story 2 → Test independently → Deploy/Demo
4.  Add User Story 3 → Test independently → Deploy/Demo
5.  Add User Story 4 → Test independently → Deploy/Demo
6.  Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together
2.  Once Foundational is done:
    -   Developer A: User Story 1
    -   Developer B: User Story 2
    -   Developer C: User Story 3
    -   Developer D: User Story 4
3.  Stories complete and integrate independently

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Verify tests fail before implementing
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
