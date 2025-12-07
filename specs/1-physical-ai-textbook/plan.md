# Implementation Plan: Physical AI & Humanoid Robotics Textbook

**Branch**: `1-physical-ai-textbook` | **Date**: 2025-12-06 | **Spec**: specs/1-physical-ai-textbook/spec.md
**Input**: Feature specification from `/specs/1-physical-ai-textbook/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create an AI-Native textbook for teaching Physical AI & Humanoid Robotics with a modern Docusaurus UI, integrated RAG chatbot, and bonus features for a hackathon. The implementation will follow a phased approach: Docusaurus project setup, core feature integration (theme, language, auth, navigation), book content creation, RAG backend development, and bonus feature implementation (personalization, Urdu translation API, background survey).

## Technical Context

**Language/Version**: TypeScript (Docusaurus v3, React 18), Python (FastAPI)
**Primary Dependencies**: Docusaurus, React, Tailwind CSS, FastAPI, OpenAI API, Qdrant Cloud, Neon PostgreSQL, Better-Auth, i18next
**Storage**: Neon PostgreSQL (for users, chat_history, personalized_content, progress tracking)
**Testing**: NEEDS CLARIFICATION
**Target Platform**: Web (Frontend: GitHub Pages, Backend: Railway/Render)
**Project Type**: Web application (frontend + backend)
**Performance Goals**: Fast loading times for UI, responsive chatbot interactions (<2s latency for RAG queries), smooth content personalization.
**Constraints**: Must use free-tier services (Qdrant, Neon), GitHub Pages deployment for frontend, 90-second demo video, all code from Claude.
**Scale/Scope**: 6 comprehensive chapters, RAG chatbot, user authentication with background survey, chapter personalization, multi-language support (Urdu/English), dark/light theme toggle, progress tracking, select-text to Ask AI feature.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **I. Hackathon Winning Quality**: The plan supports this by focusing on innovative features (RAG, personalization, multi-language) and a polished UI.
- [x] **II. Production Ready**: The choice of robust frameworks (Docusaurus, React, FastAPI) and scalable services (PostgreSQL, Qdrant) aligns with production readiness.
- [x] **III. Free-Tier Friendly**: Explicitly adheres to this by using free-tier versions of Qdrant and Neon PostgreSQL, and GitHub Pages for deployment.
- [x] **IV. Fast Deployment**: Deployment to GitHub Pages and services like Railway/Render emphasizes rapid and efficient deployment.
- [x] **V. Multi-Language Support**: The plan directly addresses this with i18n configuration, LanguageSwitcher, and a dedicated Urdu translation API.
- [x] **VI. User Personalization**: Included features like background surveys and chapter personalization directly fulfill this principle.

## Project Structure

### Documentation (this feature)

```text
specs/1-physical-ai-textbook/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── models/            # FastAPI models for User, ChatHistory, PersonalizedContent, Progress
│   ├── services/          # Business logic for RAG, Auth, Personalization, Translation
│   └── api/               # FastAPI endpoint definitions
└── tests/

frontend/
├── src/
│   ├── components/        # UI components like ThemeToggle, LanguageSwitcher, AuthButton, ChatbotWidget, PersonalizeButton, TranslateButton, ChapterNav
│   ├── pages/             # Docusaurus pages for chapters and other content
│   ├── services/          # Frontend services for API interaction
│   └── i18n/              # Internationalization configuration and content
└── tests/
```

**Structure Decision**: A monorepo structure with distinct `backend/` (FastAPI) and `frontend/` (Docusaurus/React) directories will be used to clearly separate concerns and facilitate independent development and deployment of each part of the application.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
