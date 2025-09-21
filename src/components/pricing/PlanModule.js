import React, { useState } from "react";

// Updated imports to point to .js files
import PricingSelector from "./PricingSelector.js";
import { useTranslation } from "react-i18next";

export default function PlanModule({
    planHeader,
    planTitle,
    isSliderVisible,
    planOptions,
    ctaHrefOverride,
    ctaOverride,
    children,
}) {
    const [checkoutUrl, setCheckoutUrl] = useState("#");

    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full h-full border border-gray-300 dark:border-dark-border rounded-lg p-4 bg-white dark:bg-dark-bg-secondary transition-colors duration-300">
            <div className="w-full">
                <h2 className="text-2xl font-semibold text-center text-white">{ t(planTitle) }</h2>
                <div className="flex w-full h-72 text-center justify-center items-center py-auto">
                {isSliderVisible ? (
                    <PricingSelector
                        planTitle={planTitle}
                        planOptions={planOptions}
                        isSliderVisible={isSliderVisible}
                        defaultSliderIndex={1}
                        setCheckoutUrl={setCheckoutUrl}
                    />
                ) : (
                    planHeader
                )}
                </div>
                <div>
                    <a
                        href={ctaHrefOverride ? ctaHrefOverride : checkoutUrl}
                    >
                        {ctaOverride ? 
                        ctaOverride : 
                        <div 
                            className="h-fit w-full bg-indigo-600 rounded-lg px-auto py-2 border-2 border-indigo-600 text-2xl text-center font-medium text-white hover:bg-white hover:text-indigo-600"
                        >
                            { t("Subscribe Now") }
                        </div>}
                    </a>
                </div>
            </div>
            <div className="w-full h-full text-left list-disc text-gray-300 text-lg">{children}</div>
        </div>
    );
}
