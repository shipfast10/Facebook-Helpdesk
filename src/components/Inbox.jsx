// src/components/Inbox.jsx
import React, { useState } from "react";
import ConversationList from "./ConversationList";
import ConversationView from "./ConversationView";

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
    const selectedConversation = mockConversations.find(
        (conv) => conv.id === selectedId
    );

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <ConversationList
                conversations={mockConversations}
                selectedId={selectedId}
                onSelect={setSelectedId}
            />
            <ConversationView conversation={selectedConversation} />
        </div>
    );
}

export default Inbox;
