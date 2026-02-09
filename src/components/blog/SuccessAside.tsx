import { CheckCircle } from "lucide-react";

import type { ReactNode } from "react";

interface SuccessAsideProps {
  children: ReactNode;
  title?: string;
}

export function SuccessAside({ children, title }: SuccessAsideProps) {
  return (
    <aside
      className="my-6 flex gap-3 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950"
      role="note"
      aria-label={title || "Success"}
    >
      <CheckCircle
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
        aria-hidden="true"
      />
      <div className="flex-1 space-y-2">
        {title && (
          <div className="font-semibold text-green-900 dark:text-green-200">
            {title}
          </div>
        )}
        <div className="text-sm text-green-900 dark:text-green-100">
          {children}
        </div>
      </div>
    </aside>
  );
}
