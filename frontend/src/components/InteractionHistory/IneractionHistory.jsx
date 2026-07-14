import { useEffect, useState } from "react";
import API from "../../services/api";

function InteractionHistory() {

    const [interactions, setInteractions] = useState([]);

    useEffect(() => {
        fetchInteractions();
    }, []);

    const fetchInteractions = async () => {

        try {

            const res = await API.get("/interactions/");

            setInteractions(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="card">

            <h2>Interaction History</h2>

            <table border="1" cellPadding="8">

                <thead>

                    <tr>
                        <th>Doctor</th>
                        <th>Hospital</th>
                        <th>Outcome</th>
                        <th>Meeting</th>
                    </tr>

                </thead>

                <tbody>

                    {interactions.map((item) => (

                        <tr key={item.id}>

                            <td>{item.doctor_name}</td>

                            <td>{item.hospital}</td>

                            <td>{item.outcome}</td>

                            <td>{item.meeting_date}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default InteractionHistory;