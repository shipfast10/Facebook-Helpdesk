import React, { useState } from "react";
import "./Inbox.css";

function Inbox() {
    const [selectedConversation, setSelectedConversation] = useState("Amit RG");

    return (
        <div className="inbox-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h3>Conversations</h3>
                <div
                    className={`conversation-item ${selectedConversation === "Amit RG" ? "active" : ""
                        }`}
                    onClick={() => setSelectedConversation("Amit RG")}
                >
                    <div className="conversation-name">Amit RG</div>
                    <div className="conversation-source">Facebook DM</div>
                    <div className="conversation-message">Hey There! I probably did one of the best...</div>
                    <div className="conversation-time">10m</div>
                </div>

                <div
                    className={`conversation-item ${selectedConversation === "Hiten Saxena" ? "active" : ""
                        }`}
                    onClick={() => setSelectedConversation("Hiten Saxena")}
                >
                    <div className="conversation-name">Hiten Saxena</div>
                    <div className="conversation-source">Facebook Post</div>
                    <div className="conversation-message">Available in store?</div>
                    <div className="conversation-time">10m</div>
                </div>
            </div>

            {/* Chat Section */}
            <div className="chat-section">
                <div className="chat-header">{selectedConversation}</div>
                <div className="chat-body">
                    <div className="chat-bubble user">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            className="chat-avatar"
                        />
                        <div>
                            <div className="bubble">Is it in stock right now?</div>
                            <div className="chat-meta">Amit RG • Mar 05, 2:22 AM</div>
                        </div>
                    </div>

                    <div className="chat-bubble agent">
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            className="chat-avatar"
                        />
                        <div>
                            <div className="bubble">We've 3 left in stock!</div>
                            <div className="chat-meta">Richard Panel • Mar 05, 2:22 AM</div>
                        </div>
                    </div>

                    <div className="chat-bubble agent">
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            className="chat-avatar"
                        />
                        <div>
                            <div className="bubble">
                                If you order before 8PM we can ship it today.
                            </div>
                            <div className="chat-meta">Richard Panel • Mar 05, 2:22 AM</div>
                        </div>
                    </div>
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder={`Message ${selectedConversation}`}
                    />
                </div>
            </div>

            {/* Details Panel */}
            <div className="details-panel">
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="profile-pic"
                />
                <h4 className="profile-name">{selectedConversation}</h4>
                <div className="profile-status">● Offline</div>

                <div className="action-buttons">
                    <button className="call-button">📞 Call</button>
                    <button className="profile-button">👤 Profile</button>
                </div>

                <div className="customer-details">
                    <p>
                        <strong>Email</strong><br />
                        amit@richpanel.com
                    </p>
                    <p>
                        <strong>First Name</strong><br />
                        Amit
                    </p>
                    <p>
                        <strong>Last Name</strong><br />
                        RG
                    </p>
                    <a href="#">View more details</a>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
