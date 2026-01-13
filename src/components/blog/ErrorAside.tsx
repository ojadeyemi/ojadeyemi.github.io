import { XCircle } from "lucide-react";

import type { ReactNode } from "react";

interface ErrorAsideProps {
  children: ReactNode;
  title?: string;
}

export function ErrorAside({ children, title }: ErrorAsideProps) {
  return (
    <aside
      className="my-6 flex gap-3 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950"
      role="alert"
      aria-label={title || "Error"}
    >
      <XCircle
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
        aria-hidden="true"
      />
      <div className="flex-1 space-y-2">
        {title && (
          <div className="font-semibold text-red-900 dark:text-red-200">
            {title}
          </div>
        )}
        <div className="text-sm text-red-900 dark:text-red-100">{children}</div>
      </div>
    </aside>
  );
}
