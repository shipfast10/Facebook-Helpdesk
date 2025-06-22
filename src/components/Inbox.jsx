// src/components/Inbox.jsx
import React, { useState } from "react";
import "../App.css";

const mockConversations = [
    {
        id: "user1",
        name: "Amit RG",
        preview: "Hey There! I probably did one of the best...",
        type: "Facebook DM",
        time: "10m",
        messages: [
            {
                from: "user",
                text: "Is it in stock right now?",
                time: "Mar 05, 2:22 AM",
                name: "Amit RG",
                avatar: "https://i.pravatar.cc/30?img=5",
            },
            {
                from: "agent",
                text: "We've 3 left in stock!",
                time: "Mar 05, 2:22 AM",
                name: "Richard Panel",
                avatar: "https://i.pravatar.cc/30?img=1",
            },
            {
                from: "agent",
                text: "If you order before 8PM we can ship it today.",
                time: "Mar 05, 2:22 AM",
                name: "Richard Panel",
                avatar: "https://i.pravatar.cc/30?img=1",
            },
        ],
        email: "amit@richpanel.com",
        firstName: "Amit",
        lastName: "RG",
        avatar: "https://i.pravatar.cc/50?img=5"
    },
];

function Inbox() {
    const [selected, setSelected] = useState(mockConversations[0]);
    const [input, setInput] = useState("");

    return (
        <div className="full-inbox-layout">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Conversations</h3>
                </div>
                {mockConversations.map((conv) => (
                    <div
                        key={conv.id}
                        className={`conversation-preview ${selected.id === conv.id ? "active" : ""}`}
                        onClick={() => setSelected(conv)}
                    >
                        <div className="title-row">
                            <strong>{conv.name}</strong>
                            <span>{conv.time}</span>
                        </div>
                        <div className="type">{conv.type}</div>
                        <p className="preview-msg">{conv.preview}</p>
                    </div>
                ))}
            </div>

            {/* Message & details */}
            <div className="main-section">
                <div className="chat-header">
                    <h3>{selected.name}</h3>
                </div>
                <div className="chat-body">
                    {selected.messages.map((msg, idx) => (
                        <div key={idx} className={`chat-bubble ${msg.from === "agent" ? "agent" : "user"}`}>
                            <div className="bubble-content">
                                <p>{msg.text}</p>
                                <span>{msg.name} - {msg.time}</span>
                            </div>
                            <img src={msg.avatar} alt="avatar" className="avatar" />
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder={`Message ${selected.name}`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>

            {/* Right panel */}
            <div className="right-panel">
                <img src={selected.avatar} alt="user" className="profile-pic" />
                <h4>{selected.name}</h4>
                <p className="status">● Offline</p>
                <div className="btn-row">
                    <button>📞 Call</button>
                    <button>👤 Profile</button>
                </div>
                <div className="customer-box">
                    <p><strong>Email:</strong> {selected.email}</p>
                    <p><strong>First Name:</strong> {selected.firstName}</p>
                    <p><strong>Last Name:</strong> {selected.lastName}</p>
                    <a href="#">View more details</a>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
