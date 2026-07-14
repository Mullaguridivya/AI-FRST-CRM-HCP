from langgraph.graph import StateGraph, END

from app.langgraph.state import CRMState
from app.langgraph.tools import (
    ai_chat,
    log_interaction,
    edit_interaction,
    summarize_interaction,
    recommend_followup,
    search_interactions,
)

builder = StateGraph(CRMState)

builder.add_node("chat", ai_chat)

builder.set_entry_point("chat")

builder.add_edge("chat", END)

graph = builder.compile()