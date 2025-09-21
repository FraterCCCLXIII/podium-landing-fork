import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import HomeDuplicate from './components/HomeDuplicate';
import Pricing from './components/Pricing';
import ApiPage from './components/api/Api';
import Header from "./components/Header.js";
import LoggedInHeader from './components/LoggedInHeader.js';
import Footer from "./components/Footer.js";
import CTA from "./components/CTA.js";
import { ThemeProvider } from './contexts/ThemeContext.js';

function App() {
  const location = useLocation(); // Get the current location

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const isLoggedIn = searchParams.get('logged_in') === 'true'; // Check if logged_in=true exists
  const isPricingPage = location.pathname === '/pricing'; // Check if we're on the pricing page

  // Load global tracking codes (GTM, Intercom, etc.)
  useEffect(() => {
    // Google Tag Manager script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NCHCWM2');
    `;
    document.head.appendChild(gtmScript);

    // Intercom script
    const intercomScript = document.createElement('script');
    intercomScript.innerHTML = `
      window.intercomSettings = { app_id: "pvurijy3" };
      (function(){
        var w=window;var ic=w.Intercom;
        if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}
        else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};
        w.Intercom=i;var l=function(){
          var s=d.createElement('script');s.type='text/javascript';s.async=true;
          s.src='https://widget.intercom.io/widget/pvurijy3';
          var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
        };
        if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}
        else{w.addEventListener('load',l,false);}}
      })();
    `;
    document.head.appendChild(intercomScript);

    // Other global tracking scripts like LinkedIn, Heap, etc.
    const heapScript = document.createElement('script');
    heapScript.innerHTML = `
      window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};
      var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";
      var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);
      for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties",
      "clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)
      heap[p[o]]=n(p[o])};
      heap.load("1763421435");
    `;
    document.head.appendChild(heapScript);

    // You can add other scripts similarly (LinkedIn, Meta Pixel, etc.)

    return () => {
      // Clean up scripts if needed when unmounting (optional)
    };
  }, []); // Only run once when the app is initialized

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-NCHCWM2" 
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }} 
          title="Google Tag Manager"></iframe>
      </noscript>

      <header className="absolute sticky top-0 z-50">
        {isPricingPage && isLoggedIn ? (
          <LoggedInHeader />  // Show the different header when logged_in=true
        ) : (
          <Header /> // Show the default header on all other pages
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-duplicate" element={<HomeDuplicate />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>

      <CTA />

      <footer className="border-t border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary transition-colors duration-300">
        <Footer />
      </footer>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
}
