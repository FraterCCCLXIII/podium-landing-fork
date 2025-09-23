import React, { useState, useEffect } from "react";

export default function CreditsExhaustedAlert() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.searchParams);
        if (searchParams.has("message") && searchParams.get("message") === "credits_exhausted") {
            setIsVisible(true);
        }
    }, []);

    return isVisible ? (
        <div className="text-center text-indigo-600 dark:text-indigo-400 text-xl leading-relaxed w-full">
            <p>
                <strong>Unfortunately, you're out of credits.</strong>
            </p>
            <p>Choose a plan below!</p>
        </div>
    ) : null;
}
