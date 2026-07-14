\# AI-First CRM HCP Module



An AI-powered Customer Relationship Management (CRM) module for Healthcare Professionals (HCPs) built using \*\*React\*\*, \*\*FastAPI\*\*, \*\*PostgreSQL\*\*, \*\*LangGraph\*\*, and \*\*Groq LLM\*\*. The application enables field representatives to log HCP interactions, generate AI-assisted responses, and maintain interaction history.



\---



\# Features



\- Log Healthcare Professional (HCP) interactions

\- AI-powered conversation assistance using Groq LLM

\- LangGraph-based AI workflow

\- Store interaction history in PostgreSQL

\- View previously logged interactions

\- REST APIs with FastAPI

\- Interactive API documentation using Swagger



\---



\# Technology Stack



\## Frontend

\- React.js

\- Axios

\- CSS



\## Backend

\- Python

\- FastAPI

\- SQLAlchemy



\## Database

\- PostgreSQL



\## AI Framework

\- LangGraph



\## Large Language Model

\- Groq

\- Model: \*\*llama-3.3-70b-versatile\*\*



> \*\*Note:\*\* The assignment originally recommended \*\*gemma2-9b-it\*\*, which has been deprecated by Groq. Therefore, \*\*llama-3.3-70b-versatile\*\* was used as the supported replacement.



\---



\# LangGraph Agent



The LangGraph agent acts as the intelligent orchestrator for Healthcare Professional interactions by processing user input and coordinating AI-assisted responses.



\### Proposed LangGraph Tools



\- \*\*Log Interaction\*\* – Capture and store HCP interaction details.

\- \*\*Edit Interaction\*\* – Modify previously saved interaction records.

\- \*\*Summarize Interaction\*\* – Generate concise AI summaries of meeting notes.

\- \*\*Recommend Follow-up\*\* – Suggest next actions based on interaction history.

\- \*\*Search Interaction\*\* – Retrieve previous HCP interactions from the database.



\---



\# Project Structure



```

AI-FRST-CRM-HCP

│

├── backend

│   ├── app

│   │   ├── api

│   │   ├── database

│   │   ├── langgraph

│   │   ├── schemas

│   │   ├── services

│   │   └── main.py

│

├── frontend

│   ├── src

│   │   ├── components

│   │   ├── pages

│   │   ├── services

│   │   └── App.jsx

│

├── screenshots

│

└── README.md

```



\---



\# Screenshots



\## Home Screen



Displays the Healthcare Professional Interaction Form, AI Conversation Assistant, and Interaction History.



!\[Home](screenshots/home.png)



\---



\## AI Interaction



AI-generated response using Groq LLM through LangGraph.



!\[AI Interaction](screenshots/ai-interaction.png)



\---



\## Interaction History



Displays previously logged HCP interactions stored in PostgreSQL.



!\[Interaction History](screenshots/interaction-history.png)



\---



\## Swagger API Documentation



FastAPI automatically generated API documentation.



!\[Swagger](screenshots/swagger-api.png)



\---



\# REST API Endpoints



| Method | Endpoint | Description |

|----------|----------|-------------|

| POST | `/chat` | Generate AI response |

| POST | `/interactions/` | Save interaction |

| GET | `/interactions/` | Retrieve interaction history |

| GET | `/health` | Health check |

| GET | `/ai-test` | Test AI connectivity |



\---



\# Database



Database: \*\*PostgreSQL\*\*



Table:



\- interactions



Columns:



\- id

\- doctor\_name

\- hospital

\- specialization

\- meeting\_date

\- product\_discussed

\- outcome

\- follow\_up\_date

\- notes

\- ai\_response



\---



\# Running the Project



\## Backend



```bash

cd backend



python -m venv venv



venv\\Scripts\\activate



pip install -r requirements.txt



uvicorn app.main:app --reload

```



Backend:



```

http://127.0.0.1:8000

```



Swagger:



```

http://127.0.0.1:8000/docs

```



\---



\## Frontend



```bash

cd frontend



npm install



npm run dev

```



Frontend:



```

http://localhost:5173

```



\---



\# Assignment Deliverables Covered



\- React-based user interface

\- FastAPI backend

\- PostgreSQL database integration

\- LangGraph integration

\- Groq LLM integration

\- AI-assisted interaction logging

\- Interaction history

\- REST APIs

\- GitHub repository with documentation



\---



\# Future Enhancements



\- Edit interaction functionality

\- Delete interaction functionality

\- AI-powered entity extraction

\- Follow-up reminder system

\- Advanced search and filtering

\- Dashboard and analytics



\---



\# Author



\*\*Mullaguri Divya\*\*



B.Tech – Electronics and Communication Engineering



AI-First CRM HCP Module Assignment





This is README.md you have given me

