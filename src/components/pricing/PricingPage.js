import React, { useState, useEffect } from "react";
import PlanModule from "./PlanModule.js";
import CreditsExhaustedAlert from "./CreditsExhaustedAlert.js";
import { useTranslation } from "react-i18next";

// Instantiate plan slider options and slider arithmetic input
export const unitCostPerHour = 4.74;

const creatorPlanOptions = {
    options: [3, 6, 10, 20, 30, 40],
    periodDiscounts: {
        monthly: 0,
        annually: 0.17,
    },
};

const studioPlanOptions = {
    options: [50, 60, 70, 80],
    periodDiscounts: {
        monthly: 0.1,
        annually: 0.25,
    },
};

// Match each slider option (plan) with a Stripe product
export const checkoutUrls = new Map();
checkoutUrls
    .set(3, {
        monthly: "https://podium.page/begin-purchase?stripePriceId=price_1OLUzeJBG7r4twsDpO5sWFpq&stripeQuantity=1",
        annually: "https://podium.page/begin-purchase?stripePriceId=price_1OLV0rJBG7r4twsDrvWdm7de&stripeQuantity=1",
    })
    .set(6, {
        monthly: "https://podium.page/begin-purchase?stripePriceId=price_1OLVEfJBG7r4twsDuTnKKB4l&stripeQuantity=1",
        annually: "https://podium.page/begin-purchase?stripePriceId=price_1OLVFSJBG7r4twsDSIDgHQCJ&stripeQuantity=1",
    })
    .set(10, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVHwJBG7r4twsDnNMwiHxG&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVIBJBG7r4twsDpwYQvpGN&stripeQuantity=1",
    })
    .set(20, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVLXJBG7r4twsDyPT86knL&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVLrJBG7r4twsDdujqit7Q&stripeQuantity=1",
    })
    .set(30, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVOnJBG7r4twsDCPcSmuj7&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVPFJBG7r4twsDyMnxQkxD&stripeQuantity=1",
    })
    .set(40, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVS3JBG7r4twsDp0vNUdHZ&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVSHJBG7r4twsDu3W7rmjd&stripeQuantity=1",
    })
    .set(50, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVUbJBG7r4twsDlGBos16g&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVUxJBG7r4twsDf92A5F77&stripeQuantity=1",
    })
    .set(60, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVWsJBG7r4twsD5XXmULBa&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVX7JBG7r4twsDFEgcG3gs&stripeQuantity=1",
    })
    .set(70, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVYjJBG7r4twsDiu77LJDM&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVYtJBG7r4twsDy6rGxE9U&stripeQuantity=1",
    })
    .set(80, {
        monthly:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVb7JBG7r4twsD7dgX5o7k&stripeQuantity=1",
        annually:
            "https://podium.page/begin-purchase?stripePriceId=price_1OLVbFJBG7r4twsD5u0wmAjn&stripeQuantity=1",
    })

