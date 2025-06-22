import React from "react";
import "./Inbox.css";

function Inbox() {
    const messages = [
        { sender: "Amit RG", time: "Mar 05, 2:22 AM", text: "Is it in stock right now?", fromUser: true },
        { sender: "Richard Panel", time: "Mar 05, 2:22 AM", text: "We’ve 3 left in stock!", fromUser: false },
        { sender: "Richard Panel", time: "Mar 05, 2:22 AM", text: "If you order before 8PM we can ship it today.", fromUser: false },
    ];

    return (
        <div className="inbox-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h3>Conversations</h3>
                <div className="conversation active">
                    <p className="name">Amit RG</p>
                    <p className="source">Facebook DM</p>
                    <p className="preview">Hey There! I probably did one of the best...</p>
                    <span className="time">10m</span>
                </div>
                <div className="conversation">
                    <p className="name">Hiten Saxena</p>
                    <p className="source">Facebook Post</p>
                    <p className="preview">Available in store?</p>
                    <span className="time">10m</span>
                </div>
            </div>

            {/* Messages */}
            <div className="messages-section">
                <div className="messages-header">
                    <h4>Amit RG</h4>
                </div>
                <div className="messages">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`message ${msg.fromUser ? "from-user" : "from-agent"}`}
                        >
                            <p className="bubble">{msg.text}</p>
                            <span className="meta">
                                {msg.sender} • {msg.time}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="reply-box">
                    <input type="text" placeholder="Message Amit RG" />
                </div>
            </div>

            {/* Customer details */}
            <div className="details-panel">
                <img src="https://i.imgur.com/1X1Kcl3.png" alt="profile" className="avatar" />
                <h4>Amit RG</h4>
                <p className="status">● Offline</p>
                <div className="buttons">
                    <button className="call-btn">📞 Call</button>
                    <button className="profile-btn">👤 Profile</button>
                </div>
                <div className="info-box">
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
