"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import MousePosition from "./utils/mouse-position";

type HighlighterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Highlighter({
  children,
  className = "",
}: HighlighterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = MousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    containerRef.current &&
      setBoxes(
        Array.from(containerRef.current.children).map(
          (el) => el as HTMLElement,
        ),
      );
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [setBoxes]);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        for (const box of boxes) {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        }
      }
    }
  };

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

type HighlighterItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function HighlighterItem({
  children,
  className = "",
}: HighlighterItemProps) {
  return (
    <div
      className={cn(
        "before:-left-48 before:-top-48 relative h-full overflow-hidden rounded-3xl p-px before:pointer-events-none after:absolute before:absolute after:inset-0 after:z-10 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] after:rounded-[inherit] before:rounded-full before:bg-buttercup-100 after:group-hover:opacity-100 after:opacity-0 before:hover:opacity-20 before:opacity-0 before:blur-[100px] after:transition-opacity before:transition-opacity after:duration-500 before:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
