import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const plans = ['1-3', '3-10', '10-20', '20-50', '50+'];
const savings = [5, 15, 30, 50, 100]; // Corresponding savings for each plan

const Calculator = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState(0); // Default to the first plan
  const [animatedValue, setAnimatedValue] = useState(savings[0]); // Counter value

  useEffect(() => {
    // Calculate the difference between current value and target value
    const targetValue = savings[selectedPlan];
    const increment = targetValue > animatedValue ? 1 : -1;

    const interval = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev === targetValue) {
          clearInterval(interval); // Stop animation once target is reached
          return prev;
        }
        return prev + increment; // Increment/decrement towards the target
      });
    }, 10); // Adjust speed of counter effect here (lower = faster)

    return () => clearInterval(interval); // Cleanup on component unmount or value change
  }, [selectedPlan]);

  return (
    <section className="Calculator bg-white dark:bg-dark-bg items-center px-[36px] pb-24 justify-center">
      <div className="flex flex-col w-full items-center text-center p-8 justify-center">
        <p className="mt-8 text-sm md:text-base font-medium text-gray-400">
          {t('CALCULATOR')}
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-black">
          {t('Calculate your time savings')}
        </h2>
        <p className="mt-4 text-xl font-light text-gray-600">
          {t('See how much time you can save using Longformer.')}
        </p>
      </div>
      <div className="flex w-full items-center justify-center pb-12">
        <div className="flex flex-col md:flex-row w-full max-w-md md:max-w-5xl md:h-[420px] rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg">
          {/* Left Section */}
          <div className="flex flex-col w-full p-8 gap-12 items-center justify-center bg-white dark:bg-dark-bg min-h-[280px] rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl">
            <div className="text-lg md:text-xl lg:text-2xl font-medium text-white text-center">
              {t('How many hours of content do you create per month?')}
            </div>
            <div className="relative flex flex-row w-full items-center justify-between gap-4">
              {/* Static Bar */}
              <div className="absolute top-2 w-[98%] h-2 bg-gray-300 z-0"></div>

              {/* Selector */}
              {plans.map((plan, index) => (
                <label
                  key={index}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="plans"
                    value={index}
                    checked={selectedPlan === index}
                    onChange={() => setSelectedPlan(index)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 items-center z-10 justify-center rounded-full ${
                      selectedPlan === index
                        ? ''
                        : 'border-2 border-white bg-white dark:border-white dark:bg-dark-bg-secondary'
                    }`}
                    style={selectedPlan === index ? { backgroundColor: 'white' } : {}}
                  >
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      selectedPlan === index
                        ? 'font-bold text-white dark:text-dark-text'
                        : 'font-semibold text-gray-300 dark:text-dark-text-secondary'
                    }`}
                  >
                    {plan}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col w-full p-8 gap-8 bg-white items-center min-h-[280px] justify-center rounded-br-2xl rounded-bl-2xl md:rounded-bl-none md:rounded-tr-2xl">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                {t("Monthly you'll save:")}
              </h3>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                {animatedValue} {t('hours')}
              </span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <button 
                  className='my-2 flex h-12 w-full sm:w-fit sm:px-8 bg-black text-white font-medium text-xl rounded-lg items-center justify-center'
                  onClick={() => window.location.href = 'https://podium.page/create-account'}
                >
                  {t('Try it yourself →')}
                </button>
                <p className='text-base font-regular text-black'>No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
