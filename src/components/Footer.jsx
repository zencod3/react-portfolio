import React from 'react';
import whatsapp from '../logo/whatsapp-color.svg'
import gmail from '../logo/gmail-color.svg'
import instagram from '../logo/instagram-color.svg'
import facebook from '../logo/facebook-color.svg'
import twitter from '../logo/twitter-color.svg'
import linkedin from '../logo/linkedin-color.svg'

function Footer() {
    return (
        <footer className="w-full bg-dark py-16">
            <div className="container">
                <div className="md:px-12 lg:px-28">
                    <div className="container m-auto space-y-6 text-slate-600 dark:text-slate-300">
                        <ul role="list" className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8">
                            <li role="listitem"><a href="#home" className="hover:text-primary">Home</a></li>
                            <li role="listitem"><a href="#about" className="hover:text-primary">About</a></li>
                            <li role="listitem"><a href="#contact" className="hover:text-primary">Contact</a></li>
                            <li role="listitem"><a href="#hobby" className="hover:text-primary">Hobby</a></li>
                            <li role="listitem"><a href="#skills" className="hover:text-primary">Skills</a></li>
                        </ul>
                        <div className="m-auto flex w-max items-center justify-between space-x-4">
                            <a href="https://wa.me//6282141404905" className="flex items-center">
                                <img src={whatsapp} alt="whatsapp" width="20" className="mr-3"/>
                            </a>
                            <a href="mailto:luthfizain45@gmail.com" className="flex items-center">
                                <img src={gmail} alt="email" width="20" className="mr-3 "/>
                            </a>
                            <a href="" className="flex items-center">
                                <img src={instagram} alt="instagram" width="20" className="mr-3"/>
                            </a>
                            <a href="" className="flex items-center">
                                <img src={facebook} alt="facebook" width="20" className="mr-3"/>
                            </a>
                            <a href="" className="flex items-center">
                                <img src={twitter} alt="twitter" width="20" className="mr-3"/>
                            </a>
                            <a href="" className="flex items-center">
                                <img src={linkedin} alt="linkedin" width="20" className="mr-3"/>
                            </a>
                        </div>
                        <div className="text-center">
                            <span className="text-sm tracking-wide">Copyright © zencod3 | All right reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
