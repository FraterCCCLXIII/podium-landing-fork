import React from "react";
import { useTranslation } from "react-i18next";


const Testimonials1 = () => {
    const { t } = useTranslation();
  
    return (
        <section className="Testimonials bg-white">
            <div className="flex flex-col items-center justify-center text-center py-16 px-8">
                <p className='mt-8 text-sm md:text-base font-medium text-gray-400'>{t('TESTIMONIALS')}</p>
                <h2 className='mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-black'>{t('Longformer empowers creators')}</h2>
                <p className='mt-4 text-xl font-light text-gray-600'>{t('Podcasters, producers, marketing directors, engineers…loving it.')}</p>
            </div>
            <div className="flex w-full items-center justify-center px-16 pb-16 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t("Longformer is by far my favorite, and I have used a bunch of tools for this--I like it so much that I'll be redoing older episodes.")}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Briar Harvey</h3>
                    <a href='https://www.neurodiversitymedianetwork.com/' className="text-gray-400 text-lg font-medium hover:text-gray-700 hover:underline">
                      The Neurodiversity Media Network
                    </a>
                    <img 
                        src="https://framerusercontent.com/images/5KVttkADAZLwSGsQydMYLcDLkg.jpeg?scale-down-to=512" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('The speed is INCREDIBLE considering how much time we spend currently developing the transcript, notes, and various meta data for distribution and promotion.')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Colleen O'Connell</h3>
                    <a href='https://www.harpercollins.com/pages/childrens' className="text-gray-400 text-lg font-medium hover:text-gray-700 hover:underline">
                      Harper Collins
                    </a>
                    <img 
                        src="https://framerusercontent.com/images/UfFuhXaQk8LfE3UqxngaXAT510.jpeg" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('Longformer is such a HELPFUL tool!')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Mildred Achoch</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      ROFFEKE
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/YCn7Ur84j1vHPxpEbSy7KDR9Nq8.jpeg" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t("It's REALLY good.")}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Alexander Reiman</h3>
                    <a href='https://podcasts.apple.com/us/podcast/the-michael-shermer-show/id1352860989' className="text-gray-400 hover:underline text-lg font-medium hover:text-gray-700">
                      The Michael Shermer Show
                    </a>
                    <img 
                        src="https://framerusercontent.com/images/vdWNjDflVnpHsByTHblyitJrAeA.jpg?scale-down-to=512" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('I enjoy using Longformer and have used it for most of my episodes as of late. The speed with which it creates the show notes is awesome.')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Darian Parker, PhD</h3>
                    <a href='https://doctordarianparker.com/dr-ds-social-network-podcast/' className="text-gray-400 hover:underline text-lg font-medium hover:text-gray-700">
                        Dr. D's Social Network
                    </a>
                    <img 
                        src="https://framerusercontent.com/images/sjhVmDsgZ7W8v1k04u7cmd0M8g.jpeg" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('This is great. I have a podcast studio and will use this for all of my clients.')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Scott Fitzgerald</h3>
                    <a href='https://rocvox.com/' className="text-gray-400 text-lg font-medium hover:text-gray-700 hover:underline">
                      ROC VOX Recording & Production
                    </a>
                    <img 
                        src="https://framerusercontent.com/images/IFzvROQXYpB2riyZrtCd69D0DE.jpeg?scale-down-to=512" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials1;