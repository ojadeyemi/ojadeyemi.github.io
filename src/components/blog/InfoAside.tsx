import { Info } from "lucide-react";

import type { ReactNode } from "react";

interface InfoAsideProps {
  children: ReactNode;
  title?: string;
}

export function InfoAside({ children, title }: InfoAsideProps) {
  return (
    <aside
      className="my-6 flex gap-3 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950"
      role="note"
      aria-label={title || "Information"}
    >
      <Info
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400"
        aria-hidden="true"
      />
      <div className="flex-1 space-y-2">
        {title && (
          <div className="font-semibold text-blue-900 dark:text-blue-200">
            {title}
          </div>
        )}
        <div className="text-sm text-blue-900 dark:text-blue-100">
          {children}
        </div>
      </div>
    </aside>
  );
}
