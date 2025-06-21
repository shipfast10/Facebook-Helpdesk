import React, { useState } from "react";

function Conversations() {
    const [selected, setSelected] = useState(0);
    const mockConversations = [
        { user: "John Doe", messages: ["Hi", "I need help"] },
        { user: "Jane Smith", messages: ["Hello", "Thank you"] }
    ];

    return (
        <div className="conversation-screen">
            <aside className="sidebar">
                <h3>Conversations</h3>
                <ul>
                    {mockConversations.map((conv, idx) => (
                        <li key={idx} onClick={() => setSelected(idx)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                            {conv.user}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="chat-window">
                <h3>Conversation Thread</h3>
                <div className="messages">
                    {mockConversations[selected].messages.map((msg, idx) => (
                        <p key={idx}>{msg}</p>
                    ))}
                </div>
                <input type="text" placeholder="Type a reply..." />
                <button>Send</button>
            </main>
            <aside className="profile-pane">
                <h3>Customer Profile</h3>
                <p>Name: {mockConversations[selected].user}</p>
                <p>Email: example@example.com</p>
            </aside>
        </div>
    );
}

export default Conversations;
