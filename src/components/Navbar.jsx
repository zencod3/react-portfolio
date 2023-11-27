import React, { useEffect, useState } from 'react';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check local storage or system preference for initial dark mode setting
        return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    const handleDarkModeToggle = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.theme = newMode ? 'dark' : 'light';
            return newMode;
        });
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 dark:bg-transparent">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-xl text-primary block py-6">zencod3</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out dark:bg-white"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out dark:bg-white"></span>
                            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out dark:bg-white"></span>
                        </button>

                        <nav id="nav-menu"
                            className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:dark:bg-transparent dark:bg-slate-800">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white group-focus:text-primary">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">About</a>
                                </li>
                                <li className="group">
                                    <a href="#contact"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Contact</a>
                                </li>
                                <li className="group">
                                    <a href="#hobby"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Hobby</a>
                                </li>
                                <li className="group">
                                    <a href="#skills"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Skills</a>
                                </li>
                                <li className="mt-3 flex items-center pl-8 lg:mt-0">
                                    <div className="flex">
                                        <span className="mr-2 text-sm text-yellow-400 dark:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            id="dark-toggle"
                                            checked={isDarkMode}
                                            onChange={handleDarkModeToggle}
                                        />
                                        <label htmlFor="dark-toggle">
                                            <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                                <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out">
                                                </div>
                                            </div>
                                        </label>
                                        <span className="ml-2 text-sm text-dark dark:text-yellow-200"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="18" height="18" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                        </svg></span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
