import { useState } from "react";
import API from "../../services/api";
import "./InteractionForm.css";

function InteractionForm() {

    const [formData, setFormData] = useState({
        doctor_name: "",
        hospital: "",
        specialization: "",
        meeting_date: "",
        product_discussed: "",
        outcome: "",
        follow_up_date: "",
        notes: ""
    });

    const [response, setResponse] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // Step 1: Ask AI
            const ai = await API.post("/chat", {
                message: formData.notes
            });

            // Step 2: Save into Database
            await API.post("/interactions/", {
                ...formData,
                ai_response: ai.data.response
            });

            setResponse(ai.data.response);

            alert("Interaction Saved Successfully!");

        }

        catch (err) {

            console.log(err);

            alert("Something went wrong.");

        }

    };

    return (

        <div className="card">

            <h2>Healthcare Professional Interaction</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="doctor_name"
                    placeholder="Doctor Name"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="hospital"
                    placeholder="Hospital"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="meeting_date"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="product_discussed"
                    placeholder="Product Discussed"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="outcome"
                    placeholder="Outcome"
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="follow_up_date"
                    onChange={handleChange}
                />

                <textarea
                    rows="5"
                    name="notes"
                    placeholder="Interaction Notes"
                    onChange={handleChange}
                />

                <br />

                <button type="submit">
                    Save Interaction
                </button>

            </form>

            <hr />

            <h3>AI Response</h3>

            <p>{response}</p>

        </div>

    );
}

export default InteractionForm;