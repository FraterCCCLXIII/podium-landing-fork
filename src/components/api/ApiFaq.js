import React from "react";
import { useTranslation } from "react-i18next";
import APIFAQ from "./ApiFaqs";

const ApiFaqs = () => {
    const { t } = useTranslation();
  
    return (
        <section className="Faqs">
            <div className="flex flex-col w-full bg-gray-50 dark:bg-dark-bg-secondary items-center justify-center text-center p-8">
                <p className='mt-8 text-sm md:text-base font-medium text-gray-400 dark:text-dark-text-secondary'>{t('SUPPORT')}</p>
                <h2 className='my-4 text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-dark-text'>{t('Frequently asked questions')}</h2>
                <APIFAQ />
            </div>
        </section>
    );
};

export default ApiFaqs;