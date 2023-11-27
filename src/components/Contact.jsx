import React from 'react';
import github from '../logo/github-color.svg';
import whatsapp from '../logo/whatsapp-color.svg';
import gmail from '../logo/gmail-color.svg';
import instagram from '../logo/instagram-color.svg';
import facebook from '../logo/facebook-color.svg';
import twitter from '../logo/twitter-color.svg';
import linkedin from '../logo/linkedin-color.svg';

function Contact() {
    return (
        <section id="contact" className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-16 max-w-xl text-center">
                        <h4 className="mb-5 text-xl font-bold uppercase text-primary">Contact</h4>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Hubungi Saya</h2>
                        <p className="text-md font-medium text-secondary md:text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi
                            nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
                        </p>
                    </div>
                </div>

                <div className="block lg:flex lg:justify-around">
                    <div
                        className="flex items-center justify-center mb-10 lg:bg-slate-150 lg:rounded-2xl lg:shadow-lg lg:dark:bg-slate-600">
                        <div className="px-9 py-5">
                            <h1 className="text-3xl text-center font-bold text-dark mb-10 dark:text-white">👆 Follow Me</h1>
                            <a href="https://github.com/zencod3" className="flex items-center dark:text-white">
                                <img src={github} alt="github" width="32" className="mr-3" />
                                <span className="">zencod3</span>
                            </a>
                            <a href="https://wa.me//6282141404905" className="flex items-center mt-4 dark:text-white">
                                <img src={whatsapp} alt="whatsapp" width="32" className="mr-3" />
                                <span className="">62 821-4140-4905</span>
                            </a>
                            <a href="mailto:luthfizain45@gmail.com" className="flex items-center mt-4 dark:text-white">
                                <img src={gmail} alt="email" width="32" className="mr-3 " />
                                <span className="">luthfizain45@gmail.com</span>
                            </a>
                            <a href="" className="flex items-center mt-4 dark:text-white">
                                <img src={instagram} alt="instagram" width="32" className="mr-3" />
                                <span className="">_zainluthfi</span>
                            </a>
                            <a href="" className="flex items-center mt-4 dark:text-white">
                                <img src={facebook} alt="facebook" width="32" className="mr-3" />
                                <span className="">luthfizain</span>
                            </a>
                            <a href="" className="flex items-center mt-4 dark:text-white">
                                <img src={twitter} alt="twitter" width="32" className="mr-3" />
                                <span className="">zainluthfi</span>
                            </a>
                            <a href="" className="flex items-center mt-4 dark:text-white">
                                <img src={linkedin} alt="linkedin" width="32" className="mr-3" />
                                <span className="">Moh. Luthfi Zain</span>
                            </a>
                        </div>
                    </div>
                    <form>
                        <div className="w-full lg:mx-auto">
                            <div className="flex justify-center">
                                <div className="mb-5 w-full px-4">
                                    <label htmlFor="first_name" className="text-base text-dark dark:text-white">First Name</label>
                                    <input type="text" id="first_name"
                                        className="mt-2 w-full rounded-md bg-slate-200 p-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                                </div>
                                <div className="mb-5 w-full px-4">
                                    <label htmlFor="last_name" className="text-base text-dark dark:text-white">Last Name</label>
                                    <input type="text" id="last_name"
                                        className="mt-2 w-full rounded-md bg-slate-200 p-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                                </div>
                            </div>
                            <div className="mb-5 w-full px-4">
                                <label htmlFor="email" className="text-base text-dark dark:text-white">Email</label>
                                <input type="email" id="email"
                                    className="mt-2 w-full rounded-md bg-slate-200 p-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <div className="mb-5 w-full px-4">
                                <label htmlFor="phone_number" className="text-base text-dark dark:text-white">Phone Number</label>
                                <input type="text" id="phone_number"
                                    className="mt-2 w-full rounded-md bg-slate-200 p-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <div className="mb-5 w-full px-4">
                                <label htmlFor="message" className="text-base text-dark dark:text-white">Pesan</label>
                                <textarea type="email" id="email"
                                    className="mt-2 h-20 w-full rounded-md bg-slate-200 p-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
                            </div>
                            <div className="w-full px-4">
                                <button
                                    className="w-full rounded-md bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
