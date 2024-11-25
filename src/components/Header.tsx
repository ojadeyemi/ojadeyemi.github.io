import React, { useState } from "react";

import ThemeButton from "./ThemeButton";

const Header: React.FC = () => {
  const [order, setOrder] = useState<Array<number>>(
    Array.from({ length: 4 }, (_, i) => i + 1),
  );

  const rotateOrder = () => {
    const temp = [...order];
    temp.push(temp.shift() as number);
    setOrder(temp);
  };

  return (
    <section id="Header">
      <div className="mt-10 flex h-36 flex-row items-end gap-x-8 md:pt-1">
        <div className="relative h-fit w-24">
          {Array.from({ length: 12 }).map((_, index) => (
            <button key={index} onClick={() => rotateOrder()}>
              <img
                src={`/profile${index + 1}.jpg`}
                alt="profile"
                className={
                  order.indexOf(index + 1) === 0
                    ? "absolute bottom-0 left-0 z-10 animate-to-front rounded-3xl"
                    : order.indexOf(index + 1) === 1
                      ? "absolute bottom-0 left-0 translate-x-2 translate-y-2 rotate-3 transform animate-to-middle rounded-3xl opacity-50"
                      : order.indexOf(index + 1) === order.length - 1
                        ? "absolute bottom-0 left-0 z-0 translate-x-2 translate-y-2 rotate-3 transform animate-fade-out rounded-3xl opacity-0"
                        : "hidden"
                }
                width={80} // Adjusted width to avoid large images affecting performance
                height={80} // Adjusted height to match the width
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col pb-8">
          <span className="scroll-m-20 text-lg tracking-tight">OJ Adeyemi</span>
          <div className="flex items-center">
            <span className="text-sm">Software Engineer</span>
            <ThemeButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