export default function PricingPage() {
    const [caughtLoggedInUser, setCaughtLoggedInUser] = useState(false);
    const [showCreditsExhaustedMsg, setShowCreditsExhaustedMsg] = useState(false);


    const { t } = useTranslation();

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.searchParams);

        if (searchParams.has("logged_in") && searchParams.get("logged_in") === "true") {
            setCaughtLoggedInUser(true);
            const topNav = document.getElementById("top-nav");
            if (topNav) topNav.style.display = "none";
        }

        if (searchParams.has("message") && searchParams.get("message") === "credits_exhausted") {
            setShowCreditsExhaustedMsg(true);
        }
    }, []);

    return (
        <div className="flex flex-col w-full items-center font-inter bg-white dark:bg-dark-bg transition-colors duration-300">

            <section className="px-4 my-16 flex flex-col items-center gap-12 w-full max-w-8xl">
                <div>
                    <h1 className="text-6xl font-semibold text-center mb-4 text-white">
                        {caughtLoggedInUser ? t("Choose your plan") : t("Pricing")}
                    </h1>
                </div>

                {showCreditsExhaustedMsg && <CreditsExhaustedAlert />}

                <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                    {!caughtLoggedInUser && (
                        <PlanModule
                            isSliderVisible={false}
                            ctaHrefOverride="https://podium.page/create-account"
                            planTitle="Trial"
                            ctaOverride={
                                <div className="flex py-2 h-fit w-full bg-black dark:bg-white text-center justify-center px-auto rounded-lg text-white dark:text-black border-2 border-black dark:border-gray-300 hover:bg-white dark:hover:bg-gray-100 hover:text-black dark:hover:text-black cursor-pointer text-2xl font-medium transition-colors duration-200">{ t("Try it free") }</div>
                            }
                            planHeader={
                                <div className="flex flex-col w-full text-center my-auto items-center h-fit">
                                    <p className="text-4xl font-semibold text-white">{t("Free to start")}</p>
                                    <div className="text-gray-300 text-center mt-4">
                                        <p>{t("3 hours free.")}</p>
                                        <p>{t("Take Longformer for a test spin!")}</p>
                                    </div>
                                </div>
                            }
                        >
                            <ul className="p-4 mt-8 list-disc">
                                <li>{t("Try out all of Longformer's features (see Creator plan) in a free trial.")}</li>
                                <li>{t("3 free audio hours")}</li>
                            </ul>
                        </PlanModule>
                    )}

                    <PlanModule
                        planTitle="Creator"
                        isSliderVisible={true}
                        planOptions={creatorPlanOptions}
                        ctaLabel="Subscribe Now"
                    >
                        <ul className="p-4 mt-8 list-disc">
                            <li>{t("PodiumGPT (create your own custom text content based on your podcast or show using AI)")}</li>
                            <li>{t("Show notes")}</li>
                            <li>{t("Chapters, chapter titles, and chapter summaries")}</li>
                            <li>{t("Suggested episode title")}</li>
                            <li>{t("Audiograms and Clips")}</li>
                            <li>{t("Transcript (English only)")}</li>
                            <li>{t("Keywords")}</li>
                            <li>{t("Social Media Post")}</li>
                            <li>{t("API Access")}</li>
                            <li>{t("and so much more coming soon...")}</li>
                        </ul>
                    </PlanModule>

                    <PlanModule
                        planTitle="Studio"
                        isSliderVisible={true}
                        planOptions={studioPlanOptions}
                        ctaLabel="Subscribe Now"
                    >
                        <ul className="p-4 mt-8 list-disc">
                            <li>{t("Everything in the Creator plan")}</li>
                            <li>{t("API Access")}</li>
                            <li>{t("A more significant discount per hour (10% monthly / 25% annually)")}</li>
                        </ul>
                    </PlanModule>

                    <PlanModule
                        isSliderVisible={false}
                        planTitle="Enterprise"
                        ctaOverride={
                            <div className="flex py-2 h-fit w-full bg-white dark:bg-white text-center justify-center px-auto rounded-lg text-black dark:text-black border-2 border-black dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-100 hover:text-black dark:hover:text-black cursor-pointer text-2xl font-medium transition-colors duration-200" onClick={() => {
                                if (window.Intercom) {
                                  window.Intercom("show");
                                }
                              }}
                              >{ t("Contact Us") }</div>
                        }
                        planHeader={
                            <div className="flex w-full flex-col text-center items-center my-auto h-fit">
                                <p className="text-4xl font-semibold">{ t("Custom pricing") }</p>
                                <p className="text-gray-600 mt-4">
                                    { t("Don’t fit in a box? Contact us and let’s discuss your needs.") }
                                </p>
                            </div>
                        }
                    >
                        <ul className="p-4 mt-8 list-disc">
                            <li>{ t("If none of the other options make sense, reach out.") }</li>
                            <li>{ t("Good choice if you're wanting to process an entire back catalog of content.") }</li>
                        </ul>
                    </PlanModule>
                </div>

                {/* Credit Packs Section */}
                <div className="flex w-full flex-col gap-6 justify-center items-start md:flex-row md:justify-between">
                    <div className="flex flex-col w-full justify-center text-center md:text-left md:justify-left">
                        <h2 className="text-4xl font-semibold mb-4">{ t("Credit Packs") }</h2>
                        <h3 className="text-xl text-gray-600">
                            { t("Need more than your monthly plan?") } <br />
                            { t("All credits purchased never expire.") } <br /> { t("1 credit = 1 minute.") }
                        </h3>
                    </div>
                    <div className="w-full md:max-w-md ">
                        <PlanModule
                            isSliderVisible={false}
                            ctaHrefOverride="https://podium.page/begin-purchase?stripePriceId=price_1OLVjYJBG7r4twsDQYMHvWhN"
                            planTitle="Credit Packs"
                            ctaOverride={
                                <div className="flex py-2 h-fit w-full bg-black text-center justify-center px-auto rounded-lg text-white border-2 border-black hover:bg-white hover:text-black cursor-pointer text-2xl font-medium">{ t("Buy Credits") }</div>
                            }
                            planHeader={
                                <div className="text-center w-full">
                                    <p className="text-4xl font-semibold">$6 — $9</p>
                                    <p className="text-gray-600 mt-4">{ t("per 60 minutes") }</p>
                                    <div className="mt-6 font-semibold">
                                        <p className="text-indigo-600">{ t("$6.00 for Subscribers") }</p>
                                        <p>{ t("$9.00 for Non-Subscribers") }</p>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
