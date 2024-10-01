const Project = () => {
    return (
        <div className="flex flex-col justify-center text-center w-full pt-[7rem] duration-300 md:px-[7rem] dark:duration-300">
            <div className="flex justify-center items-center">
                <h2 className="font-mono text-3xl pb-4 dark:text-white">My Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 pt-[2rem] duration-200 font-mono sm:grid-cols-2 sm:duration-200 md:grid-cols-3 md:duration-200">
                <div className="p-4 bg-red-600 w-full h-fit">
                    <div>
                        <div className="bg-blue-600 w-full h-[7rem]">
                            Image here
                        </div>
                        <h1 className="text-center items-center">Name Project</h1>
                        <p className="text-center items-center break-words">Descripajduhauisduasduashdisahasidasidtion</p>
                    </div>
                </div>
                <div className="bg-red-600 w-full h-full">1</div>
                <div className="bg-red-600 w-full h-full">1</div>
                <div className="bg-red-600 w-full h-full">1</div>
                <div className="bg-red-600 w-full h-[12rem]">1</div>
                <div className="bg-red-600 w-full h-full">1</div>
            </div>
        </div>
    );
}

export default Project;