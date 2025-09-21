import React, { useState, useEffect, useMemo } from "react";

// Update imports to point to .js files
import Slider from "./Slider.js";
import { checkoutUrls, unitCostPerHour } from "./PricingPage.js";
import { useTranslation } from "react-i18next";

class Plan {
    constructor({ quota, periodDiscounts }) {
        this.quota = quota;
        this.unitPrice = unitCostPerHour;
        this.periodDiscounts = periodDiscounts;
    }

    formatCurrency(int) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(int);
    }

    getPrice({ period, printedPeriod }) {
        const monthlyPrice = Math.round(this.quota * this.unitPrice) * (1 - this.periodDiscounts.monthly);
        const annualPrice = Math.round(this.quota * this.unitPrice) * (1 - this.periodDiscounts.annually) * 12;

        if (period === "monthly") {
            return printedPeriod === "perYear" ? this.formatCurrency(monthlyPrice * 12) : this.formatCurrency(monthlyPrice);
        } else if (period === "annually") {
            return printedPeriod === "perYear" ? this.formatCurrency(annualPrice) : this.formatCurrency(annualPrice / 12);
        }
    }

    calculateSavings({ period, printedPeriod }) {
        const pricePerAdditionalCredit = 9.0;
        const monthlySavings = Math.round(this.quota * this.unitPrice) * (1 - this.periodDiscounts.monthly) - Math.round(this.quota * pricePerAdditionalCredit);
        const annualSavings = Math.round(this.quota * this.unitPrice) * (1 - this.periodDiscounts.annually) * 12 - Math.round(this.quota * pricePerAdditionalCredit) * 12;

        if (period === "monthly") {
            return printedPeriod === "perYear" ? this.formatCurrency(Math.abs(monthlySavings * 12)) : this.formatCurrency(Math.abs(monthlySavings));
        } else if (period === "annually") {
            return printedPeriod === "perYear" ? this.formatCurrency(Math.abs(annualSavings)) : this.formatCurrency(Math.abs(annualSavings / 12));
        }
    }
}

export function PlanHeader({ planTitle, isAnnual, selectedPlan, hasDynamicPrice }) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col py-auto items-center text-center">
            {hasDynamicPrice ? (
                <div>
                    <p className="text-4xl font-semibold text-white">
                        {isAnnual
                            ? selectedPlan?.getPrice({ period: "annually", printedPeriod: "perMonth" })
                            : selectedPlan?.getPrice({ period: "monthly", printedPeriod: "perMonth" })}
                    </p>
                    <p className="text-base font-normal text-gray-300">{ t("USD Per Month") }</p>
                </div>
            ) : (
                <h2 className="text-white">{planTitle}</h2>
            )}
        </div>
    );
}

export default function PricingSelector({
    planTitle,
    planPriceOverride,
    priceSuffixOverride,
    planOptions,
    isSliderVisible,
    defaultSliderIndex,
    setCheckoutUrl,
}) {
    const [selectedSliderIndex, setSelectedSliderIndex] = useState(defaultSliderIndex);
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = useMemo(() => {
        const planIndexMap = new Map();
        for (let i = 0; i < planOptions?.options?.length; i++) {
            const currentOption = planOptions?.options[i];
            planIndexMap.set(i + 1, new Plan({ quota: currentOption, periodDiscounts: planOptions.periodDiscounts }));
        }
        return planIndexMap;
    }, [planOptions]);

    const [selectedPlan, setSelectedPlan] = useState(plans.get(defaultSliderIndex));

    useEffect(() => {
        setSelectedPlan(plans.get(selectedSliderIndex));
    }, [selectedSliderIndex, plans]);

    useEffect(() => {
        if (isAnnual) {
            setCheckoutUrl(checkoutUrls.get(selectedPlan?.quota).annually);
        } else {
            setCheckoutUrl(checkoutUrls.get(selectedPlan?.quota).monthly);
        }
    }, [selectedPlan, isAnnual, setCheckoutUrl]);

    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-dark-bg-secondary flex flex-col items-center gap-6 p-4 w-full transition-colors duration-300">
            <PlanHeader
                planTitle={planTitle}
                isAnnual={isAnnual}
                selectedPlan={selectedPlan}
                hasDynamicPrice={isSliderVisible}
                staticPrice={planPriceOverride}
                priceSuffixOverride={priceSuffixOverride}
            />
            <div className="flex items-center gap-2">
            <div
                className={`relative inline-flex items-center h-6 w-11 min-w-11 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${
                    isAnnual ? 'bg-indigo-600' : 'bg-teal-400'
                }`}
                onClick={() => setIsAnnual(!isAnnual)}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                        isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
            </div>

                <label className={`text-base ${isAnnual ? 'text-indigo-600 dark:text-indigo-400' : 'text-teal-500 dark:text-teal-400'}`}>
                    { t("Billed") } {isAnnual ? t("Yearly") : t("Monthly") }
                </label>
            </div>
            <div className="w-full flex flex-col gap-4">
                <Slider min={1} max={planOptions.options.length} val={selectedSliderIndex} setVal={setSelectedSliderIndex} />
                <label className="text-center text-base font-medium text-white">
                    {selectedPlan?.quota} { t("hours / mo") }
                    <p className="text-sm font-light text-gray-300">{ t("(slide to adjust)") }</p>
                </label>
            </div>
        </div>
    );
}
