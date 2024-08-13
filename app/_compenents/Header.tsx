import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { Instagram } from "./icons/Instagram";
import { LinkDin } from "./icons/LinkDin";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">FaresZeppeli.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/freenetsu"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 "
            )}
          >
            <GithubIcon className="text-foreground" size={12}></GithubIcon>
          </Link>
          <Link
            href="https://www.instagram.com/fareszeppeli/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Instagram className="text-foreground" size={12}></Instagram>
          </Link>
          <Link
            href="https://www.linkedin.com/in/fares-guizani-9630042b0/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkDin className="text-foreground" size={12}></LinkDin>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
