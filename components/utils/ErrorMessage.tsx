import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode | null;
};

export default function ErrorMessage({ children }: Props) {
  const open = children != null;
  return (
    <div
      className={cn("grid transition-all", {
        "grid-rows-[0fr]": !open,
        "grid-rows-[1fr]": open,
      })}
    >
      <div
        className="overflow-hidden text-buttercup-400/80 text-sm"
        aria-hidden={!open}
      >
        {children != null ? <span>{children}</span> : null}
      </div>
    </div>
  );
}
