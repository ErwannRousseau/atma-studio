export const Marquee: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="z-10 w-full overflow-hidden before:absolute before:top-[-4px] before:h-2 before:w-[100%] before:backdrop-blur-xs after:absolute after:bottom-[-4px] after:h-2 after:w-[100%] after:backdrop-blur-xs">
      <div className="relative flex h-10 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-buttercup-300/60 before:blur-sm after:pointer-events-none after:absolute after:inset-0 after:left-auto after:z-10 after:w-32 after:bg-gradient-to-l after:from-buttercup-300/60 after:blur">
        <div className="flex w-max animate-marquee select-none [--duration:60s]">
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
