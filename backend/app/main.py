from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.services.groq_service import ask_groq
from app.langgraph.agent import graph
from app.database.connection import engine, Base
from app.database import models
from app.api.routes import router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI-First CRM HCP Module",
    description="Backend API for Healthcare Professional Interaction Logging",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI-First CRM Backend"
    }


@app.get("/health")
def health():
    return {
        "status": "Backend Running Successfully"
    }


@app.get("/ai-test")
def ai_test():

    reply = ask_groq("Explain CRM in one sentence.")

    return {
        "response": reply
    }


@app.post("/chat")
def chat(message: dict):

    result = graph.invoke(
        {
            "user_input": message["message"]
        }
    )

    return result