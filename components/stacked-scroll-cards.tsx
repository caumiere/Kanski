"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export type StackedScrollCardItem = {
  id: string;
  title: string;
  category: string;
  image?: string;
  href: string;
  alt?: string;
  blurb?: string;
};

type StackedScrollCardsProps = {
  cards: StackedScrollCardItem[];
};

function ScrollCardLayer({
  card,
  index,
  progress,
  total,
}: {
  card: StackedScrollCardItem;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const step = total > 1 ? 1 / (total - 1) : 1;
  const enterAt = index === 0 ? 0 : (index - 1) * step;
  const focusAt = index * step;
  const exitAt = index === total - 1 ? 1 : (index + 1) * step;

  const opacity = useTransform(
    progress,
    [enterAt, focusAt, exitAt],
    [index === 0 ? 1 : 0, 1, index === total - 1 ? 1 : 0],
  );
  const y = useTransform(progress, [enterAt, focusAt, exitAt], [index === 0 ? 0 : 120, 0, index === total - 1 ? 0 : -120]);
  const scale = useTransform(progress, [enterAt, focusAt, exitAt], [index === 0 ? 1 : 0.965, 1, index === total - 1 ? 1 : 0.985]);
  const imageScale = useTransform(progress, [enterAt, focusAt, exitAt], [1.08, 1, index === total - 1 ? 1 : 1.03]);

  return (
    <motion.article
      className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#121314] shadow-[0_30px_120px_rgba(0,0,0,0.28)]"
      style={{
        opacity: shouldReduceMotion ? 1 : opacity,
        scale: shouldReduceMotion ? 1 : scale,
        y: shouldReduceMotion ? 0 : y,
        zIndex: index + 1,
      }}
    >
      <div className="absolute inset-0">
        {card.image ? (
          <motion.img
            alt={card.alt ?? card.title}
            className="h-full w-full object-cover"
            src={card.image}
            style={{ scale: shouldReduceMotion ? 1 : imageScale }}
          />
        ) : (
          <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_20%_20%,rgba(238,118,36,0.26),transparent_18%),linear-gradient(180deg,#1b1c1f_0%,#0e0f11_100%)] p-8 md:p-12">
            <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg">{card.blurb}</p>
          </div>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.06)_0%,rgba(5,5,6,0.22)_52%,rgba(5,5,6,0.88)_100%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
        <div className="mb-5 h-px bg-white/18" />
        <div className="grid grid-cols-[64px_minmax(0,1fr)] items-end gap-4 md:grid-cols-[90px_minmax(0,1fr)] md:gap-6">
          <span className="text-[2.6rem] font-light leading-none tracking-[-0.08em] text-white md:text-[4.6rem]">
            {card.id}
          </span>
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-[0.78rem] uppercase tracking-[0.22em] text-white/58 md:text-[0.84rem]">
                {card.title}
              </p>
              <h3 className="max-w-[12ch] text-[1.6rem] font-normal leading-[0.96] tracking-[-0.06em] text-white md:text-[3.25rem]">
                {card.category}
              </h3>
            </div>
            <div className="hidden text-[0.84rem] uppercase tracking-[0.22em] text-white/42 md:block">
              Scroll to reveal
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function StackedScrollCards({ cards }: StackedScrollCardsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(cards.length - 1, Math.max(0, Math.round(latest * (cards.length - 1))));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section className="relative -mx-[28px] h-[340vh] md:-mx-[28px]" ref={sectionRef}>
      <div className="sticky top-0 h-screen">
        <Link
          aria-label={`Open ${cards[activeIndex]?.title ?? "project"}`}
          className="absolute inset-0 z-30"
          href={cards[activeIndex]?.href ?? "/work"}
        />

        <div className="relative h-full overflow-hidden bg-[#0b0c0d]">
          {cards.map((card, index) => (
            <ScrollCardLayer
              card={card}
              index={index}
              key={card.href}
              progress={scrollYProgress}
              total={cards.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
