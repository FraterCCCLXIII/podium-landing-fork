import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturedOn = () => {
    const { t } = useTranslation();
  
    return (
      <section className='FeaturedOn pb-20' style={{ backgroundColor: '#0d0d0d' }}>
        <div className='flex flex-col w-full items-center justify-center px-16 py-16 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>{t('Create more from your')} <span className='text-indigo-400'>{t('content')}</span></h2>
            <div className='flex flex-col max-w-96 bg-gray-50 rounded-lg items-center justify-center space-y-6 mt-12 p-8 border border-gray-200'>
                <p className='text-2xl leading-8 font-medium text-center text-black'>{t('I absolutely love Longformer. It easily saves me over $150 per episode and what used to take hours, literally takes minutes.')}</p>
                <img 
                    src="https://framerusercontent.com/images/gF1UCai096oK5RzbllskSNuEKgU.jpeg?scale-down-to=512" 
                    alt="Derek Gehl Portrait" 
                    className="w-28 h-28 rounded-full" 
                />
                <div>
                    <p className='text-xl font-semibold text-center text-black'>Derek Gehl</p>
                    <p className='text-xl font-medium text-center text-gray-600'>DerekGehl.com</p>
                </div>
            </div>
        </div>
      </section>
    );
};

export default FeaturedOn;