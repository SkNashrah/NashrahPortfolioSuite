import {navigationLinks} from "@/constants/navigations"; 
import link from "next/dist/client/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 p-4 ">
      <div>
        <h1 className="text-xl font-bold">NFS</h1>

        <p className="text-xs text-gray-500">
          Software Developer ● UI/UX Designer
        </p>
      </div>

      <div className="flex gap-6">
        {navigationLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
          >
            {link.title}
          </a>
        ))}
          
      </div>
    </nav>
  );
}