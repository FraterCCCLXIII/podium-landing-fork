import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialsCarousel from "./TestimonialsCarousel";


const Testimonials1 = () => {
    const { t } = useTranslation();
  
    return (
        <section className="Testimonials bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="flex flex-col items-center justify-center text-center py-16 px-8">
                <p className='mt-8 text-sm md:text-base font-medium text-gray-400 dark:text-dark-text-secondary'>{t('TESTIMONIALS')}</p>
                <h2 className='mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-dark-text'>{t('Longformer empowers creators')}</h2>
                <p className='mt-4 text-xl font-light text-gray-600 dark:text-dark-text-secondary'>{t('Podcasters, producers, marketing directors, engineers…loving it.')}</p>
            </div>
            <div className="flex w-full items-center justify-center pb-16">
                <TestimonialsCarousel />
            </div>
        </section>
    );
};

export default Testimonials1;