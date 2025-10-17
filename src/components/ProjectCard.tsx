import { ProjectType } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden border border-purple/20 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02]">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/5 transition-all duration-300 blur-xl" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/90 z-10 opacity-15" />
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple transition-colors">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-purple/20 text-purple rounded-full border border-purple/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        <Link
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple hover:text-purple-light transition-colors group/link"
        >
          <span className="font-semibold">View Project</span>
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
