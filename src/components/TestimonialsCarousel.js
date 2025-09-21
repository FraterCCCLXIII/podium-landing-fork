import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const TestimonialsCarousel = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  // Combined testimonials from both sections
  const testimonials = [
    {
      quote: "Longformer is by far my favorite, and I have used a bunch of tools for this--I like it so much that I'll be redoing older episodes.",
      name: "Briar Harvey",
      company: "The Neurodiversity Media Network",
      companyUrl: "https://www.neurodiversitymedianetwork.com/",
      image: "https://framerusercontent.com/images/5KVttkADAZLwSGsQydMYLcDLkg.jpeg?scale-down-to=512"
    },
    {
      quote: "The speed is INCREDIBLE considering how much time we spend currently developing the transcript, notes, and various meta data for distribution and promotion.",
      name: "Colleen O'Connell",
      company: "Harper Collins",
      companyUrl: "https://www.harpercollins.com/pages/childrens",
      image: "https://framerusercontent.com/images/UfFuhXaQk8LfE3UqxngaXAT510.jpeg"
    },
    {
      quote: "Longformer is such a HELPFUL tool!",
      name: "Mildred Achoch",
      company: "ROFFEKE",
      image: "https://framerusercontent.com/images/YCn7Ur84j1vHPxpEbSy7KDR9Nq8.jpeg"
    },
    {
      quote: "It's REALLY good.",
      name: "Alexander Reiman",
      company: "The Michael Shermer Show",
      companyUrl: "https://podcasts.apple.com/us/podcast/the-michael-shermer-show/id1352860989",
      image: "https://framerusercontent.com/images/vdWNjDflVnpHsByTHblyitJrAeA.jpg?scale-down-to=512"
    },
    {
      quote: "I enjoy using Longformer and have used it for most of my episodes as of late. The speed with which it creates the show notes is awesome.",
      name: "Darian Parker, PhD",
      company: "Dr. D's Social Network",
      companyUrl: "https://doctordarianparker.com/dr-ds-social-network-podcast/",
      image: "https://framerusercontent.com/images/sjhVmDsgZ7W8v1k04u7cmd0M8g.jpeg"
    },
    {
      quote: "This is great. I have a podcast studio and will use this for all of my clients.",
      name: "Scott Fitzgerald",
      company: "ROC VOX Recording & Production",
      companyUrl: "https://rocvox.com/",
      image: "https://framerusercontent.com/images/IFzvROQXYpB2riyZrtCd69D0DE.jpeg?scale-down-to=512"
    },
    {
      quote: "Its amazing. Congratulations on a stellar product! 👏",
      name: "Drew Joseph",
      company: "ESL Communication Coach",
      image: "https://framerusercontent.com/images/aNe6Ytsi1jCQtkFuOMvpepYi5aY.jpeg?scale-down-to=512"
    },
    {
      quote: "I am a huge fan of Longformer and tell everyone about it!",
      name: "Jesse Ulrich",
      company: "Rant9 Productions",
      image: "https://framerusercontent.com/images/9U1x7vCDRPkcLbkpgH4lvySNo.jpeg"
    },
    {
      quote: "If anybody asks me about transcribing audio, I know where to send them. :)",
      name: "Knox Bronson",
      company: "Riding the Wild Bubble",
      image: "https://framerusercontent.com/images/BlnFmDZuSoMPXmLn5QU7e8hec.jpeg"
    },
    {
      quote: "PodiumGPT is extremely helpful and I have found it to be very valuable in my work.",
      name: "Cody Gough",
      company: "NerdWallet",
      image: "https://framerusercontent.com/images/94vqqmNldXbcNgGXA4qp13ax8es.jpeg?scale-down-to=512"
    },
    {
      quote: "I love PodiumGPT, and it's really gotten me over the postproduction inertia that pretty much stalled season one of my show.",
      name: "Dr. Lisa Richardson",
      company: "Biz Over Tea",
      image: "https://framerusercontent.com/images/IgH5w1WeklxVEg4Yi2DO5Ttb4IQ.png"
    },
    {
      quote: "Wow, I am impressed! These are great notes and title ideas etc! What a timesaver!",
      name: "Kylie Patchett",
      company: "The Radiance Revolution",
      image: "https://framerusercontent.com/images/J4FYLAGrqRaTqVbaQvJelnzSU.jpeg"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Create a simple animation using requestAnimationFrame
      let startTime = null;
      const duration = 60000; // 60 seconds for slower movement
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) % duration;
        const percentage = progress / duration;
        
        // Move from 0 to -50% (half the width for seamless loop)
        const translateX = percentage * -50;
        container.style.transform = `translateX(${translateX}%)`;
        
        requestAnimationFrame(animate);
      };
      
      // Set initial styles
      container.style.width = 'max-content';
      container.style.display = 'flex';
      container.style.position = 'relative';
      
      // Start animation
      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div 
        ref={containerRef}
        className="flex items-start"
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-80 mr-6">
            <div className="bg-gray-50 dark:bg-dark-bg-secondary h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
              <p className="mt-2 text-lg text-gray-600 dark:text-dark-text-secondary font-light">
                {testimonial.quote}
              </p>
              <h3 className="mt-4 text-lg font-medium text-black dark:text-dark-text">
                {testimonial.name}
              </h3>
              {testimonial.companyUrl ? (
                <a 
                  href={testimonial.companyUrl}
                  className="text-gray-400 dark:text-dark-text-secondary text-lg font-medium hover:text-gray-700 dark:hover:text-dark-text hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {testimonial.company}
                </a>
              ) : (
                <p className="text-gray-400 dark:text-dark-text-secondary text-lg font-medium">
                  {testimonial.company}
                </p>
              )}
              <img 
                src={testimonial.image} 
                alt={`${testimonial.name} Portrait`}
                className="mt-4 w-12 h-12 rounded-full" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
