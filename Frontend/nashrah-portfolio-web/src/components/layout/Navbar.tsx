import {navigationLinks} from "@/constants/navigations"; 
import ThemeToggle from "@/components/ui/ThemeToggle";
import ThemePopover from "@/components/ui/ThemePopover";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-betwen px-8 py-4 backdrop-blur-md border-b"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--text)",
      }}
    >
      <div>
        <h1
          className="font-serif text-2xl font-bold gradient-text">
          NFS
        </h1>

        <p
          className="text-xs"
          style={{ color: "var(--secondary)" }}
        >
          Software Developer • UI/UX Designer
        </p>
      </div>

      <div className="hidden items-center gap-7 md:flex">
        {navigationLinks.map((link) => (
          <a
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--muted)" }}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </a>
        ))}
          
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ThemePopover/>
      </div>
    </nav>
  );
}