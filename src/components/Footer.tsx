import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-[5rem] flex flex-col items-center text-center justify-end pt-[2rem] md:px-[7rem]">
            <div className="flex flex-row text-center justify-center items-center w-full h-full gap-2 border-t-2">
                <FaRegCopyright className="hidden w-fit dark:text-white md:flex"/>
                <h2 className="font-mono dark:text-white">2024 Valeska Valentin Ekklesia. All Rights Reserved.</h2>
            </div>
        </div>
    );
}

export default Footer;