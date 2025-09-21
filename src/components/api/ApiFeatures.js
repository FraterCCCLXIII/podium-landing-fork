import React from 'react';
import { useTranslation } from 'react-i18next';


const apiFeaturesList = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="36"><g transform="translate(0 0.394)"><path d="M 0 0 L 28.43 0 L 28.43 34.97 L 0 34.97 Z" fill="transparent"></path><path d="M 27.43 7.97 L 27.43 30.46 C 27.43 32.4 25.86 33.96 23.93 33.96 L 4.5 33.96 C 2.56 33.96 1 32.39 1 30.46 L 1 4.5 C 1 2.56 2.57 1 4.5 1 L 20.61 1 L 20.61 7.97 Z M 5.59 27.779 L 15.78 27.779 M 5.59 17.869 L 22.84 17.869 M 5.59 12.92 L 22.84 12.92 M 5.59 7.97 L 16.99 7.97 M 5.59 22.82 L 22.84 22.82" fill="transparent" strokeWidth="2" stroke="rgb(255,79,248)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></g></svg>
      ),
      name: "Show Notes",
      description: "A summary of your episode and chapters that make finishing your shownotes easy.",
      link: "https://podium.page/"
    },
    {
      icon: (
        <svg width="30" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M27.93 1.394H1.5v8.34h26.43v-8.34Zm0 12.32H1.5v8.34h26.43v-8.34Zm0 12.309H1.5v8.34h26.43v-8.34Z" stroke="#4FEAFF" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round"/><path d="m7.01 5.263-2.06-1.19a.347.347 0 0 0-.52.3v2.38c0 .27.29.44.52.3l2.06-1.19c.23-.13.23-.47 0-.6Zm0 12.32-2.06-1.19a.347.347 0 0 0-.52.3v2.38c0 .27.29.44.52.3l2.06-1.19c.23-.13.23-.47 0-.6Zm0 12.311-2.06-1.19a.347.347 0 0 0-.52.3v2.38c0 .27.29.44.52.3l2.06-1.19c.23-.13.23-.47 0-.6Z" fill="#4FEAFF"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.43 .324)" d="M0 0h28.58v35.11H0z"/></clipPath></defs></svg>
      ),
      name: "Chapters",
      description: "Segment your episode into its core topics, with an easy-to-read format. Ready for Spotify and Youtube.",
      link: "#"
    },
    {
      icon: (
        <svg width="60" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="36"><path transform="matrix(-1 0 0 1 59.66 0)" fill="#fff" d="M0 0h59v35.758H0z"/></mask><g mask="url(#a)" stroke="#D0C722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M36.5 19.4h-2.047a3.04 3.04 0 0 1-3.04-3.04v-1.344c0-.936-.758-1.695-1.695-1.695v0c-.936 0-1.695.759-1.695 1.695v8.767c0 .936-.76 1.695-1.696 1.695v0a1.695 1.695 0 0 1-1.695-1.695V11.977c0-.937-.76-1.696-1.696-1.696v0c-.936 0-1.695.76-1.695 1.696v11.806c0 .936-.759 1.695-1.695 1.695v0a1.695 1.695 0 0 1-1.696-1.695v-8.767c0-.936-.759-1.695-1.695-1.695v0c-.937 0-1.696.759-1.696 1.695v1.344a3.04 3.04 0 0 1-3.039 3.04H4.234"/><path d="M28.968 6.74v-.95a4 4 0 0 1 4-4h19.114a4 4 0 0 1 4 4v24.18a4 4 0 0 1-4 4H32.544a3.576 3.576 0 0 1-3.576-3.575v0M51.152 6.74H33.898m17.254 4.951h-14.79m14.79 4.951h-9.86m9.86 4.951h-9.86m9.86 4.951h-14.79"/></g></svg>
      ),
      name: "Transcript",
      description: "Fully editable transcript with speaker diarization to make your podcast more accessible.",
      link: "#"
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.975 19.3859C12.032 18.6489 12.836 18.0229 13.372 17.4909C14.333 16.5359 14.823 15.6279 14.823 14.7829C14.828 14.5759 14.767 14.3729 14.649 14.2039C14.512 14.0539 14.315 13.9739 14.113 13.9839C13.863 14.0299 13.61 14.0559 13.356 14.0629C12.599 14.0629 11.968 13.8119 11.48 13.3099C10.991 12.8109 10.738 12.1379 10.738 11.2919C10.738 10.5089 10.991 9.83588 11.496 9.25588C12 8.67788 12.725 8.37988 13.688 8.37988C14.649 8.37988 15.454 8.72388 16.164 9.41388C16.873 10.1019 17.235 11.1199 17.235 12.4659C17.235 14.2979 16.51 15.9569 15.075 17.4599C14.176 18.3979 12.946 19.2909 11.385 20.1679L10.976 19.4009L10.975 19.3859ZM20.421 19.3859C21.54 18.6019 22.36 17.9289 22.881 17.3969C23.795 16.4589 24.252 15.5819 24.252 14.7679C24.252 14.4999 24.173 14.2979 24.032 14.1719C23.897 14.0519 23.723 13.9849 23.543 13.9839C23.288 14.0289 23.03 14.0559 22.771 14.0629C22.029 14.0629 21.398 13.8119 20.909 13.3099C20.421 12.8109 20.168 12.1529 20.168 11.3389C20.168 10.4299 20.436 9.70988 20.973 9.17888C21.508 8.64688 22.219 8.37988 23.086 8.37988C24.111 8.37988 24.962 8.73988 25.64 9.47588C26.318 10.2119 26.665 11.2139 26.665 12.5129C26.665 14.3439 25.908 16.0189 24.41 17.5689C23.511 18.4769 22.312 19.3389 20.831 20.1679L20.421 19.4009V19.3859Z" fill="#FF4F4F"/>
            <path d="M26.474 26.304V34.523L18.007 26.304H9.53903C5.02903 26.304 1.35503 22.672 1.35503 18.18V10.4C1.34003 5.92302 4.99903 2.29102 9.52403 2.29102H26.474C30.985 2.29102 34.658 5.92302 34.658 10.415V18.195C34.658 22.672 31 26.32 26.474 26.32V26.304Z" stroke="#FF4F4F" strokeWidth="1.85455" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: "Highlight Clips",
      description: "Get ready to share audiograms of your episode’s most shareable moments.",
      link: "#"
    },
    {
      icon: (
        <svg width="30" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" clipRule="evenodd" stroke="#4FFFB5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9.299 14.179c0-.32.19-.61.49-.74 1.33-.59 4.96-2.44 5.78-5.34.31-1.12.3-2.34-.21-3.97-.51-1.62 1.56-3.48 3.33-1.59 2.2 2.36 3.21 5.2 1.4 9.48 0 0 5.16.03 6.85.07 1.04.03 1.97.86 1.88 2.5-.1 1.72-1.42 2.04-1.42 2.04s1.27.45 1.42 2.1c0 0 .14 1.85-1.65 2.17.71.55.96.9.83 2-.19 1.52-2.1 1.84-2.1 1.84s.39.86-.16 1.94c-.35.68-1.27 1.31-2.46 1.31-3.77 0-10.9-.51-13.22-.68a.798.798 0 0 1-.74-.8v-12.36l-.02.03Z"/><path d="M9.3 13.67c0-.21-.08-.42-.24-.57a.82.82 0 0 0-.57-.24H1.66c-.21 0-.42.08-.57.24a.82.82 0 0 0-.24.57v13.3c0 .21.08.42.24.57.16.15.36.24.57.24h6.83c.21 0 .42-.08.57-.24.15-.16.24-.36.24-.57v-13.3Z"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.01 .899)" d="M0 0h29.65v27.96H0z"/></clipPath></defs></svg>
      ),
      name: "PodiumGPT",
      description: "Generate any marketing collateral for your content, from social media updates to blog posts.",
      link: "#"
    },
    {
      icon: (
        <svg width="33" height="33" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.7723 4.68175L28.9032 8.76775C29.7192 11.7147 32.0232 14.0137 34.9762 14.8287L39.0702 15.9567C39.9812 16.2077 39.9812 17.4927 39.0702 17.7437L34.9762 18.8728C32.0232 19.6878 29.7192 21.9868 28.9032 24.9338L27.7723 29.0187C27.5203 29.9287 26.2332 29.9287 25.9812 29.0187L24.8503 24.9338C24.0343 21.9868 21.7303 19.6878 18.7773 18.8728L14.6833 17.7437C13.7722 17.4927 13.7722 16.2077 14.6833 15.9567L18.7773 14.8287C21.7303 14.0137 24.0343 11.7147 24.8503 8.76775L25.9812 4.68175C26.2332 3.77275 27.5203 3.77275 27.7723 4.68175Z" fill="#FF4FF8"/>
            <path d="M9.09277 0.44804L9.84091 3.14773C10.3819 5.08922 11.9012 6.60566 13.8463 7.14559L16.5512 7.89231C17.1496 8.05316 17.1496 8.90326 16.5512 9.0756L13.8463 9.82232C11.9012 10.3623 10.3819 11.8787 9.84091 13.8202L9.09277 16.5199C8.93163 17.1172 8.0799 17.1172 7.90725 16.5199L7.15912 13.8202C6.61815 11.8787 5.09886 10.3623 3.15369 9.82232L0.448883 9.0756C-0.149628 8.91475 -0.149628 8.06463 0.448883 7.89231L3.15369 7.14559C5.09886 6.60566 6.61815 5.08922 7.15912 3.14773L7.90725 0.44804C8.0684 -0.149347 8.92012 -0.149347 9.09277 0.44804Z" fill="#FF4FF8"/>
            <path d="M14.4478 27.3285L14.9808 29.3285C15.3598 30.7715 16.4367 31.8945 17.8207 32.2895L19.7387 32.8455C20.1587 32.9635 20.1587 33.5945 19.7387 33.7225L17.8207 34.2785C16.4367 34.6745 15.3598 35.7965 14.9808 37.2405L14.4478 39.2395C14.3348 39.6775 13.7297 39.6775 13.6067 39.2395L13.0737 37.2405C12.6937 35.7965 11.6177 34.6745 10.2327 34.2785L8.31575 33.7225C7.89475 33.6045 7.89475 32.9745 8.31575 32.8455L10.2327 32.2895C11.6177 31.8945 12.6937 30.7715 13.0737 29.3285L13.6067 27.3285C13.7197 26.8905 14.3248 26.8905 14.4478 27.3285Z" fill="#FF4FF8"/>
        </svg>
      ),
      name: "Keywords & more!",
      description: "Tons of highly-relevant keywords so your podcast can be discovered more easily by fans and search engines.",
      link: "#"
    }
  ];
  

const ApiFeatures = () => {
  const { t } = useTranslation();

    return (
      <section className='Features'>
        <div className='flex flex-col w-full items-center text-center p-8 justify-center'>
            <h2 className='mt-4 text-3xl md:text-5xl lg:text-6xl max-w-3xl font-bold text-black'>{t('Conversational AI tuned for your audio.')}</h2>
            <p className='mt-4 text-xl font-light text-gray-600'>{t("Scale your audio processing pipeline using Longformer's API")}</p>
        </div>
        <div className='flex w-full items-center justify-center px-16 py-8 max-w-5xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apiFeaturesList.map((feature, index) => (
                <div key={index} className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <div className='h-12 w-12'>{feature.icon}</div>
                    <h3 className="mt-4 text-xl font-semibold text-black">{t(feature.name)}</h3>
                    <p className="mt-2 text-lg text-gray-600 font-light">{t(feature.description)}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    );
};

export default ApiFeatures;