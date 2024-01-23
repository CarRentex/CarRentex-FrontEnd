import { ComponentPropsWithoutRef,useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useOnRevealed from "./useOnRevealed";

const AnimateReveal = ({
  direction = "from-bottom",
  className,
  children,
  delay,
  disableAnimation = false,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  direction?: "from-bottom" | "from-left" | "from-right";
  delay?: number;
  disableAnimation?: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const revealed = useOnRevealed(ref);

  const startAnimation = () => {
    const refCurrent = ref.current;
    if (revealed && !disableAnimation && refCurrent) {
      const classList = refCurrent.classList;
      classList.add(
        direction === "from-left"
          ? "animate-revealFromLeft"
          : direction === "from-right"
            ? "animate-revealFromRight"
            : "animate-revealFromBottom"
      );
    }
  };

  useEffect(() => {
    // Sayfa yüklendiğinde başlangıç animasyonu kontrolü
    startAnimation();

    // Eleman ilk kez görüldüğünde ve animasyon devre dışı değilse
    if (revealed && !disableAnimation && ref.current) {
      // IntersectionObserver başlat
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // Animasyonu başlat
          startAnimation();
          // Observer'ı durdur
          observer.disconnect();
        }
      });
      
      observer.observe(ref.current);

      // Component unmount olduğunda Observer'ı temizle
      return () => {
        observer.disconnect();
      };
    }
  }, [revealed, disableAnimation, direction]);

  return (
    <div
      ref={ref}
      className={twMerge(
        !disableAnimation && revealed &&
          (direction === "from-left"
            ? "animate-revealFromLeft"
            : direction === "from-right"
              ? "animate-revealFromRight"
              : "animate-revealFromBottom"),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimateReveal;
