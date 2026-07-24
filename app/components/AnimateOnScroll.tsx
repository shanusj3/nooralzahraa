'use client';

import React, { useEffect, useRef } from 'react';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: 'animate-on-scroll' | 'animate-from-left' | 'animate-from-right';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500' | 'delay-600';
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'animate-on-scroll',
  delay = undefined,
  threshold = 0.15,
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el); // animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = [animation, delay ?? '', className].filter(Boolean).join(' ');

  return (
    // @ts-ignore
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
