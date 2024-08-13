/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import src from "../../public/image/Costar.jpeg";
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Fares guizani
        </h2>
        <h3 className="font-caption text-3xl ">web developer</h3>
        <p className="text-base ">
          {/* J'adore publier du contenu sur{" "}
          <Link href="https://www.instagram.com/fareszeppeli/">
            <Code className="inline-flex items-center gap-1">
              <Instagram size={16} className="inline" /> Instagram
            </Code>
          </Link>
          et aussi sur
          <Link href="https://www.instagram.com/fareszeppeli/">
            <Code className="inline-flex items-center gap-1">
              <CodeLine size={16} className="inline" />
              Codeline
            </Code>
          </Link>
          et je vis en{" "}
          <Link href="https://www.instagram.com/fareszeppeli/">
            <Code className="inline-flex items-center gap-1">
              <Image alt="pays de fares" className="w-6 h-auto" src={src2} />
              France
            </Code>
          </Link> */}
          <Code>Étudiant</Code> en deuxième année de <Code>BTS SIO</Code>, je
          suis passionné par le développement web, le sport et la lecture, et
          j'aborde les <Code>Projets</Code> avec <Code>Concentration</Code> et
          dévouement.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
          alt="fares's pictures"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-xl"
          src={src}
        />
      </div>
    </Section>
  );
};
