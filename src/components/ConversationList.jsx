// src/components/ConversationList.jsx
import React from "react";

function ConversationList({ conversations, selectedId, onSelect }) {
    return (
        <div style={{ width: "25%", background: "#f0f0f0", padding: "1rem" }}>
            <h3>Inbox</h3>
            {conversations.map((conv) => (
                <div
                    key={conv.id}
                    onClick={() => onSelect(conv.id)}
                    style={{
                        padding: "0.75rem",
                        marginBottom: "0.5rem",
                        background: conv.id === selectedId ? "#ddd" : "#fff",
                        cursor: "pointer",
                        borderRadius: "5px",
                    }}
                >
                    <strong>{conv.name}</strong>
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>
                        {conv.messages[conv.messages.length - 1].text}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ConversationList;
