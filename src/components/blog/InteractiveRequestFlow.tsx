"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    label: "User opens app",
    icon: "👤",
    description: "User launches the PWA on their device",
  },
  {
    id: 2,
    label: "CDN serves shell",
    icon: "🌐",
    description: "Edge CDN delivers the cached PWA shell instantly",
  },
  {
    id: 3,
    label: "Check Redis cache",
    icon: "⚡",
    description: "API request checks Redis for cached data",
  },
  {
    id: 4,
    label: "Query database",
    icon: "🗄️",
    description: "Cache miss triggers PostgreSQL query",
  },
  {
    id: 5,
    label: "Normalize response",
    icon: "📦",
    description: "Data is normalized to unified schema",
  },
  {
    id: 6,
    label: "UI updates",
    icon: "✨",
    description: "Fresh data renders in the interface",
  },
];

export function InteractiveRequestFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setActiveStep(null);

    await new Promise((resolve) => setTimeout(resolve, 300));

    for (let i = 0; i < steps.length; i++) {
      setActiveStep(steps[i].id);
      await new Promise((resolve) => setTimeout(resolve, 700));
    }

    await new Promise((resolve) => setTimeout(resolve, 800));
    setActiveStep(null);
    setIsPlaying(false);
  };

  const getStepState = (stepId: number) => {
    if (activeStep === null) return "idle";
    if (activeStep === stepId) return "active";
    if (activeStep > stepId) return "completed";
    return "idle";
  };

  return (
    <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 sm:text-sm">
          Request → Response Flow
        </span>
        <button
          onClick={playAnimation}
          disabled={isPlaying}
          className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:px-4 sm:py-2 sm:text-sm"
        >
          {isPlaying ? "Playing..." : "Play Flow"}
        </button>
      </div>

      <div className="relative pb-16 sm:pb-12">
        {/* Progress line background */}
        <div className="absolute left-5 top-5 h-[calc(100%-5rem)] w-0.5 bg-zinc-200 dark:bg-zinc-700 sm:left-0 sm:right-0 sm:top-5 sm:mx-auto sm:h-0.5 sm:w-[calc(100%-4rem)]" />

        {/* Animated progress line */}
        <div
          className="absolute left-5 top-5 h-[calc((100%_-_5rem)*var(--progress))] w-0.5 bg-blue-500 transition-all duration-500 ease-in-out dark:bg-blue-400 sm:left-0 sm:right-0 sm:top-5 sm:mx-auto sm:h-0.5 sm:w-[calc((100%_-_4rem)*var(--progress))]"
          style={
            {
              "--progress": activeStep ? activeStep / steps.length : 0,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any
          }
        />

        {/* Steps */}
        <div className="relative flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-2">
          {steps.map((step) => {
            const state = getStepState(step.id);
            const isActive = state === "active";
            const isCompleted = state === "completed";

            return (
              <div
                key={step.id}
                className="group relative flex items-start gap-3 sm:flex-1 sm:flex-col sm:items-center sm:gap-2"
                onMouseEnter={() => !isPlaying && setActiveStep(step.id)}
                onMouseLeave={() => !isPlaying && setActiveStep(null)}
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-base transition-all duration-200 ease-out sm:h-10 sm:w-10 ${
                    isActive
                      ? "scale-110 border-blue-500 bg-blue-500 shadow-md shadow-blue-500/25"
                      : isCompleted
                        ? "border-green-500 bg-green-500"
                        : "border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800"
                  }`}
                >
                  <span className="transition-transform duration-200">
                    {step.icon}
                  </span>
                </div>

                {/* Label and description container - fixed height to prevent layout shift */}
                <div className="flex min-h-[3rem] min-w-0 flex-1 flex-col sm:min-h-[4rem] sm:items-center">
                  <span
                    className={`text-xs font-medium leading-tight transition-colors duration-200 sm:text-center sm:text-sm ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {step.label}
                  </span>

                  {/* Description - absolutely positioned to avoid layout shift */}
                  <div className="relative mt-1 w-full">
                    <p
                      className={`text-xs leading-snug text-zinc-500 transition-opacity duration-200 dark:text-zinc-400 sm:text-center ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p
        className={`text-center text-xs transition-opacity duration-200 ${
          isPlaying
            ? "text-zinc-300 dark:text-zinc-600"
            : "text-zinc-400 dark:text-zinc-500"
        }`}
      >
        {isPlaying ? "Animating..." : "Hover over steps or click Play"}
      </p>
    </div>
  );
}
