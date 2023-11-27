import React from "react";
import images1 from '../images/1.jpeg';
import images2 from '../images/2.jpeg';
import images3 from '../images/2.jpg';
import images4 from '../images/3.jpeg';

function Hobby() {
    return (
        <section id="hobby" className="pt-36 pb-32 bg-slate-50 dark:bg-slate-700">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-16 text-center">
                        <h4 className="mb-5 text-xl font-bold uppercase text-primary">Hobby</h4>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Kegiatan Saat Waktu
                            Luang
                        </h2>
                        <p className="text-md font-medium text-secondary dark:text-slate-300 md:text-lg">Lorem ipsum dolor sit amet
                            consectetur adipisicing
                            elit. Nisi quisquam perspiciatis blanditiis dolores?</p>
                    </div>
                </div>

                <div className="w-full px-4">
                    <div className="container mx-auto mt-5">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-wrap justify-center gap-3 lg:gap-10">
                                <div className="w-24 h-24 rounded-lg transform rotate-45 relative overflow-hidden lg:w-48 lg:h-48">
                                    <img src={images1} alt="Gambar"
                                        className="object-cover w-full h-full rounded-lg transform -rotate-45 absolute inset-0" />
                                </div>
                                <div className="w-24 h-24 rounded-lg transform rotate-45 relative overflow-hidden lg:w-48 lg:h-48">
                                    <img src={images2} alt="Gambar"
                                        className="object-cover w-full h-full rounded-lg transform -rotate-45 absolute inset-0" />
                                </div>
                                <div className="w-24 h-24 rounded-lg transform rotate-45 relative overflow-hidden lg:w-48 lg:h-48">
                                    <img src={images3} alt="Gambar"
                                        className="object-cover w-full h-full rounded-lg transform -rotate-45 absolute inset-0" />
                                </div>
                                <div className="w-24 h-24 rounded-lg transform rotate-45 relative overflow-hidden lg:w-48 lg:h-48">
                                    <img src={images4} alt="Gambar"
                                        className="object-cover w-full h-full rounded-lg transform -rotate-45 absolute inset-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hobby;