import { Button } from "@nextui-org/react";
import { useState } from "react";
import confetti from 'canvas-confetti';

function Hero(){
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
        handleConfetti();
    };

    function randomInRange(min:number, max:number) {
        return Math.random() * (max - min) + min;
    }
    
    const button = document.getElementById('confetti-button');
    const handleConfetti = () => {
        if (button) {
            const buttonRect = button.getBoundingClientRect();
            const buttonX = buttonRect.left + (buttonRect.width / 2);
            const buttonY = buttonRect.top + (buttonRect.height / 2);

            confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { x: buttonX / window.innerWidth, y: buttonY / window.innerHeight }
            });
        }
    };

    return(
        <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-[2.5rem] lg:text-5xl text-center ">
                Hi I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Max</span>
            </h1>
            <h2 className="text-center text-xl text-gray-400">I'm a full stack web develioper specializing in Blazor, proficient in both front and back-end development.</h2>

            <div className="flex gap-3 justify-center">
                <Button size="lg" color="primary" variant="shadow">Contact</Button>
                <Button size="lg" isIconOnly aria-label="Like" variant="flat" onClick={incrementCounter} id="confetti-button">
                    🎉
                </Button>
            </div>
        </div>
    )
}

export default Hero;