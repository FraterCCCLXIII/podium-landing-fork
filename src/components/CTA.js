import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

    return (
      <section className='CTA'>
        <div className="py-16 bg-gray-50 flex flex-col w-full items-center justify-center px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-black">{t('Try Longformer today')}</h2>
        <p className='flex my-8 text-center text-2xl font-light text-gray-600'>{t('Get 3 FREE hours to try Longformer when you sign up')}</p>
        <button className='my-4 flex h-12 w-full sm:w-fit sm:px-8 bg-white text-black font-medium text-xl rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it for free →')}</button>
      </div>
      </section>
    );
};

export default CTA;