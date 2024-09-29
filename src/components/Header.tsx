import React, { useEffect, useState, useRef } from "react";

async function typeSentence(sentence: string, eleRef: React.RefObject<HTMLElement>, delay = 130) {
    if(!eleRef.current) return;
    
    eleRef.current.textContent = "";
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitforMs(delay);
      eleRef.current.textContent += letters[i];
      i++;
    }
    return;
}
  
function waitforMs(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Header = () => {
    const sentenceRef = useRef(null);
    const [isTypingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        if(!isTypingStarted) {
            const sentence = "Software Engineer";
            typeSentence(sentence, sentenceRef);
            setTypingStarted(true);
        }
    }, [isTypingStarted]);

    return (
        <>
            <div className="grid grid-cols-1 h-fit gap-5 sm:grid-cols-2 pt-4 w-full duration-300 dark:text-white dark:duration-300">
                <div className="flex text-center sm:text-left">
                    <h1 className="text-5xl font-mono">Valeska Valentin Ekklesia</h1>
                </div>
                <div className="flex justify-start text-center items-center m-auto sm:justify-end sm:text-right sm:m-0">
                    <span ref={sentenceRef} id="sentence" className="text-3xl font-mono font-bold inline-block ml-2"></span>
                    <span className="inline-block w-[4px] h-[35px] bg-black ml-2 animate-[blink_.6s_linear_infinite_alternate] dark:bg-white"></span>
                </div>
            </div>
        </>
    );
};

export default Header;