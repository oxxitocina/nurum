import { ReactElement, ReactNode } from "react";
import { Fade, Slide } from "react-awesome-reveal";

interface AnimationProps {
  children: ReactNode;
}

export const Animation = ({ children }: AnimationProps) => {
  return (
    <Slide direction="up" cascade triggerOnce>
      <Fade
        delay={300} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        triggerOnce // Only animate once
        fraction={0.5}
      >
        {children}
      </Fade>
    </Slide>
  );
};
