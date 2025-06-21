import React from "react";

function Disconnect() {
    const handleDisconnect = () => {
        alert("Disconnect Facebook page logic will be added here.");
    };

    return (
        <div className="disconnect-container">
            <h2>Facebook Page Connection</h2>
            <button onClick={handleDisconnect}>Disconnect Facebook Page</button>
        </div>
    );
}

export default Disconnect;
