from pydantic import BaseModel
from datetime import date


class InteractionCreate(BaseModel):
    doctor_name: str
    hospital: str
    specialization: str
    meeting_date: date

    product_discussed: str
    outcome: str
    follow_up_date: date

    notes: str

    ai_response: str


class InteractionResponse(InteractionCreate):
    id: int

    class Config:
        from_attributes = True