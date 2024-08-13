/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
  className?: string;
}) => {
  return (
    <Link href={props.url} className={cn("w-full", props.className)}>
      <Card className="bg-accent/10 p-3 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
        <div className="relative w-10 h-10">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1"
          />
        </div>
        <div className=" flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
            {/* {props.freelance && <Badge variant="outline">Mission</Badge>} */}
          </div>

          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4"
        />
      </Card>
    </Link>
  );
};
