import React, { useEffect, useState } from "react";

function ConnectFB() {
    const [sdkReady, setSdkReady] = useState(false);
    const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        if (!window.FB) {
            const script = document.createElement("script");
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            script.defer = true;
            script.onload = () => {
                window.FB.init({
                    appId: "749418387435290",
                    cookie: true,
                    xfbml: true,
                    version: "v18.0",
                });
                setSdkReady(true);
            };
            document.body.appendChild(script);
        } else {
            setSdkReady(true);
        }
    }, []);

    const handleFBLogin = () => {
        if (!sdkReady) return alert("Facebook SDK not ready");

        window.FB.login(
            (response) => {
                if (!response.authResponse) {
                    alert("Facebook login failed.");
                    return;
                }

                // Get page info
                window.FB.api("/me/accounts", (res) => {
                    if (res.data && res.data.length > 0) {
                        const selectedPage = res.data[0]; // auto select first page for now
                        setPageInfo(selectedPage);

                        // Send to backend
                        fetch("http://localhost:5000/api/connect", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                pageId: selectedPage.id,
                                pageName: selectedPage.name,
                                accessToken: selectedPage.access_token,
                            }),
                        })
                            .then((res) => res.json())
                            .then((data) => alert("✅ Connected to: " + selectedPage.name));
                    } else {
                        alert("No pages found.");
                    }
                });
            },
            {
                scope:
                    "pages_show_list,pages_messaging,email,public_profile,pages_read_engagement",
            }
        );
    };

    const handleDisconnect = () => {
        setPageInfo(null);
        fetch("http://localhost:5000/api/disconnect", { method: "POST" });
        alert("Disconnected");
    };

    return (
        <div className="connect-container" style={{ color: "#000" }}>
            <h2>Facebook Page Integration</h2>
            {pageInfo ? (
                <>
                    <p>✅ Connected to: <b>{pageInfo.name}</b></p>
                    <button onClick={handleDisconnect}>Disconnect</button>
                </>
            ) : (
                <button onClick={handleFBLogin}>Connect with Facebook</button>
            )}
        </div>
    );
}

export default ConnectFB;
