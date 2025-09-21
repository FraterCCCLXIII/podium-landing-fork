import React from 'react';
import VideoCarousel from './VideoCarousel';
import { useTranslation } from 'react-i18next';

const VideoTestimonials = () => {
    const { t } = useTranslation();
  
    return (
        <section className='VideoTestimonials'>
            <div className='mt-8 flex flex-col w-full items-center justify-center px-0 py-12 pb-32 bg-white dark:bg-dark-bg-secondary transition-colors duration-300'>
                <h2 className='text-3xl md:text-5xl lg:text-6xl text-center font-bold text-black dark:text-dark-text'>{t('Love from our creators')}</h2>
                <p className='my-8 text-center text-xl font-light text-gray-600 dark:text-dark-text-secondary'>{t('Join the thousands saving time and creating more everyday.')}</p>
                <VideoCarousel />
            </div>
        </section>
    )
}

export default VideoTestimonials;