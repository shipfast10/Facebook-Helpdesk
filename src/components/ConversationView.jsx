// src/components/ConversationView.jsx
import React, { useState } from "react";

function ConversationView({ conversation }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        alert(`Message sent: ${input}`);
        setInput("");
    };

    return (
        <div style={{ flex: 1, padding: "1rem", display: "flex", flexDirection: "column" }}>
            <h3>Conversation with {conversation.name}</h3>
            <div style={{ flex: 1, overflowY: "auto", marginBottom: "1rem" }}>
                {conversation.messages.map((msg, idx) => (
                    <div
                        key={idx}
                        style={{
                            alignSelf: msg.from === "agent" ? "flex-end" : "flex-start",
                            background: msg.from === "agent" ? "#d1e7dd" : "#e9ecef",
                            padding: "0.5rem 1rem",
                            marginBottom: "0.5rem",
                            borderRadius: "15px",
                            maxWidth: "60%",
                        }}
                    >
                        <p style={{ margin: 0 }}>{msg.text}</p>
                        <small style={{ fontSize: "0.7rem" }}>{msg.time}</small>
                    </div>
                ))}
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ flex: 1, padding: "0.5rem" }}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ConversationView;
