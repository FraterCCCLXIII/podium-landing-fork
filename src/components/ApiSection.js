import React from "react";
import { useTranslation } from "react-i18next";

const ApiSection = () => {
  const { t } = useTranslation();

  return (
    <section className="ApiSection">
      <div
        className="flex flex-col items-center justify-center text-center py-16 bg-black bg-cover bg-center px-8"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dmpf5fukm/image/upload/f_auto,q_auto/v1677117615/image_84_dlc6jf.png')"
        }}
      >
        <p className="mt-8 text-sm md:text-base lg:text-lg font-medium text-gray-300">
          {t('LONGFORMER FOR BUSINESSES')}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          {t('Deliver cutting edge features in your applications')}
        </h2>
        <p className="mt-6 text-xl font-light text-gray-200">
          {t('Get instant access to Longformer API.')}
        </p>
        <button className='my-12 flex h-12 w-full sm:w-fit sm:px-8 bg-white dark:bg-white text-black font-medium text-xl rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors duration-200 items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it now! →')}</button>
      </div>
    </section>
  );
};

export default ApiSection;
