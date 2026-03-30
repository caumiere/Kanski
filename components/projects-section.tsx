"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export type ProjectCardItem = {
  year: string;
  category: string;
  title: string;
  image?: string;
  href: string;
  alt?: string;
};

type ProjectsSectionProps = {
  projects: ProjectCardItem[];
};

const cardThemes = [
  {
    shell: "bg-[#ee7624] text-[#231f20] border-[#231f20]/18",
    meta: "text-[#231f20]/80 border-[#231f20]/18",
    arrow: "text-[#231f20]",
    fallback: "bg-[radial-gradient(circle_at_25%_20%,rgba(245,239,230,0.26),transparent_22%),linear-gradient(180deg,rgba(193,88,20,0.35),rgba(238,118,36,0.95))]",
  },
  {
    shell: "bg-[#f5efe6] text-[#231f20] border-[#231f20]/12",
    meta: "text-[#2a2728]/70 border-[#231f20]/12",
    arrow: "text-[#231f20]",
    fallback: "bg-[radial-gradient(circle_at_30%_18%,rgba(27,86,51,0.18),transparent_22%),linear-gradient(180deg,rgba(240,233,221,0.96),rgba(227,219,206,0.98))]",
  },
  {
    shell: "bg-[#173c28] text-[#f5efe6] border-white/12",
    meta: "text-[#f5efe6]/70 border-white/12",
    arrow: "text-[#f5efe6]",
    fallback: "bg-[radial-gradient(circle_at_25%_18%,rgba(238,118,36,0.2),transparent_20%),linear-gradient(180deg,rgba(33,83,54,0.96),rgba(18,61,36,1))]",
  },
];

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 84 84"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 64 64 20M31 20h33v33"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="6"
      />
    </svg>
  );
}

function ProjectMedia({
  image,
  alt,
  fallbackClassName,
  title,
}: {
  image?: string;
  alt?: string;
  fallbackClassName: string;
  title: string;
}) {
  if (image) {
    return (
      <img
        alt={alt ?? title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        src={image}
      />
    );
  }

  return (
    <div className={`flex h-full w-full items-end p-6 sm:p-8 ${fallbackClassName}`}>
      <span className="text-[0.9rem] uppercase tracking-[0.22em] opacity-70">Editorial preview</span>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: ProjectCardItem;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const theme = cardThemes[index % cardThemes.length];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <Link
        className={`group block rounded-[2rem] border p-4 shadow-[0_24px_60px_rgba(10,18,12,0.14)] transition-transform duration-300 ease-out sm:p-6 ${theme.shell}`}
        href={project.href}
      >
        <motion.div whileHover={shouldReduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.24, ease: "easeOut" }}>
          <div className={`flex items-center justify-between gap-4 border-b pb-3 text-[0.9rem] tracking-[-0.02em] ${theme.meta}`}>
            <span>{project.year}</span>
            <span className="text-right">{project.category}</span>
          </div>

          <div className="flex items-start justify-between gap-6 py-5 sm:py-7">
            <h3 className="max-w-[70%] text-[clamp(2.8rem,6vw,5.8rem)] font-normal leading-[0.92] tracking-[-0.08em] lowercase">
              {project.title.toLowerCase()}
            </h3>
            <ArrowIcon className={`mt-1 h-10 w-10 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-14 sm:w-14 ${theme.arrow}`} />
          </div>

          <div className="overflow-hidden rounded-[1.45rem]">
            <div className="aspect-[16/11] min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[440px]">
              <ProjectMedia
                alt={project.alt}
                fallbackClassName={theme.fallback}
                image={project.image}
                title={project.title}
              />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="relative pb-6 pt-2">
      {projects.map((project, index) => (
        <div
          className="relative"
          key={project.href}
          style={{
            marginTop: index === 0 ? 0 : "clamp(-11rem, -9vw, -5rem)",
            zIndex: projects.length - index,
          }}
        >
          <ProjectCard index={index} project={project} />
        </div>
      ))}
    </div>
  );
}
