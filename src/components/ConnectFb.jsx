import React, { useEffect, useState } from "react";

function ConnectFB() {
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        // Load SDK only if not already loaded
        if (!window.FB) {
            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            script.onload = () => {
                // After script loads, init SDK
                window.FB.init({
                    appId: "749418387435290",
                    cookie: true,
                    xfbml: true,
                    version: "v18.0",
                });
                console.log("✅ FB SDK Initialized");
                setSdkReady(true);
            };
            script.onerror = () => {
                console.error("❌ Failed to load FB SDK");
            };
            document.body.appendChild(script);
        } else {
            setSdkReady(true);
        }
    }, []);

    const handleFBConnect = () => {
        if (!sdkReady || !window.FB) {
            alert("Facebook SDK not loaded yet. Please wait a moment.");
            return;
        }

        window.FB.login(
            (response) => {
                console.log("FB login response:", response);
                if (response.authResponse) {
                    alert("✅ Connected to Facebook!");
                } else {
                    alert("❌ Facebook login failed");
                }
            },
            {
                scope:
                    "pages_messaging,pages_show_list,pages_read_engagement,email,public_profile",
            }
        );
    };

    return (
        <div className="connect-container" style={{ color: "#000" }}>
            <h2>Facebook Page Integration</h2>
            <button onClick={handleFBConnect}>Connect with Facebook</button>
        </div>
    );
}

export default ConnectFB;
