// Inbox.jsx
import React, { useState } from "react";
import "./Inbox.css";

function Inbox() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            alert("Message sent: " + message);
            setMessage("");
        }
    };

    return (
        <div className="inbox-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h3>Conversations</h3>
                <div className="conversation-item active">
                    <div className="conversation-name">Amit RG <span style={{ float: "right" }}>10m</span></div>
                    <div className="conversation-subtitle">Facebook DM</div>
                    <div className="conversation-snippet">Hey There! I probably did one of the best...</div>
                </div>
                <div className="conversation-item">
                    <div className="conversation-name">Hiten Saxena <span style={{ float: "right" }}>10m</span></div>
                    <div className="conversation-subtitle">Facebook Post</div>
                    <div className="conversation-snippet">Available in store?</div>
                </div>
            </div>

            {/* Message Panel */}
            <div className="message-panel">
                <div className="message-header">Amit RG</div>
                <div className="message-body">
                    <div className="message">
                        Is it in stock right now?
                        <div className="message-meta">Amit RG - Mar 05, 2:22 AM</div>
                    </div>
                    <div className="message agent">
                        We've 3 left in stock!
                        <div className="message-meta">Richard Panel - Mar 05, 2:22 AM</div>
                    </div>
                    <div className="message agent">
                        If you order before 8PM we can ship it today.
                        <div className="message-meta">Richard Panel - Mar 05, 2:22 AM</div>
                    </div>
                </div>
                <div className="message-footer">
                    <input
                        type="text"
                        placeholder="Message Amit RG"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                </div>
            </div>

            {/* Info Panel */}
            <div className="info-panel">
                <img
                    className="profile-img"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Profile"
                />
                <div className="info-name">Amit RG</div>
                <div className="info-status">● Offline</div>
                <div className="info-buttons">
                    <button>📞 Call</button>
                    <button>👤 Profile</button>
                </div>
                <div className="info-card">
                    <p><strong>Email</strong><br />amit@richpanel.com</p>
                    <p><strong>First Name</strong><br />Amit</p>
                    <p><strong>Last Name</strong><br />RG</p>
                    <a href="#">View more details</a>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
