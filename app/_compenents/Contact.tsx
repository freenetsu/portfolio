import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contactez-moi</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serais ravi de travailler avec vous.
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="https://www.instagram.com/fareszeppeli/"
          name="@fareszeppeli"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHPk0WGgDV0QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723193944895?e=1728518400&v=beta&t=OsdKbcJGapQWBmnwXQMqcUJ-BzuxEuafhV-RKUn6CFM"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
          description=" "
        />
        <ContactCard
          className="flex-1"
          url="https://www.linkedin.com/in/fares-guizani-9630042b0/"
          name="@faresGuizani"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHPk0WGgDV0QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723193944895?e=1728518400&v=beta&t=OsdKbcJGapQWBmnwXQMqcUJ-BzuxEuafhV-RKUn6CFM"
          mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg"
          description=""
        />
        <ContactCard
          className="flex-1"
          url="https://mail.google.com/mail/?view=cm&fs=1&to=guizanifares0@gmail.com"
          name="guizanifares0@gmail.com"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHPk0WGgDV0QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723193944895?e=1728518400&v=beta&t=OsdKbcJGapQWBmnwXQMqcUJ-BzuxEuafhV-RKUn6CFM"
          mediumImage="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png"
          description="Email me for any enquiries"
        />
      </div>
    </Section>
  );
};
