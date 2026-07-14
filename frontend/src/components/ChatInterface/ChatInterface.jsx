import { useState } from "react";
import API from "../../services/api";
import "./ChatInterface.css";

function ChatInterface() {

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {

    if (!message.trim()) return;

    try {

      const res = await API.post("/chat", {
        message
      });

      setResponse(res.data.response);

    } catch (err) {

      console.log(err);
      alert("Unable to contact AI.");

    }

  };

  return (
    <div className="chat-card">

      <h2>AI Conversation Assistant</h2>

      <textarea
        rows="8"
        placeholder="Describe today's HCP meeting..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={askAI}>
        Ask AI
      </button>

      {response && (
        <>
          <h3 style={{ marginTop: "20px" }}>AI Response</h3>

          <div className="ai-message">
            {response}
          </div>
        </>
      )}

    </div>
  );
}

export default ChatInterface;