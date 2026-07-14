from sqlalchemy import Column, Integer, String, Date, Text

from app.database.connection import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    doctor_name = Column(String(100))
    hospital = Column(String(150))
    specialization = Column(String(100))
    meeting_date = Column(Date)

    product_discussed = Column(String(150))
    outcome = Column(String(100))
    follow_up_date = Column(Date)

    notes = Column(Text)
    ai_response = Column(Text)