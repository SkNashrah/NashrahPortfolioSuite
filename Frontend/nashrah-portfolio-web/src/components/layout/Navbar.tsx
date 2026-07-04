import {navigationLinks} from "@/constants/navigations"; 
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 p-4 bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div>
        <h1 className="text-xl font-bold">NFS</h1>

        <p className="text-xs text-gray-500">
          Software Developer ● UI/UX Designer
        </p>
      </div>

      <div className="flex items-center gap-6">
        {navigationLinks.map((link) => (
          <a
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