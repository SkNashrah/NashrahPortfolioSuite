import {navigationLinks} from "@/constants/navigations"; 
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        px-8
        py-4
        border-b
        backdrop-blur-md
      "
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--text)",
      }}
    >
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--text)" }}
        >
          NFS
        </h1>

        <p
          className="text-xs"
          style={{ color: "var(--primary)" }}
        >
          Software Developer • UI/UX Designer
        </p>
      </div>

      <div className="flex items-center gap-8" style={{
        color: "var(--muted)"
      }}>
        {navigationLinks.map((link) => (
          <a
            className="transition hover:opacity-80"
            style={{ color: "var(--muted)" }}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </a>
        ))}
          
      </div>

      <ThemeToggle />
    </nav>
  );
}