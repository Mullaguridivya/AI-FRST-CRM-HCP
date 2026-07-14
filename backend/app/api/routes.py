from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.database.models import Interaction
from app.schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
)

router = APIRouter(prefix="/interactions", tags=["Interactions"])


@router.post("/", response_model=InteractionResponse)
def create_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db)
):

    new_interaction = Interaction(
        doctor_name=interaction.doctor_name,
        hospital=interaction.hospital,
        specialization=interaction.specialization,
        meeting_date=interaction.meeting_date,
        product_discussed=interaction.product_discussed,
        outcome=interaction.outcome,
        follow_up_date=interaction.follow_up_date,
        notes=interaction.notes,
        ai_response=interaction.ai_response
    )

    db.add(new_interaction)
    db.commit()
    db.refresh(new_interaction)

    return new_interaction

@router.get("/", response_model=list[InteractionResponse])
def get_interactions(db: Session = Depends(get_db)):

    interactions = db.query(Interaction).order_by(Interaction.id.desc()).all()

    return interactions