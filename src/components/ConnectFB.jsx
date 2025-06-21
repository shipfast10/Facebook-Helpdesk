import React, { useEffect, useState } from "react";

function ConnectFB() {
    const [sdkReady, setSdkReady] = useState(false);
    const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        const loadFacebookSDK = () => {
            if (window.FB) {
                console.log("✅ FB SDK already exists");
                try {
                    window.FB.init({
                        appId: "749418387435290",
                        cookie: true,
                        xfbml: true,
                        version: "v17.0",
                    });
                    console.log("✅ FB.init successful");
                    setSdkReady(true);
                } catch (e) {
                    console.error("❌ FB.init failed:", e);
                }
                return;
            }

            const script = document.createElement("script");
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            script.defer = true;
            script.onload = () => {
                if (window.FB) {
                    try {
                        window.FB.init({
                            appId: "749418387435290",
                            cookie: true,
                            xfbml: true,
                            version: "v17.0",
                        });
                        console.log("✅ FB.init after load");
                        setSdkReady(true);
                    } catch (e) {
                        console.error("❌ FB.init error after load:", e);
                    }
                } else {
                    console.error("❌ FB not available after SDK load");
                }
            };

            document.body.appendChild(script);
        };

        loadFacebookSDK();
    }, []);


    const handleFBLogin = () => {
        if (!window.FB) return alert("Facebook SDK not loaded yet");
        if (!sdkReady) return alert("Facebook SDK not initialized");

        window.FB.login(
            (response) => {
                console.log("🔐 FB Login response:", response);

                if (!response.authResponse) {
                    alert("Facebook login failed.");
                    return;
                }

                window.FB.api("/me/accounts", (res) => {
                    console.log("📘 Page info:", res);

                    if (res.data && res.data.length > 0) {
                        const selectedPage = res.data[0];
                        setPageInfo(selectedPage);

                        fetch(`${import.meta.env.VITE_API_URL}/api/connect`, {
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
                            .then((data) => {
                                console.log("✅ Connected to backend:", data);
                                alert("✅ Connected to: " + selectedPage.name);
                            })
                            .catch((err) => {
                                console.error("❌ Backend connect error", err);
                                alert("Failed to connect to backend.");
                            });
                    } else {
                        alert("No pages found.");
                    }
                });
            },
            {
                scope: "pages_show_list,pages_messaging,email,public_profile,pages_read_engagement",
            }
        );
    };

    const handleDisconnect = () => {
        setPageInfo(null);
        fetch(`${import.meta.env.VITE_API_URL}/api/disconnect`, { method: "POST" });
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
