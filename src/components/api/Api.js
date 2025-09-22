import React from "react";
import ApiSection from "../ApiSection";
import ApiFaqs from "./ApiFaq";
import ApiFeatures from "./ApiFeatures";


const ApiPage = () => {
    return(
        <div className="ApiPage">
            <main>
                <ApiSection />
                <ApiFeatures />
                <ApiFaqs />
            </main>
        </div>
    )
};

export default ApiPage;