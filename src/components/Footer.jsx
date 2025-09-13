// components/Footer.jsx
import { Github, Linkedin } from 'lucide-react';
import { LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Tu Yin Hnit Aung. Built with Next.js & Tailwind CSS
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:tuyinhnitaung@email.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Say hello
            </a>
            <div className="flex gap-3">
              <a href={LINKS.github} target="_blank" rel="noreferrer" 
                 className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}