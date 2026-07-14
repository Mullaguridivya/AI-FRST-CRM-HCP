from app.services.groq_service import ask_groq


def ai_chat(state):

    user_input = state["user_input"]

    response = ask_groq(user_input)

    state["response"] = response

    return state


def log_interaction(state):
    """
    Logs HCP interaction details.
    """
    return state


def edit_interaction(state):
    """
    Placeholder for editing an existing interaction.
    """
    return state


def summarize_interaction(state):
    """
    Generates AI summary of interaction.
    """
    return state


def recommend_followup(state):
    """
    Suggests next follow-up action.
    """
    return state


def search_interactions(state):
    """
    Searches previous HCP interactions.
    """
    return state