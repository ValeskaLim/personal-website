import { FaHtml5, FaPython } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill, RiReactjsFill, RiJavaFill, RiNodejsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiTensorflow, SiJupyter, SiCsharp, SiDotnet, SiCss3 } from "react-icons/si";

const Project = () => {
    return (
        <div className="flex flex-col justify-center text-center w-full pt-[7rem] duration-300 md:px-[7rem] dark:duration-300">
            <div className="flex justify-center items-center">
                <h2 className="font-mono text-3xl pb-4 dark:text-white">My Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 pt-[2rem] duration-200 font-mono sm:grid-cols-2 sm:duration-200">
                <a href="https://github.com/ValeskaLim/BoboList" target="__blank">
                    <div className="p-5 w-full h-full border border-black rounded-[1rem] duration-200 dark:border-gray-100 dark:hover:bg-black hover:bg-gray-100 hover:duration-200">
                        <div className="duration-200 hover:duration-200 hover:scale-[1.01]">
                            <div className="max-w-full pb-3">
                                <img src="/public/BoboList.webp" className="max-w-full max-h-full" alt="Bobo List"/>
                            </div>
                            <h1 className="text-center items-center text-xl dark:text-white">Bobo List</h1>
                            <p className="text-center items-center break-words text-sm dark:text-white">Website that provides all mods that i've use in my videos</p>
                            <div className="flex gap-1 pt-[1rem]">
                                <FaHtml5 className="w-[2em] h-[2em] dark:text-white"/>
                                <RiTailwindCssFill className="w-[2em] h-[2em] dark:text-white"/>
                                <RiJavascriptFill className="w-[2em] h-[2em] dark:text-white"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ValeskaLim/personal-website" target="__blank">
                    <div className="p-5 w-full h-full relative border border-black rounded-[1rem] duration-200 dark:border-gray-100 dark:hover:bg-black hover:bg-gray-100 hover:duration-200">
                        <div className="h-fit duration-200 hover:duration-200 hover:scale-[1.01]">
                            <div className="pb-3">
                                <img src="/public/Bobsite.webp" className="aspect-video max-w-full max-h-full" alt="Bobsite"/>
                            </div>
                            <h1 className="text-center items-center text-xl dark:text-white">BobSite</h1>
                            <p className="text-center items-center break-words text-sm dark:text-white">Personal web that contains information about the developer related to technology, projects developed</p>
                            <div className="flex gap-1 pt-[1rem]">
                                <FaHtml5 className="w-[2em] h-[2em] dark:text-white"/>
                                <RiTailwindCssFill className="w-[2em] h-[2em] dark:text-white"/>
                                <RiReactjsFill className="w-[2em] h-[2em] dark:text-white"/>
                                <BiLogoTypescript className="w-[2em] h-[2em] dark:text-white"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ValeskaLim/999-Max-Count-Size-Item-Fabric" target="__blank">
                    <div className="p-5 w-full h-full relative border border-black rounded-[1rem] duration-200 dark:border-gray-100 dark:hover:bg-black hover:bg-gray-100 hover:duration-200">
                        <div className="h-fit duration-200 hover:duration-200 hover:scale-[1.01]">
                            <div className="pb-3">
                                <img src="/public/999 Stack Mod.webp" className="aspect-video max-w-full max-h-full" alt="999 Stack Mod"/>
                            </div>
                            <h1 className="text-center items-center text-xl dark:text-white">999 Stack Mod</h1>
                            <p className="text-center items-center break-words text-sm dark:text-white">Mods that allow you to stack items up to 999. Built using Fabric</p>
                            <div className="flex gap-1 pt-[1rem]">
                                <RiJavaFill className="w-[2em] h-[2em] dark:text-white"/>
                                <img className="w-[2em] h-[2em]" src="https://media.forgecdn.net/avatars/thumbnails/185/822/256/256/636829723898798601.png"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ValeskaLim/LearnBoost-Question-Bank-Application" target="__blank">
                    <div className="p-5 w-full h-full relative border border-black rounded-[1rem] duration-200 dark:border-gray-100 dark:hover:bg-black hover:bg-gray-100 hover:duration-200">
                        <div className="h-fit duration-200 hover:duration-200 hover:scale-[1.01]">
                            <div className="pb-3">
                                <img src="/public/LearnBoost.webp" className="aspect-video max-w-full max-h-full" alt="LearnBoost"/>
                            </div>
                            <h1 className="text-center items-center text-xl dark:text-white">LearnBoost</h1>
                            <p className="text-center items-center break-words text-sm dark:text-white">A learning website that provides various question banks for college entrance exams</p>
                            <div className="flex gap-1 pt-[1rem]">
                                <FaHtml5 className="w-[2em] h-[2em] dark:text-white"/>
                                <RiTailwindCssFill className="w-[2em] h-[2em] dark:text-white"/>
                                <RiJavascriptFill className="w-[2em] h-[2em] dark:text-white"/>
                                <RiNodejsFill className="w-[2em] h-[2em] dark:text-white"/>
                                <SiExpress className="w-[2em] h-[2em] dark:text-white"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ValeskaLim/Facial-Emotion-Recognition" target="__blank">
                    <div className="p-5 w-full h-full relative border border-black rounded-[1rem] duration-200 dark:border-gray-100 dark:hover:bg-black hover:bg-gray-100 hover:duration-200">
                        <div className="h-fit duration-200 hover:duration-200 hover:scale-[1.01]">
                            <div className="pb-3">
                                <img src="/public/FaceRecognition.webp" className="aspect-video max-w-full max-h-full" alt="Face Recognition"/>
                            </div>
                            <h1 className="text-center items-center text-xl dark:text-white">Face Recognition</h1>
                            <p className="text-center items-center break-words text-sm dark:text-white">A machine learning model that can detect a person's facial expression from an image</p>
                            <div className="flex gap-1 pt-[1rem]">
                                <FaPython className="w-[2em] h-[2em] dark:text-white"/>
                                <SiTensorflow className="w-[2em] h-[2em] dark:text-white"/>
                                <SiJupyter className="w-[2em] h-[2em] dark:text-white"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ValeskaLim/MakeMeUpzz" target="__blank">
                    <div className="p-5 w-full h-full relative border border-black rounded-[1rem] duration-200 dark:border-gray-100 dark:hover:bg-black hover:bg-gray-100 hover:duration-200">
                        <div className="h-fit duration-200 hover:duration-200 hover:scale-[1.01]">
                            <div className="pb-3">
                                <img src="/public/MakeMeUpzz.webp" className="aspect-video max-w-full max-h-full" alt="MakeMeUpzz"/>
                            </div>
                            <h1 className="text-center items-center text-xl dark:text-white">MakeMeUpzz</h1>
                            <p className="text-center items-center break-words text-sm dark:text-white">web-based application designed for selling makeup and skincare products.</p>
                            <div className="flex gap-1 pt-[1rem]">
                                <SiCsharp className="w-[2em] h-[2em] dark:text-white"/>
                                <SiDotnet className="w-[2em] h-[2em] dark:text-white"/>
                                <SiCss3 className="w-[2em] h-[2em] dark:text-white"/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Project;