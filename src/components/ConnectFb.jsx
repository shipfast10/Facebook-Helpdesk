import React, { useEffect, useState } from "react";

function ConnectFB() {
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        // FB will call this once SDK is loaded
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "749418387435290",
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
            setSdkReady(true);
            console.log("FB SDK initialized");
        };

        // Optional: confirm script is attached
        if (!document.getElementById("facebook-jssdk")) {
            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    const handleFBConnect = () => {
        if (!sdkReady || !window.FB) {
            alert("Facebook SDK not loaded yet.");
            return;
        }

        window.FB.login(
            (response) => {
                console.log("FB login response:", response);
                if (response.authResponse) {
                    alert("Connected to Facebook!");
                } else {
                    alert("Facebook login failed");
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
