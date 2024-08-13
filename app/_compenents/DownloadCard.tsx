/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

export const DownloadCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  className?: string;
}) => {
  return (
    <a className="w-full" href="CVFares.jpg" download="CVfares">
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
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>

          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <Download size={16} className=" mr-4" />
      </Card>
    </a>
  );
};
