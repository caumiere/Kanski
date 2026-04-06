"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { contactEmail } from "@/components/site-data";

type HeroItemPosition = {
  x: number;
  y: number;
};

type HeroItemSize = {
  width: number;
  height: number;
};

type HeroFloatingItem = {
  id: string;
  label: string;
  variant: "pill" | "circle" | "tag";
  initialPosition: {
    desktop: HeroItemPosition;
    mobile: HeroItemPosition;
  };
  size: {
    desktop: HeroItemSize;
    mobile: HeroItemSize;
  };
  rotation?: number;
  mobileHidden?: boolean;
};

const heroContent = {
  contact: "RESUME / COVER LETTER",
  descriptor: ["BROADCAST JOURNALISM SCHOLAR", "BASED TALLAHASSEE, FLORIDA"],
  title: "KANDON FEARS",
  subtitle: "Hi, I'm Kandon, and I focus on hosting, field reporting, and campus storytelling.",
  description:
    "I build clear, human-centered reporting through on-camera presentation, multimedia packages, and published journalism across video, web, and live coverage.",
};

const titleLines = ["KANDON", "FEARS"];

const heroItems: HeroFloatingItem[] = [
  {
    id: "tag-famu",
    label: "FAMU",
    variant: "tag",
    initialPosition: {
      desktop: { x: 28, y: 214 },
      mobile: { x: 16, y: 152 },
    },
    size: {
      desktop: { width: 184, height: 70 },
      mobile: { width: 132, height: 54 },
    },
  },
  {
    id: "circle-arrow",
    label: "↓",
    variant: "circle",
    initialPosition: {
      desktop: { x: 230, y: 196 },
      mobile: { x: 162, y: 140 },
    },
    size: {
      desktop: { width: 116, height: 116 },
      mobile: { width: 84, height: 84 },
    },
  },
  {
    id: "pill-host",
    label: "HOST",
    variant: "pill",
    initialPosition: {
      desktop: { x: 18, y: 320 },
      mobile: { x: 14, y: 236 },
    },
    size: {
      desktop: { width: 334, height: 82 },
      mobile: { width: 220, height: 60 },
    },
  },
  {
    id: "pill-field",
    label: "FIELD REPORTER",
    variant: "pill",
    initialPosition: {
      desktop: { x: 986, y: 154 },
      mobile: { x: 140, y: 214 },
    },
    size: {
      desktop: { width: 386, height: 80 },
      mobile: { width: 206, height: 54 },
    },
    rotation: -15,
    mobileHidden: true,
  },
  {
    id: "circle-star",
    label: "✱",
    variant: "circle",
    initialPosition: {
      desktop: { x: 1320, y: 318 },
      mobile: { x: 246, y: 182 },
    },
    size: {
      desktop: { width: 118, height: 118 },
      mobile: { width: 74, height: 74 },
    },
    mobileHidden: true,
  },
  {
    id: "tag-story",
    label: "STORYTELLER",
    variant: "tag",
    initialPosition: {
      desktop: { x: 1486, y: 352 },
      mobile: { x: 188, y: 276 },
    },
    size: {
      desktop: { width: 218, height: 68 },
      mobile: { width: 142, height: 50 },
    },
    mobileHidden: true,
  },
];

type DraggableHeroItemProps = {
  dragConstraints: React.RefObject<HTMLDivElement | null>;
  item: HeroFloatingItem;
};

function DraggableHeroItem({ dragConstraints, item }: DraggableHeroItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  const position = isDesktop ? item.initialPosition.desktop : item.initialPosition.mobile;
  const size = isDesktop ? item.size.desktop : item.size.mobile;
  const baseClass =
    item.variant === "circle"
      ? "rounded-full"
      : item.variant === "pill"
        ? "rounded-[999px] px-6 font-mono uppercase tracking-[0.16em]"
        : "rounded-[1.4rem] px-6 uppercase tracking-[0.08em]";
  const labelClass =
    item.variant === "circle"
      ? "text-[2.7rem] leading-none md:text-[4.4rem]"
      : item.variant === "pill"
        ? "text-[1.2rem] md:text-[1.7rem]"
        : "text-[1.15rem] md:text-[1.8rem]";

  return (
    <motion.div
      className={`absolute z-20 touch-none ${item.mobileHidden ? "hidden md:flex" : "flex"}`}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.14}
      dragMomentum
      dragTransition={{
        bounceDamping: 22,
        bounceStiffness: 280,
        power: 0.16,
        timeConstant: 220,
      }}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileDrag={{
        scale: 1.03,
        zIndex: 40,
        boxShadow: "0 20px 48px rgba(12, 22, 16, 0.28)",
      }}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        rotate: item.rotation ?? 0,
      }}
    >
      <motion.div
        className={`flex h-full w-full cursor-grab select-none items-center justify-center border border-[#ee7624]/30 bg-[rgba(24,68,43,0.82)] text-[#f5efe6] active:cursor-grabbing ${baseClass}`}
        whileHover={shouldReduceMotion ? undefined : { y: -2, borderColor: "rgba(238, 118, 36, 0.54)" }}
      >
        <span className={labelClass}>{item.label}</span>
      </motion.div>
    </motion.div>
  );
}

