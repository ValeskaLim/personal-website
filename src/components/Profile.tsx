import React, { useState } from "react";
import Profiles from "/profile.webp";
import { MdOutlineFileDownload } from "react-icons/md";

const Profile = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setThemeClass = () => {
        const html = document.querySelector('html');
        if(!html) return;

        const isDarkOrAuto = localStorage.getItem('hs_theme') === 'dark' || (localStorage.getItem('hs_theme') === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

        html.classList.remove('dark', 'light');

        if (isDarkOrAuto) {
            html.classList.add('dark');
            setIsDarkMode(true);
        } else {
            html.classList.add('light');
            setIsDarkMode(false);
        }
    };

    const handleThemeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isDarkMode = e.target.checked;

        if (isDarkMode) {
            localStorage.setItem('hs_theme', 'dark');
        } else {
            localStorage.setItem('hs_theme', 'light');
        }
        setThemeClass();
    };

    return (
        <div className="flex flex-col justify-center items-center pt-40 w-full">
            <div className="w-60 h-60 items-center text-center justify-center">
                <img src={Profiles} alt="Profile" className="rounded-full object-cover w-full h-full border-[3px] border-[#d1cecee5]"/>
            </div>
            <div className="w-full flex justify-center items-center pt-5 gap-2">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                </svg>
                <input data-hs-theme-switch="" className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-transparent border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none
                before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200
                after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" 
                type="checkbox" id="darkSwitch" checked={isDarkMode} onChange={handleThemeSwitch}>
                </input>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
                </svg>

            </div>
            <div className="flex flex-row justify-center gap-[1rem] items-center w-full pt-7 duration-300 sm:gap-[3rem] sm:duration-300">
                <div className="rounded-full border border-black dark:border-white">
                    <a href="https://www.linkedin.com/in/valeska-valentin-ekklesia/" target="_blank" rel="noreferrer">
                        <svg className="scale-[0.7] duration-[.2s] hover:scale-[0.8] hover:duration-[.2s] dark:invert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </div>
                <div className="rounded-full border border-black dark:border-white">
                    <a href="https://www.instagram.com/realbobomad/" target="_blank" rel="noreferrer">
                        <svg className="scale-[0.7] duration-[.2s] hover:scale-[0.8] hover:duration-[.2s] dark:invert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
                    </a>
                </div>
                <div className="rounded-full border border-black dark:border-white">
                    <a href="https://github.com/ValeskaLim" target="_blank" rel="noreferrer">
                        <svg className="scale-[0.7] duration-[.2s] hover:scale-[0.8] hover:duration-[.2s] dark:invert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </a>
                </div>
                <div className="rounded-full border border-black dark:border-white">
                    <a href="mailto: valeska.ekklesia@binus.ac.id" target="_blank" rel="noreferrer">
                        <svg className="scale-[0.7] duration-[.2s] hover:scale-[0.8] hover:duration-[.2s] dark:invert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"  viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-[1rem] items-center w-full pt-7 duration-300 sm:gap-[3rem] sm:duration-300">
                <a href="#">
                    <div className="flex gap-2 p-3 border border-black rounded-[1rem] items-center text-center 
                    duration-200 hover:scale-[1.02] hover:duration-200 hover:bg-gray-100 dark:border-white  
                    dark:hover:bg-black">
                        <h2 className="font-mono dark:text-white">Download my CV</h2>
                        <MdOutlineFileDownload  className="w-[1.5rem] h-[1.5rem] dark:text-white"/>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Profile;