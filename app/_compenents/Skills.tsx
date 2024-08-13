/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Tailwinlogo } from "./icons/Tailwinlogo";
import { VercelLogo } from "./icons/Vercellogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'aime travailler sur...
      </h2>
      <div className="flex max-md:flex-col gap-8">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            Mon principal framework est <Code>React</Code>. J'utilise également{" "}
            <Code>Next.js</Code> comme framework pour le backend et le frontend.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Tailwinlogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            Je peux créer une <u>belle</u> application{" "}
            <i>en quelques secondes</i> en utilisant <Code>TailwindCSS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <VercelLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Vercel</h3>
          <p className="text-sm text-muted-foreground">
            J'utilise <Code>Vercel</Code> pour déployer et héberger rapidement
            des applications web avec une intégration fluide à{" "}
            <Code>Next.js</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
