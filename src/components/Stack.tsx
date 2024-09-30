const Stack = () => {
    return (
        <div className="flex flex-col justify-center text-center w-full pt-[7rem] duration-300 md:px-[7rem] dark:duration-300">
            {/* Stack list */}
            <div className="">
                <h2 className="font-mono text-3xl pb-4 dark:text-white">My Stacks</h2>
                <div className="grid grid-cols-1 gap-5 pt-[2rem]"> 
                    <div className="grid grid-cols-3 gap-5 px-[4rem]">
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 px-[4rem]">
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                        <div className="bg-green-400 w-full h-[2rem]">1</div>
                    </div>
                </div>
            </div>
            {/* Current stack */}
            <div>

            </div>
        </div>
    );
}

export default Stack;