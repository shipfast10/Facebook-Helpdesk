import React, { useEffect } from "react";

function ConnectFb() {
    useEffect(() => {
        window.FbAsyncInit = function () {
            window.Fb.init({
                appId: "749418387435290",
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
        };
    }, []);

    const handleFbConnect = () => {
        if (!window.Fb) {
            alert("Facebook SDK not loaded");
            return;
        }

        window.Fb.login(
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
            <button onClick={handleFbConnect}>Connect with Facebook</button>
        </div>
    );
}

export default ConnectFb;
