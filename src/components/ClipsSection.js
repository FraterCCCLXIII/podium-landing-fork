import React from 'react';
import { useTranslation } from 'react-i18next';
import Slideshow from './Slideshow';


const Clips = () => {
  const { t } = useTranslation();

    return (
      <section className='Clips bg-white'>
        <div className='flex flex-col w-full items-center text-center p-8 justify-center'>
            <p className='mt-8 text-sm md:text-base font-medium text-gray-400'>{t('READY TO SHARE CLIPS')}</p>
            <h2 className='mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-black'>{t('Engage your audience')}</h2>
            <p className='mt-4 text-xl font-light text-gray-600'>{t('Create AI suggested or your own clips from your content... in minutes.')}</p>
        </div>
        <div className='flex flex-col w-full items-center justify-center px-4 py-8 max-w-5xl mx-auto gap-8'>
            <div className='flex flex-col sm:flex-row w-full items-center py-4 sm:py-12 justify-between sm:space-x-8 rounded-lg border border-gray-200'>
                <div className='flex flex-col w-full gap-2 p-8'>
                    <span className='text-xl font-semibold text-black'>Instant Clip Generation</span>
                    <span className='text-lg font-light text-gray-600'>Easily transform engaging segments of your podcast into clips without needing external tools. Longformer will find interesting content for you. If you want to create one yourself just highlight text in your transcript to create a new clip.</span>
                </div>
                <div className='flex rounded-lg w-full overflow-hidden p-8'>
                    <video
                        src="https://framerusercontent.com/assets/pJlNCpinuPPifwPoF6XJ7B510A.mov"
                        autoPlay
                        loop
                        playsInline
                        className='rounded-md aspect-[8/5] object-cover object-center border-gray-100 shadow-md '
                    />
                </div>
            </div>
            <div className='flex flex-col sm:flex-row w-full items-center gap-8'>
                <div className='flex flex-col w-full h-full bg-gray-50 rounded-lg p-8 gap-8 border border-gray-200'>
                    <video
                        src="https://framerusercontent.com/assets/m7LgsnwSPDnTXirHZUJQafjz3s.mov" 
                        autoPlay
                        loop
                        playsInline
                        style={{ width: "100%", height: "auto" }}
                        className='rounded-lg border-gray-100 shadow-md'
                    />
                    <div className='flex flex-col w-full h-full gap-2'>
                        <span className='text-xl font-semibold text-black'>Full Customization</span>
                        <span className='text-lg font-light text-gray-600'>Adjust typography, add images, and customize colors to align with your brand identity.</span>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full bg-gray-50 rounded-lg p-8 gap-8 border border-gray-200'>
                    <Slideshow />
                    <div className='flex flex-col w-full h-full gap-2'>
                        <span className='text-xl font-semibold text-black'>Flexible Formatting</span>
                        <span className='text-lg font-light text-gray-600'>Choose your desired aspect ratio to ensure your clips look great on any social media platform.</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Clips;