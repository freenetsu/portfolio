/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Code, Rss, StickyNote } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { DownloadCard } from "./DownloadCard";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Stage } from "./Stage";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col  gap-4">
      <div className="flex flex-col gap-5">
        <div className=" flex-[3] w-full">
          <Card className=" w-full p-4 flex flex-col gap-2 ">
            <p className="text-lg text-muted-foreground">Projet en cours</p>
            <div className="flex flex-col gap-4">
              {SIDE_PROJECTS.map((project, index) => (
                <SideProject key={index} {...project} />
              ))}
            </div>
          </Card>
        </div>
        <div className=" flex-[3] w-full">
          <Card className=" w-full p-4 flex flex-col gap-2 ">
            <p className="text-lg text-muted-foreground">Mes Stages</p>
            <div className="flex flex-row gap-2">
              <Card className=" w-full p-4 flex flex-col gap-2 hover:bg-accent/50 transition-colors">
                <Stage
                  image="https://www.fahari.pro/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75"
                  title="FAHARI"
                  description="Fahari.pro est une agence spécialisée dans le développement d'applications SaaS innovantes, axée sur la qualité et la sécurité."
                ></Stage>
              </Card>
              <Card className=" w-full p-4 flex flex-col gap-2 hover:bg-accent/50 transition-colors">
                <Stage
                  image="https://images.emojiterra.com/google/android-nougat/512px/2754.png"
                  title="Mon futur stage "
                  description=" dignissimos repudiandae quibusdam beatae pariatur corporis ducimus!"
                ></Stage>
              </Card>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
          <ContactCard
            url="https://www.instagram.com/fareszeppeli/"
            name="@fareszeppeli"
            image="https://media.licdn.com/dms/image/v2/D4D03AQHPk0WGgDV0QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723193944895?e=1728518400&v=beta&t=OsdKbcJGapQWBmnwXQMqcUJ-BzuxEuafhV-RKUn6CFM"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
            description=""
          />
          <ContactCard
            url="https://www.linkedin.com/in/fares-guizani-9630042b0/"
            name="@faresGuizani"
            image="https://media.licdn.com/dms/image/v2/D4D03AQHPk0WGgDV0QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723193944895?e=1728518400&v=beta&t=OsdKbcJGapQWBmnwXQMqcUJ-BzuxEuafhV-RKUn6CFM"
            mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg"
            description=""
          />
          <p className="text-lg text-muted-foreground">
            Télécharger ici mon CV
          </p>
          <DownloadCard
            image="https://media.licdn.com/dms/image/v2/D4D03AQHPk0WGgDV0QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723193944895?e=1728518400&v=beta&t=OsdKbcJGapQWBmnwXQMqcUJ-BzuxEuafhV-RKUn6CFM"
            mediumImage="https://pbs.twimg.com/media/GUt1beLW0AAYODu?format=jpg&name=medium"
            name="@Mon CV"
            description=""
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Web-Site École Comores",
    description:
      "Un site d'inscription en ligne pour une école aux Comores, simplifiant les démarches.",
    url: "https://ecole-comore.vercel.app/ContactUs",
  },
  {
    Logo: StickyNote,
    title: "Web-Site Bocca-Piscine",
    description:
      "Un site vitrine pour présenter les services et réalisations d'un pisciniste.",
    url: "https://bocca-piscines.fr/",
  },
  {
    Logo: Rss,
    title: "Web-Site Keikei-Prod",
    description:
      "Un site vitrine pour présenter les services et réalisations d'un Monteur vidéo.",
    url: "https://keikei-prod.fr/",
  },
];

const WORKS: WorkProps[] = [
  {
    image: "https://ecole-comore.vercel.app/assets/Logo2-CxK1a8re.png",
    title: "École Comores",
    role: "Développeur",
    date: "2024 - Present",
    url: "https://ecole-comore.vercel.app/",
  },
  {
    image: "https://bocca-piscines.fr/image/imageLogo/logoP.png",
    title: "Bocca-Piscine",
    role: "Développeur",
    date: "2024 - Present",
    url: "https://bocca-piscines.fr/",
  },
  {
    image: "https://keikei-prod.fr/img/farkeikei.jpeg",
    title: "Keikei-Prod",
    role: "Développeur",
    date: "2023 - Present",
    url: "https://keikei-prod.fr/",
    // freelance: true,
  },
];

// const STAGES: StageProps[] = [
//   {
//     image: "https://ecole-comore.vercel.app/assets/Logo2-CxK1a8re.png",
//     title: "faher",
//     description: "stage angleterre",
//   },
//   {
//     image: "https://ecole-comore.vercel.app/assets/Logo2-CxK1a8re.png",
//     title: "stage deuxième année",
//     description: "lorem",
//   },
// ];
