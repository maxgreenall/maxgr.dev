import { Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import confetti from "canvas-confetti";

function Hero({ onContactPress }: { onContactPress: () => void }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    handleConfetti();
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const handleConfetti = () => {
    const button = document.getElementById("confetti-button");

    if (button) {
      const buttonRect = button.getBoundingClientRect();
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;

      const scalar = 2;
      const shapes = confetti.shapeFromText({ text: "❤️", scalar });

      confetti({
        angle: randomInRange(45, 135),
        spread: 360,
        particleCount: randomInRange(20, 50),
        shapes: [shapes],
        scalar: scalar,
        origin: {
          x: buttonX / window.innerWidth,
          y: buttonY / window.innerHeight,
        },
      });
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-6">
      <h1 className="font-bold text-[2.5rem] lg:text-5xl text-center ">
        Hi I'm{" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Max
        </span>
      </h1>
      <h2 className="text-center text-xl max-w-xl text-gray-400">
        I'm a full stack engineer, building, hacking and breaking things.
      </h2>

      <div className="flex gap-3 justify-center">
        <Button
          size="lg"
          color="primary"
          variant="shadow"
          onClick={onContactPress}
        >
          Contact
        </Button>
        <Tooltip
          showArrow={true}
          color="danger"
          content={`Counter: ${counter}`}
        >
          <Button
            size="lg"
            isIconOnly
            aria-label="Like"
            color="danger"
            variant="flat"
            onClick={incrementCounter}
            id="confetti-button"
          >
            ❤️
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Hero;
