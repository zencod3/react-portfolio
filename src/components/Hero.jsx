import React from 'react';
import developer_dark from '../images/developer-dark.svg';
import developer from '../images/developer.svg';

function Hero() {
    return (
        <section id="home" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                            Halo Semua 👋, saya
                            <span id="text-container"
                                className="block font-bold text-dark text-4xl mt-1 lg:text-4xl dark:text-white h-24 lg:h-16"></span>
                        </h1>
                        <div className="mb-10">
                            <p className="font-medium text-slate-400 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at culpa eveniet recusandae eos, ipsam
                                officiis corrupti inventore quae in corporis cum aut iusto neque accusantium repudiandae architecto
                                dolorum velit?
                            </p>
                        </div>

                        <a href="#"
                            className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Download
                            CV</a>
                        <a href="#"
                            className="text-base font-semibold text-slate-600 py-3 px-8 border border-primary rounded-full hover:bg-primary hover:text-white dark:text-slate-400 dark:hover:text-white transition duration-300 ease-in-out">Hubungi
                            Saya</a>
                    </div>
                    <div className="w-full self-end px-4c lg:w-1/2">
                        <div className="mt-10 lg:mt-0 lg:right-0">
                            <img src={developer_dark} alt="Noh. Luthfi Zain"
                                className="hidden max-w-full mx-auto dark:block" />
                            <img src={developer} alt="Noh. Luthfi Zain" className="max-w-full mx-auto dark:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