export function AkioHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dragBoundsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const floatingOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.82]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#18442b_0%,#123d24_100%)] text-[#f5efe6] md:rounded-[2.75rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(238,118,36,0.2),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />

      <div
        ref={dragBoundsRef}
        className="relative mx-auto min-h-[760px] w-full max-w-[1720px] px-5 pb-14 pt-6 sm:px-7 md:min-h-[840px] md:px-10 md:pb-20 md:pt-8 xl:px-14"
      >
        <div className="relative z-10 flex items-start justify-between gap-8 text-[0.92rem] uppercase tracking-[0.09em] text-[#e5d7c4]">
          <div className="min-w-0 font-medium">{heroContent.contact}</div>
          <div className="hidden items-start gap-6 md:flex">
            <span className="text-[#ee7624]">↳</span>
            <div className="max-w-[22rem] leading-[1.4]">
              {heroContent.descriptor.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
          <div className="h-10 w-10 rounded-full border border-[#ee7624]/55" />
        </div>

        <motion.div className="relative z-20" style={shouldReduceMotion ? undefined : { opacity: floatingOpacity }}>
          {heroItems.map((item) => (
            <DraggableHeroItem dragConstraints={dragBoundsRef} item={item} key={item.id} />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-5 top-34 z-0 hidden md:block xl:inset-x-14">
          <div className="flex items-center justify-between text-[0.84rem] uppercase tracking-[0.28em] text-[#f5efe6]/18">
            <span>Host</span>
            <span>Field Reporting</span>
            <span>Published Writing</span>
          </div>
        </div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: headingY }}
          className="relative z-10 mt-28 md:mt-40"
        >
          <div className="relative z-20 mb-10 ml-auto w-[min(82vw,22rem)] overflow-hidden rounded-[2rem] border border-[#ee7624]/35 bg-[rgba(10,19,14,0.32)] shadow-[0_24px_80px_rgba(8,14,11,0.36)] md:absolute md:right-4 md:top-2 md:mb-0 md:w-[clamp(18rem,28vw,25rem)] xl:right-10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,33,24,0.08),rgba(15,33,24,0.76))]" />
            <Image
              src="/images/kandon-headshot-2025.jpeg"
              alt="Kandon Fears in a black suit with an orange tie."
              width={1922}
              height={2325}
              priority
              sizes="(max-width: 767px) 82vw, (max-width: 1280px) 28vw, 25rem"
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-[#f5efe6]">
              <span className="text-[0.76rem] uppercase tracking-[0.28em] text-[#f3d6bf]">
                On-Camera Journalist
              </span>
              <a
                href={`mailto:${contactEmail}`}
                className="w-fit rounded-full border border-[#f5efe6]/30 bg-[rgba(12,24,17,0.58)] px-4 py-2 text-[0.82rem] font-medium tracking-[0.03em] transition hover:border-[#ee7624]/70 hover:bg-[#ee7624] hover:text-[#231f20]"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <h1
            id="hero-title"
            className="max-w-[1280px] font-semibold uppercase leading-[0.82] tracking-[-0.09em] text-[#f5efe6] md:max-w-[58rem] xl:max-w-[1280px]"
          >
            {titleLines.map((line) => (
              <span className="block text-[clamp(4.75rem,11vw,10rem)]" key={line}>
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: copyY }}
          className="relative z-10 mt-20 max-w-[36rem] space-y-5 md:ml-24 md:mt-24 md:max-w-[30rem]"
        >
          <p className="text-[clamp(1.45rem,2.4vw,2.2rem)] leading-[1.08] tracking-[-0.05em] text-[#f5efe6]">
            {heroContent.subtitle}
          </p>
          <p className="max-w-[31rem] text-[1rem] leading-[1.75] text-[#d9d0c3] md:text-[1.04rem]">
            {heroContent.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
