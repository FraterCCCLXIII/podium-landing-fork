import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Language from './Language';

const Header = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();  // Declare useNavigate at the top level
  const location = useLocation();

  // Function to apply active styles
  const isActive = (path) => location.pathname === path;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full border-b border-gray-300 dark:border-dark-border">
      {/* Main Header Container */}
      <div className="flex items-center justify-between px-4 py-4 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md text-gray-400 dark:text-dark-text sm:px-8">
        {/* Logo */}
        <div className='cursor-pointer' onClick={() => navigate('/')}>
          <svg width="147" height="24" viewBox="0 0 147 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11661_2153)">
              <path d="M29.0931 0.838875V18.7008H25.8997V0.838875H29.0931Z" fill="currentColor"/>
              <path d="M36.9729 18.9463C35.6458 18.9463 34.5053 18.6598 33.5307 18.087C32.5561 17.5141 31.8096 16.7161 31.2704 15.6726C30.7313 14.6292 30.4617 13.422 30.4617 12.0512C30.4617 10.6803 30.7313 9.45269 31.2704 8.40921C31.8096 7.36573 32.5561 6.56778 33.5307 5.97442C34.5053 5.38107 35.6458 5.11509 36.9729 5.11509C38.3 5.11509 39.4405 5.40153 40.4151 5.97442C41.3898 6.54731 42.1363 7.36573 42.6754 8.40921C43.2146 9.45269 43.4841 10.6598 43.4841 12.0512C43.4841 13.4425 43.2146 14.6496 42.6754 15.6726C42.1363 16.7161 41.3898 17.5141 40.4151 18.087C39.4405 18.6598 38.3 18.9463 36.9729 18.9463ZM36.9937 16.4297C37.7194 16.4297 38.3208 16.2251 38.7977 15.8363C39.2746 15.4476 39.6479 14.9156 39.876 14.2609C40.1248 13.6061 40.2285 12.8696 40.2285 12.0512C40.2285 11.2327 40.1041 10.4962 39.876 9.82097C39.6479 9.14578 39.2746 8.63427 38.7977 8.22506C38.3208 7.83632 37.7194 7.63171 36.9937 7.63171C36.2679 7.63171 35.6458 7.83632 35.1689 8.22506C34.6919 8.61381 34.3187 9.14578 34.0906 9.82097C33.8417 10.4962 33.738 11.2327 33.738 12.0512C33.738 12.8696 33.8625 13.6061 34.0906 14.2609C34.3187 14.9156 34.6919 15.4476 35.1689 15.8363C35.6458 16.2251 36.2679 16.4297 36.9937 16.4297Z" fill="currentColor"/>
              <path d="M48.3779 10.844V18.7008H45.1845V5.29923H48.2328V7.57033H48.3986C48.7097 6.8133 49.2074 6.21995 49.8917 5.79028C50.576 5.36062 51.4262 5.13555 52.4422 5.13555C53.3754 5.13555 54.2048 5.34015 54.8891 5.7289C55.5942 6.11765 56.1333 6.69054 56.5066 7.44757C56.9006 8.20461 57.0872 9.10486 57.0664 10.1688V18.7008H53.873V10.6598C53.873 9.75959 53.6449 9.06394 53.168 8.55243C52.6911 8.04092 52.0482 7.7954 51.2188 7.7954C50.6589 7.7954 50.1612 7.91816 49.7258 8.16368C49.2903 8.40921 48.9585 8.75703 48.7097 9.20716C48.4609 9.65729 48.3364 10.2097 48.3364 10.8645L48.3779 10.844Z" fill="currentColor"/>
              <path d="M65.0085 24C63.868 24 62.8726 23.8568 62.0432 23.5499C61.2137 23.243 60.5501 22.8338 60.0525 22.3223C59.5548 21.8107 59.2023 21.2379 59.0157 20.624L61.898 19.9284C62.0224 20.1944 62.2091 20.4399 62.4579 20.7059C62.7067 20.9719 63.0385 21.1765 63.4532 21.3402C63.868 21.5038 64.4071 21.6061 65.0499 21.6061C65.9623 21.6061 66.7088 21.3811 67.3102 20.9514C67.9115 20.5217 68.2019 19.8056 68.2019 18.8235V16.2864H68.036C67.8701 16.6138 67.6212 16.9412 67.3102 17.289C66.9991 17.6368 66.5844 17.9233 66.066 18.1483C65.5476 18.3734 64.9048 18.4962 64.1168 18.4962C63.08 18.4962 62.1261 18.2506 61.2759 17.7596C60.4257 17.2685 59.7622 16.5524 59.2645 15.5703C58.7668 14.6087 58.518 13.3811 58.518 11.9284C58.518 10.4757 58.7668 9.20716 59.2645 8.2046C59.7622 7.18159 60.4257 6.42455 61.2759 5.89258C62.1261 5.36061 63.08 5.09463 64.1168 5.09463C64.9048 5.09463 65.5683 5.21739 66.0868 5.48338C66.6052 5.74936 67.0199 6.05627 67.3102 6.42455C67.6212 6.79284 67.8493 7.14067 68.0152 7.46803H68.2019V5.25831H71.3538V18.8645C71.3538 20.0102 71.0842 20.9514 70.5243 21.7084C69.9644 22.4655 69.2179 23.0179 68.2433 23.3862C67.2895 23.7545 66.1904 23.9386 64.967 23.9386L65.0085 24ZM65.0292 16.0205C65.7135 16.0205 66.2941 15.8568 66.7711 15.5294C67.248 15.202 67.6005 14.7315 67.8493 14.1176C68.0982 13.5038 68.2226 12.7673 68.2226 11.9284C68.2226 11.0895 68.0982 10.3529 67.8493 9.71867C67.6005 9.0844 67.248 8.59335 66.7711 8.24552C66.2941 7.8977 65.7135 7.71356 65.0292 7.71356C64.3449 7.71356 63.7228 7.8977 63.2459 8.26598C62.7689 8.63427 62.4164 9.12532 62.1676 9.78005C61.9187 10.4143 61.8151 11.1304 61.8151 11.9488C61.8151 12.7673 61.9395 13.4834 62.1883 14.0972C62.4372 14.711 62.7897 15.1816 63.2666 15.5294C63.7435 15.8772 64.3449 16.0409 65.0292 16.0409V16.0205Z" fill="currentColor"/>
              <path d="M79.6069 5.29923V7.73402H73.5933V5.29923H79.6069ZM73.5726 18.7008V4.03069C73.5726 3.13044 73.7592 2.3734 74.1325 1.78005C74.5057 1.1867 75.0241 0.736573 75.667 0.429668C76.3098 0.122762 77.0148 -0.0204601 77.8028 -0.0204601C78.3627 -0.0204601 78.8396 0.0204606 79.2751 0.102302C79.7105 0.184143 80.0216 0.265985 80.2289 0.327366L79.5861 2.76215C79.441 2.72123 79.2751 2.68031 79.0677 2.63939C78.8604 2.59847 78.6322 2.57801 78.3834 2.57801C77.7821 2.57801 77.3673 2.72123 77.1185 3.00767C76.8697 3.29412 76.7452 3.68286 76.7452 4.21483V18.6598H73.5311L73.5726 18.7008Z" fill="currentColor"/>
              <path d="M87.0097 18.9463C85.6826 18.9463 84.5421 18.6598 83.5675 18.087C82.5929 17.5141 81.8464 16.7161 81.3072 15.6726C80.7681 14.6292 80.4985 13.422 80.4985 12.0512C80.4985 10.6803 80.7681 9.45269 81.3072 8.40921C81.8464 7.36573 82.5929 6.56778 83.5675 5.97442C84.5421 5.38107 85.6826 5.11509 87.0097 5.11509C88.3369 5.11509 89.4774 5.40153 90.452 5.97442C91.4266 6.54731 92.1731 7.36573 92.7122 8.40921C93.2514 9.45269 93.5209 10.6598 93.5209 12.0512C93.5209 13.4425 93.2514 14.6496 92.7122 15.6726C92.1731 16.7161 91.4266 17.5141 90.452 18.087C89.4774 18.6598 88.3369 18.9463 87.0097 18.9463ZM87.0305 16.4297C87.7562 16.4297 88.3576 16.2251 88.8345 15.8363C89.3115 15.4476 89.6847 14.9156 89.9128 14.2609C90.1617 13.6061 90.2653 12.8696 90.2653 12.0512C90.2653 11.2327 90.1409 10.4962 89.9128 9.82097C89.6847 9.14578 89.3115 8.63427 88.8345 8.22506C88.3576 7.83632 87.7562 7.63171 87.0305 7.63171C86.3047 7.63171 85.6826 7.83632 85.2057 8.22506C84.7287 8.61381 84.3555 9.14578 84.1274 9.82097C83.8785 10.4962 83.7749 11.2327 83.7749 12.0512C83.7749 12.8696 83.8993 13.6061 84.1274 14.2609C84.3555 14.9156 84.7287 15.4476 85.2057 15.8363C85.6826 16.2251 86.3047 16.4297 87.0305 16.4297Z" fill="currentColor"/>
              <path d="M94.9103 18.7008V5.29923H98.0207V7.52941H98.1659C98.4147 6.75192 98.8294 6.15857 99.4515 5.7289C100.053 5.29923 100.737 5.09463 101.525 5.09463C101.691 5.09463 101.898 5.09463 102.127 5.11509C102.355 5.11509 102.541 5.15601 102.686 5.17647V8.08184C102.541 8.04092 102.334 8 102.044 7.95908C101.753 7.91816 101.463 7.8977 101.193 7.8977C100.613 7.8977 100.094 8.02046 99.6174 8.26598C99.1405 8.51151 98.788 8.85934 98.5184 9.289C98.2488 9.71867 98.1244 10.2302 98.1244 10.8031V18.6803H94.931L94.9103 18.7008Z" fill="currentColor"/>
              <path d="M104.262 18.7008V5.29923H107.311V7.57033H107.477C107.767 6.79284 108.223 6.19949 108.887 5.76982C109.529 5.34015 110.317 5.11509 111.23 5.11509C112.142 5.11509 112.93 5.34015 113.552 5.76982C114.195 6.19949 114.631 6.8133 114.9 7.57033H115.045C115.356 6.83376 115.854 6.24041 116.559 5.79028C117.264 5.34015 118.114 5.11509 119.11 5.11509C120.354 5.11509 121.37 5.50384 122.158 6.28133C122.946 7.05882 123.34 8.2046 123.34 9.69821V18.6803H120.126V10.1893C120.126 9.35038 119.898 8.75703 119.462 8.36829C119.027 7.97954 118.467 7.7954 117.824 7.7954C117.057 7.7954 116.455 8.04092 116.02 8.51151C115.584 8.9821 115.377 9.59591 115.377 10.3529V18.7008H112.246V10.0665C112.246 9.37084 112.039 8.81841 111.624 8.40921C111.209 8 110.649 7.7954 109.986 7.7954C109.529 7.7954 109.115 7.91816 108.721 8.14322C108.347 8.36829 108.036 8.69565 107.829 9.10486C107.622 9.51407 107.497 10.0051 107.497 10.5575V18.7008H104.304H104.262Z" fill="currentColor"/>
              <path d="M131.593 18.9463C130.224 18.9463 129.063 18.6598 128.068 18.1074C127.072 17.555 126.326 16.757 125.787 15.7136C125.248 14.6905 124.999 13.4629 124.999 12.0716C124.999 10.6803 125.268 9.49361 125.807 8.45013C126.347 7.40665 127.093 6.58824 128.047 6.01535C129.001 5.422 130.141 5.13555 131.427 5.13555C132.256 5.13555 133.044 5.25831 133.791 5.5243C134.537 5.79028 135.201 6.19949 135.761 6.75192C136.342 7.30435 136.798 8 137.109 8.85934C137.441 9.71867 137.606 10.7212 137.606 11.9079V12.8696H126.471V10.7417H134.537C134.537 10.1279 134.392 9.59591 134.143 9.12532C133.895 8.65473 133.521 8.28645 133.065 8C132.609 7.73402 132.07 7.59079 131.448 7.59079C130.784 7.59079 130.224 7.75448 129.727 8.06138C129.229 8.36829 128.856 8.7775 128.565 9.289C128.296 9.80051 128.151 10.3529 128.151 10.9463V12.8082C128.151 13.5857 128.296 14.2609 128.586 14.8133C128.876 15.3657 129.27 15.7954 129.789 16.0818C130.307 16.3683 130.909 16.532 131.614 16.532C132.07 16.532 132.505 16.4706 132.879 16.3274C133.252 16.2046 133.584 16 133.853 15.7545C134.123 15.509 134.33 15.1816 134.475 14.8133L137.461 15.1407C137.275 15.9182 136.922 16.5934 136.383 17.1867C135.844 17.7801 135.18 18.2097 134.372 18.5371C133.563 18.8645 132.609 19.0077 131.572 19.0077L131.593 18.9463Z" fill="currentColor"/>
              <path d="M139.245 18.7008V5.29923H142.355V7.52941H142.5C142.749 6.75192 143.164 6.15857 143.786 5.7289C144.387 5.29923 145.072 5.09463 145.859 5.09463C146.025 5.09463 146.233 5.09463 146.461 5.11509C146.689 5.11509 146.876 5.15601 147.021 5.17647V8.08184C146.876 8.04092 146.668 8 146.378 7.95908C146.088 7.91816 145.797 7.8977 145.528 7.8977C144.947 7.8977 144.429 8.02046 143.952 8.26598C143.475 8.51151 143.122 8.85934 142.853 9.289C142.583 9.71867 142.459 10.2302 142.459 10.8031V18.6803H139.265L139.245 18.7008Z" fill="currentColor"/>
              <path d="M0 0.838875V18.7008H18.1028V0.838875H0ZM14.9924 13.4629L5.30851 3.90793H14.9924V13.4629ZM3.11045 6.07673L12.7943 15.6317H3.11045V6.07673Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="clip0_11661_2153">
                <rect width="147" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Menu for Screens larger than sm */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          <div></div> {/* Empty to keep middle and right parts centered */}
          <div className="flex items-center space-x-8">
            <Language />
            <nav className="flex space-x-8">
                <button className="text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => navigate('/#features')}>{t('What you get')}</button>
                <button 
                  className="text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => navigate('/pricing')}
                >
                  {t('Pricing')}
                </button>
                <button  
                  className="text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => navigate('/api')}
                >
                  {t('API')}</button>
                <button className="text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://podium.page/login'}>{t('Log In')}</button>
            </nav>
            <button className='flex h-10 w-fit px-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it now')}</button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden flex flex-row items-center space-x-2'>
            <Language />
            <button
              className="text-black dark:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 top-20 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md flex flex-col justify-left text-left text-gray-400 dark:text-dark-text">
          <nav className="flex w-full flex-col space-y-6 text-lg items-left justify-left p-4">
            <button className="text-left text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://hello.podium.page/pricing'}>{t('Pricing')}</button>
            <button className="text-left text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://hello.podium.page/api'}>{t('API')}</button>
            <button className="text-left text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://hello.podium.page/blog'}>{t('Resources')}</button>
            <button className="text-left text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://hello.podium.page/affiliates'}>{t('Affiliate Program')}</button>
            <button className="text-left text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://hello.podium.page/tos'}>{t('Terms of Service')}</button>
            <button className="text-left text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://hello.podium.page/privacy-policy'}>{t('Privacy Policy')}</button>
            <button className='my-4 flex h-12 w-full bg-white text-black font-medium text-xl rounded-lg hover:bg-gray-200 transition-colors duration-200 items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it now →')}</button>
            <button className="text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200" onClick={() => window.location.href = 'https://podium.page/login'}>{t('Log In')}</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
