// components/Intro.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import WordCycler from './WordCycler';

const words = ["Customer Calls", "Podcasts", "Videos", "Spiritual Talks", "Educational Lectures", "Meetings"];
const delays = [50, 2000, 2000, 2000, 2000, 2000, 1000];

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="intro">
      <div className="mt-12 mb-4 flex flex-col w-full items-center justify-center p-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold text-black">{t('Create 100x more content from your')}</h1>
        <WordCycler words={words} delays={delays} defaultDelay={1000} />
      <p className='flex max-w-96 my-8 text-center text-xl font-light md:font-regular text-gray-600'>{t('Get instant transcript, show notes, clips, chapters and more!')}</p>
      <div className='flex flex-col w-full sm:w-fit items-center justify-center gap-2'>
        <button
          className='mt-4 flex h-12 w-full sm:w-fit sm:px-8 bg-gradient-to-r from-[#007AFF] to-[#F300FF] text-white font-medium text-xl rounded-lg shadow-[0_0_5px_rgba(98,0,128,0.6)] hover:shadow-[0_0_10px_rgba(98,0,128,0.6)] items-center justify-center'
          onClick={() => window.location.href = 'https://podium.page/create-account'}
        >
          {t('Try it for free →')}
        </button>
        <p className='flex text-sm font-regular text-gray-400'>{t('No credit card required')}</p>
      </div>
      </div>
      <div className='my-4 flex flex-col items-center justify-center px-8'>
        <p className='text-2xl text-center text-regular md:font-semibold text-black'>{t('Used by over 20,000 creators and brands')}</p>
        <div className='flex flex-wrap w-full px-4 items-center justify-center mt-8 pb-8 gap-8 lg:gap-12'>
            <img
                src="https://framerusercontent.com/images/XgvgnSlwj9M6jJrGkeHYMIAY.svg"
                alt="Twit logo SVG"
                className="h-10"
            />
            <img
                src="https://framerusercontent.com/images/WA70wRobpWFa7C46F2cEvBJRE.svg"
                alt="Nerdwallet logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/TxxBW9FVSveHHhNzoWs1j6zSBg.svg?scale-down-to=512"
                alt="Buzzsprout logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/3a2AlDHrmc0wdCC3CdrvqiyxlHU.svg"
                alt="mediaworks logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/6fjbNSr8YH9KsQTYUVMggJ0KEHc.svg"
                alt="Vast logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/hBERXmSvjr2ZJYOD3DffA9tDps.svg"
                alt="Torch logo SVG"
                className="h-6"
            />
        </div>
        <div className='mt-8 mx-auto px-4 hidden md:flex max-w-5xl'>
            <img
                src="https://framerusercontent.com/images/XEmv5vqoiWWArC0PPHNUalrY10U.svg"
                alt="Podium dashboard interface"
            />
        </div>
      </div>
    </section>
  );
};

export default Intro;