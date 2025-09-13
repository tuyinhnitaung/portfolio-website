// src/app/page.jsx
"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Highlight from "@/components/Highlight";
import { Github, Linkedin, Code2, Palette, Database, Cloud, Settings } from 'lucide-react';
import { PROFILE, SKILLS, LINKS, PROJECTS } from "@/data/site";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* Home */}
        <section
          id="home"
          className="min-h-screen flex items-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >
          <div className="grid items-center gap-10 md:grid-cols-2 w-full">
            <div>
              <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Hello, I’m <Highlight delay={300} colorClass="highlight-1">Tu Yin</Highlight>!
              </h1>
              <p className="mt-5 max-w-prose text-muted-foreground text-base">
                I’m a Computer Programming and Analysis student who loves diving into all kinds of <Highlight delay={300} colorClass="highlight-2">tech</Highlight>. 
                <br /><br />
                I’m building a <Highlight delay={600} colorClass="highlight-3">diverse</Highlight> skill set that spans <Highlight delay={900} colorClass="highlight-2">web</Highlight> development, <Highlight delay={1200} colorClass="highlight-1">software engineering</Highlight>, and <Highlight delay={1500} colorClass="highlight-3">data science</Highlight>. 
                <br /><br />
                I thrive on being <Highlight delay={1800} colorClass="highlight-1">adaptable</Highlight> and learning new technologies, always looking for opportunities to apply both my technical skills and <Highlight delay={2100} colorClass="highlight-2">analytical</Highlight> mindset to solve real-world problems.
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm">
                <a 
                  href={LINKS.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg bg-black text-white border-2 border-black px-3 py-2 hover:bg-gray-800 hover:border-gray-800 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href={LINKS.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="order-first -mt-4 md:order-none md:mt-0">
              <div className="mx-auto w-80 h-80 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-picture.jpg"
                  alt="Tu Yin Hnit Aung"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4"><Highlight delay={600} colorClass="highlight-1">Skills</Highlight> & <Highlight delay={600} colorClass="highlight-2">Technologies</Highlight></h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(SKILLS).slice(0, 3).map(([category, skills], index) => {
              let IconComponent;
              let highlightClass;
              let delay;
              
              if (category === "Programming Languages") {
                IconComponent = Code2;
                highlightClass = "highlight-1";
                delay = 800;
              }
              else if (category === "Frontend") {
                IconComponent = Palette;
                highlightClass = "highlight-2";
                delay = 1000;
              }
              else if (category === "Backend & Databases") {
                IconComponent = Database;
                highlightClass = "highlight-3";
                delay = 1200;
              }
              
              return (
                <div key={category} className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-black shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
                    <IconComponent size={20} />
                    <Highlight delay={delay} colorClass={highlightClass}>{category}</Highlight>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-full text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {Object.entries(SKILLS).slice(3).map(([category, skills]) => {
              let IconComponent;
              let highlightClass;
              let delay;
              
              if (category === "Cloud & DevOps") {
                IconComponent = Cloud;
                highlightClass = "highlight-1";
                delay = 1400;
              }
              else if (category === "Tools & Project Management") {
                IconComponent = Settings;
                highlightClass = "highlight-2";
                delay = 1600;
              }
              
              return (
                <div key={category} className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-black shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
                    <IconComponent size={20} />
                    <Highlight delay={delay} colorClass={highlightClass}>{category}</Highlight>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-full text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border p-5 hover:shadow-md transition-shadow"
              >
                {p.thumb && (
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                )}
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-sm">
                  {p.repo && (
                    <a
                      className="underline underline-offset-4"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      className="underline underline-offset-4"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Let’s <Highlight delay={600} colorClass="highlight-1">Connect</Highlight>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I’m always open to discussing new opportunities, collaborations, or just having a chat about tech. 
              Feel free to reach out!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Email */}
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-black shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Highlight delay={800} colorClass="highlight-2">Email Me</Highlight>
                </h3>
                <p className="text-muted-foreground mb-4">Best way to reach me directly</p>
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  {PROFILE.email}
                </a>
              </div>

              {/* Location & Availability */}
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-black shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Highlight delay={1000} colorClass="highlight-3">Location</Highlight>
                </h3>
                <p className="text-muted-foreground mb-2">{PROFILE.location}</p>
                <p className="text-sm text-muted-foreground">Open to part-time roles & freelance projects</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold mb-6">Find me on</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href={LINKS.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg bg-black text-white border-2 border-black px-6 py-3 hover:bg-gray-800 hover:border-gray-800 transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href={LINKS.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}