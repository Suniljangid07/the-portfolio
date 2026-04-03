import { socialIconMap } from "@/lib/iconography";
import { footerLinks } from "@/lib/data";

export function FooterSection() {
  return (
    <footer className="relative px-6 pb-10 sm:px-10 lg:px-16">
      <div className="glass-panel mx-auto max-w-7xl rounded-[32px] px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">
              Portfolio Footer
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Building AI-first products, secure systems, and integration-heavy platforms.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Sunil Jangid. Founding Software Engineer focused on product depth,
              platform thinking, and execution that scales.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              (() => {
                const iconSpec = socialIconMap[link.label];
                const SocialIcon = iconSpec?.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
                  >
                    {SocialIcon ? (
                      <SocialIcon className={iconSpec.className} size={iconSpec.size ?? 16} />
                    ) : null}
                    {link.label}
                  </a>
                );
              })()
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
