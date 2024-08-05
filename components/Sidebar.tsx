"use client";
import { sidebarLinks } from "../constants/index";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className=" sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
    
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route 

            const Icon = link.Icon;


          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-center",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Icon className="text-[24px]" />
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
