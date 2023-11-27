import React from "react";
import laravel from '../logo/laravel-color.svg';
import c from '../logo/c-color.svg';
import cplusplus from '../logo/cplusplus-color.svg';
import nodedotjs from '../logo/nodedotjs-color.svg';
import javascript from '../logo/javascript-color.svg';
import bootstrap from '../logo/bootstrap-color.svg';
import php from '../logo/php-color.svg';
import python from '../logo/python-color.svg';
import tailwindcss from '../logo/tailwindcss-color.svg';

function Skills() {
    return (
        <section id="skills" className="pt-36 pb-32 bg-slate-50 dark:bg-slate-700">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-16 text-center">
                        <h4 className="mb-5 text-xl font-bold uppercase text-primary">Skills</h4>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Bahasa Dan Framework
                            Yang Dikuasai
                        </h2>
                        <p className="text-md font-medium text-secondary dark:text-slate-300 md:text-lg">Lorem ipsum dolor sit amet
                            consectetur adipisicing
                            elit. Vero suscipit facilis velit!</p>
                    </div>
                </div>

                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center lg:gap-20">
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={laravel} alt="laravel" width="64" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={c} alt="c" width="64" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={cplusplus} alt="cplusplus" width="64" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={nodedotjs} alt="nodedotjs" width="80" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={javascript} alt="javascript" width="80" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={bootstrap} alt="bootstrap" width="80" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={php} alt="php" width="80" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={python} alt="python" width="80" />
                        </a>
                        <a href="#"
                            className="mx-4 py-4 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0">
                            <img src={tailwindcss} alt="tailwindcss" width="80" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;