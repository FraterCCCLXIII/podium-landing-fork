import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost?",
      answer: (
        <>
          {t('Longformer has multiple plans to fit your needs and volume. Visit our')}{' '}
          <a
            href="/pricing"
            className="text-black dark:text-dark-text underline hover:text-gray-700 dark:hover:text-dark-text-secondary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('pricing page')}
          </a>{' '}
          {t('to learn more.')}
        </>
      )
    },
    {
      question: "Can I only get a transcript? (or clips? or...)",
      answer: t("Currently, Longofrmer's features do not come 'a la carte'. If you process with us, a podcast, we provide you with all the features available.")
    },
    {
      question: "What languages are supported?",
      answer: t("Longformer works with over 90 languages including full support for English, Spanish, Indonesian, German, French, Italian, and Swedish.")
    },
    {
      question: "How does Longformer differ from all the other similar tools out there?",
      answer: (
        <>
          {t('Unlike other tools, which strictly utilize publicly available (yet powerful) tools like GPT-3 and ChatGPT, Longformer mixes these tools with proprietary AI which has been made for podcasts specifically. (Much of this is also being utilized for the')}{' '}
          <a
            href="https://hello.fathom.fm/"
            className="text-black dark:text-dark-text underline hover:text-gray-700 dark:hover:text-dark-text-secondary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Fathom podcast player')}
          </a> .)
          <br></br> {t('For example, most other tools cannot find clips or create chapters for your podcast, as these cannot easily be re-created using ChatGPT or GPT-3.')}
        </>
      )
    },
    {
      question: "Does Longformer use ChatGPT or GPT-3/GPT-4?",
      answer: t("Longformer does utilize GPT-4, but alone, it's not enough to deliver the quality that Longformer aspires to. As such, we mix this (amazing) technology with proprietary neural networks which were created with podcasting and other audio content in mind.")
    },
    {
      question: "Who is this for?",
      answer: (
        <>
        {t('Longformer has helped solo podcasters on a budget, professional podcasters, producers, production studios, marketing directors, and more.')} <br></br>{t('If at any point you have found yourself assisting in the podcast creation process—Longformer can help.')}
        </>
      )
    }
  ];

  return (
    <div className='w-full'>
    <div className="items-center justify-center max-w-4xl mx-auto py-8">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 dark:border-dark-border">
          <button
            onClick={() => toggleFAQ(index)}
            className="faq-button w-full text-left py-4 px-2 focus:outline-none flex justify-between items-center hover:bg-gray-100 dark:hover:bg-dark-bg-hover transition-colors duration-200"
          >
            <span className="font-medium mr-2 text-black dark:text-dark-text">{t(faq.question)}</span>
            <svg
              className={`w-6 h-6 min-w-6 transform transition-all duration-300 ease-in-out text-black dark:text-dark-text ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-2 pb-4 text-left text-gray-600 dark:text-dark-text-secondary transform transition-all duration-300 ease-in-out">
                {faq.answer}
              </div>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
