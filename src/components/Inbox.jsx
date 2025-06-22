import React, { useState } from "react";
import "../App.css";

const mockConversations = [
    {
        id: "user1",
        name: "John Doe",
        messages: [
            { from: "user", text: "Hi, I need help!", time: "10:00 AM" },
            { from: "agent", text: "Sure, what's the issue?", time: "10:02 AM" },
        ],
    },
    {
        id: "user2",
        name: "Jane Smith",
        messages: [
            { from: "user", text: "My order is late", time: "9:30 AM" },
        ],
    },
];

function Inbox() {
    const [selectedId, setSelectedId] = useState(mockConversations[0].id);
    const [input, setInput] = useState("");

    const selectedConversation = mockConversations.find(
        (conv) => conv.id === selectedId
    );

    const handleSend = () => {
        alert(`Message sent: ${input}`);
        setInput("");
    };

    return (
        <div className="inbox-container">
            {/* Sidebar */}
            <div className="conversation-list">
                <h3>Inbox</h3>
                {mockConversations.map((conv) => (
                    <div
                        key={conv.id}
                        onClick={() => setSelectedId(conv.id)}
                        className={`conversation-item ${conv.id === selectedId ? "selected" : ""
                            }`}
                    >
                        <strong>{conv.name}</strong>
                        <p>{conv.messages[conv.messages.length - 1].text}</p>
                    </div>
                ))}
            </div>

            {/* Message View */}
            <div className="conversation-view">
                <h3>Conversation with {selectedConversation.name}</h3>
                <div className="messages">
                    {selectedConversation.messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`message-bubble ${msg.from === "agent" ? "agent" : "user"}`}
                        >
                            <p>{msg.text}</p>
                            <span className="time">{msg.time}</span>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="message-input-row">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
