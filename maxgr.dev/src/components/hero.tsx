import { Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

function Hero(){
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return(
        <div className="h-screen flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-[2.5rem] lg:text-5xl">
                Hi I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Max</span>
            </h1>
            <h2 className=" text-gray-400">I'm a full stack web developer</h2>

            <div className="flex gap-3 justify-center">
                <Button size="lg" color="primary" variant="shadow">Contact</Button>
                <Tooltip content={`Thumbs up count: ${counter}`}>
                    <Button size="lg" isIconOnly aria-label="Like" variant="flat" onClick={incrementCounter}>
                        👍
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default Hero;