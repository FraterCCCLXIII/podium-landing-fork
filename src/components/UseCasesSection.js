import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const UseCasesSection = () => {
  const { t } = useTranslation();
  const [selectedUseCase, setSelectedUseCase] = useState(0);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  const useCases = [
    {
      id: 0,
      title: "Podcasters",
      description: "Transform your audio content into engaging visual assets",
      benefits: [
        "Generate show notes and transcripts automatically",
        "Create highlight clips for social media promotion",
        "Build a content library from every episode",
        "Save hours of manual editing and transcription work"
      ],
      video: "https://framerusercontent.com/assets/pJlNCpinuPPifwPoF6XJ7B510A.mov"
    },
    {
      id: 1,
      title: "Marketers",
      description: "Scale your content marketing with AI-powered tools",
      benefits: [
        "Create multiple content formats from single recordings",
        "Generate social media posts and email newsletters",
        "Extract key insights and quotes for campaigns",
        "Maintain consistent brand voice across all content"
      ],
      video: "https://framerusercontent.com/assets/m7LgsnwSPDnTXirHZUJQafjz3s.mov"
    },
    {
      id: 2,
      title: "Agencies",
      description: "Deliver premium content services at scale",
      benefits: [
        "Handle multiple client projects simultaneously",
        "Maintain consistent quality across all deliverables",
        "Reduce production time and costs significantly",
        "Offer new services like AI-generated content"
      ],
      video: "https://framerusercontent.com/assets/pJlNCpinuPPifwPoF6XJ7B510A.mov"
    },
    {
      id: 3,
      title: "Content Creators",
      description: "Maximize your content's reach and engagement",
      benefits: [
        "Repurpose long-form content into multiple formats",
        "Create engaging clips for different platforms",
        "Generate captions and descriptions automatically",
        "Build a content ecosystem from single recordings"
      ],
      video: "https://framerusercontent.com/assets/m7LgsnwSPDnTXirHZUJQafjz3s.mov"
    },
    {
      id: 4,
      title: "Influencers",
      description: "Amplify your message across all platforms",
      benefits: [
        "Create platform-specific content variations",
        "Generate engaging captions and descriptions",
        "Extract viral moments from longer content",
        "Maintain consistent posting schedule with less effort"
      ],
      video: "https://framerusercontent.com/assets/pJlNCpinuPPifwPoF6XJ7B510A.mov"
    }
  ];

  const currentUseCase = useCases[selectedUseCase];

  // Handle video transition with fade effect
  const handleUseCaseChange = (index) => {
    if (index === selectedUseCase) return;
    
    setIsVideoTransitioning(true);
    setSelectedUseCase(index);
    
    // After fade out, change video and fade back in
    setTimeout(() => {
      setVideoKey(prev => prev + 1);
      setIsVideoTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-16 md:py-20 px-5 md:px-10 pb-32 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Use case selector */}
          <div className="flex flex-col justify-center">
            <p className="mt-8 text-sm md:text-base font-medium text-gray-400">USE CASES</p>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Scale creative faster and better than ever
            </h2>
            <div className="space-y-1">
              {useCases.map((useCase, index) => (
                <button
                  key={useCase.id}
                  onClick={() => handleUseCaseChange(index)}
                  className={`use-case-button w-full text-left py-4 px-6 border-l-4 transition-all duration-300 ${
                    selectedUseCase === index
                      ? 'border-[#eff31b] bg-transparent'
                      : 'border-white/20 hover:border-white/40 hover:bg-gray-800/20'
                  }`}
                >
                  <span className={`font-semibold text-lg ${
                    selectedUseCase === index
                      ? 'text-[#eff31b]'
                      : 'text-white/60'
                  }`}>
                    {useCase.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Content and benefits */}
          <div className="space-y-6">
            <div 
              className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-500 opacity-0 translate-y-4"
              style={{
                animation: `fadeIn 0.5s ease-in-out forwards`,
                animationDelay: `0s`,
                animationFillMode: 'both'
              }}
            >
              <video 
                key={videoKey}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isVideoTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
                autoPlay 
                loop 
                playsInline
                muted
              >
                <source src={currentUseCase.video} type="video/mp4" />
              </video>
            </div>
            <ul className="space-y-3">
              {currentUseCase.benefits.map((benefit, index) => (
                <li 
                  key={`${selectedUseCase}-${index}`}
                  className="flex items-start gap-3 transition-all duration-500 h-12 md:h-auto opacity-0 translate-y-4"
                  style={{
                    animation: `fadeIn 0.5s ease-in-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <span className="text-[#eff31b] mt-1">✓</span>
                  <span className="text-base text-white/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
