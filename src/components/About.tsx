const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center text-center w-full pt-[5rem] duration-300 md:px-[7rem] dark:duration-300">
                <h2 className="font-mono text-3xl pb-4 dark:text-white">About Me</h2>
                <div className="border rounded-[1rem] border-black p-4 dark:border-white">
                    <p className="text-left break-words font-mono dark:text-white">A <span className="font-bold">third year</span> computer science student pursuing <span className="font-bold">Software Engineering</span> at Bina Nusantara University. I like to <span className="font-bold">solve problems</span> both simple and complex. I love <span className="font-bold">Japanese things</span> especially anime. I also work <span className="font-bold">freelance</span> as a content creator on various social media platforms. Which now has 3 channels that I developed myself. I also love playing farming sim games ⛏️</p>
                </div>
            </div>
        </>
    );
}

export default About;