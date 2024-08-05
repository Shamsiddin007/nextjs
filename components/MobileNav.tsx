"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "lucide-react";
import { SlCamrecorder } from "react-icons/sl";
import { sidebarLinks } from "../constants/index";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function MobileNav() {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <IoReorderThree className="text-[36px] sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-2">
            {/* <SlCamrecorder className="text-[32px]" /> */}
            <p className="text-[26px] text-green-950">Yoom zzom</p>
          </Link>

          <div
            className=" flex h-[clac(100vh-72px)]
           flex-col justify-between overflow-y-auto"
          >
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  const Icon = link.Icon;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Icon className=" text-[20px]" />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
