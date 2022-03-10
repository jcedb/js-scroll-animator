import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TTarget = string | HTMLElement | Element | null;

interface ISettings {
  trigger?: TTarget;
  pin?: boolean;
  ease?: string | gsap.EaseFunction;
  scrub?: boolean;
  stagger?: number;
  duration?: number;
  start?: string | number;
  end?: string | number;
  once?: boolean;
  toggleClass?: string | any;
  markers?: boolean;
  animate?: gsap.CSSProperties;
  onToggle?: (...args: any) => void;
}

export const jsScrollAnimator = (
  target: TTarget,
  {
    trigger,
    pin,
    ease,
    scrub,
    stagger,
    duration = 1,
    start = 'top top',
    end = 'bottom bottom',
    once,
    toggleClass,
    markers,
    animate,
    onToggle
  }: ISettings
) => {
  window.onload = () => {
    gsap.to(target, {
      ...animate,
      ease,
      stagger,
      duration,
      scrollTrigger: {
        trigger,
        pin,
        scrub,
        start,
        end,
        once,
        toggleClass,
        markers,
        onToggle
      }
    });
  };
};
