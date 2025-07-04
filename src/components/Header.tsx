import React, { useState } from "react";

import ThemeButton from "./ThemeButton";

const NO_OF_PHOTOS = 9;
const Header: React.FC = () => {
  const [order, setOrder] = useState<Array<number>>(
    Array.from({ length: NO_OF_PHOTOS }, (_, i) => i + 1),
  );

  const rotateOrder = () => {
    setOrder((prevOrder) => [...prevOrder.slice(1), prevOrder[0]]);
  };

  return (
    <section id="Header">
      <div className="flex h-36 flex-row items-end gap-x-4 md:gap-x-6 md:pt-1">
        <div className="relative h-fit w-28">
          {Array.from({ length: NO_OF_PHOTOS }).map((_, index) => (
            <button
              key={index}
              onClick={() => rotateOrder()}
              aria-label="Next Image"
            >
              <img
                src={`/profilepics/profile${index + 1}.jpg`}
                alt="profile"
                rel="preload"
                className={
                  order.indexOf(index + 1) === 0
                    ? "absolute bottom-0 left-0 z-10 animate-to-front rounded-3xl no-drag"
                    : order.indexOf(index + 1) === 1
                      ? "absolute bottom-0 left-0 translate-x-2 translate-y-2 rotate-3 transform animate-to-middle rounded-3xl opacity-50"
                      : order.indexOf(index + 1) === order.length - 1
                        ? "absolute bottom-0 left-0 z-0 translate-x-2 translate-y-2 rotate-3 transform animate-fade-out rounded-3xl opacity-0"
                        : "hidden"
                }
                width={85}
                height={85}
                onContextMenu={(e) => e.preventDefault()}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col pb-6">
          <span className="scroll-m-20 text-lg tracking-tight">OJ Adeyemi</span>
          <div className="flex items-center">
            <span className="mx-1 text-xs md:text-sm">
              Studying computer science
            </span>
            <ThemeButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
