import React, { useEffect } from "react";

function ConnectFB() {
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "749418387435290",
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
        };
    }, []);

    const handleFBConnect = () => {
        if (!window.FB) {
            alert("Facebook SDK not loaded");
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
                scope: "pages_messaging,pages_show_list,pages_read_engagement,email,public_profile",
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
