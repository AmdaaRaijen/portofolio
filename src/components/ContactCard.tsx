import { ContactItem } from "@/types/Contact";
import Link from "next/link";

export const ContactCard = ({ contact }: { contact: ContactItem }) => {
  return (
    <Link
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-purple/20 hover:border-purple/50 transition-all duration-300 hover:scale-105"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/10 transition-all duration-300 blur-xl rounded-2xl" />

      <div className="relative space-y-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple/20 text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300">
          {contact.icon}
        </div>

        <h3 className="text-2xl font-bold text-white group-hover:text-purple transition-colors">
          {contact.name}
        </h3>

        <p className="text-white/70 font-mono text-sm">{contact.username}</p>

        <p className="text-white/50 text-sm">{contact.description}</p>

        <div className="flex justify-center">
          <svg
            className="w-5 h-5 text-purple group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </Link>
  );
};
