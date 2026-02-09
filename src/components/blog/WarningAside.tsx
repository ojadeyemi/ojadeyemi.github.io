import { AlertTriangle } from "lucide-react";

import type { ReactNode } from "react";

interface WarningAsideProps {
  children: ReactNode;
  title?: string;
}

export function WarningAside({ children, title }: WarningAsideProps) {
  return (
    <aside
      className="my-6 flex gap-3 rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950"
      role="note"
      aria-label={title || "Warning"}
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400"
        aria-hidden="true"
      />
      <div className="flex-1 space-y-2">
        {title && (
          <div className="font-semibold text-yellow-900 dark:text-yellow-200">
            {title}
          </div>
        )}
        <div className="text-sm text-yellow-900 dark:text-yellow-100">
          {children}
        </div>
      </div>
    </aside>
  );
}
