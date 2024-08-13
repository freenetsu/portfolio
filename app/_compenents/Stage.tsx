/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { Code } from "./Code";

/* eslint-disable @next/next/no-img-element */
export type StageProps = {
  image: string;
  title: string;
  description: string;
};

export const Stage = (props: StageProps) => {
  return (
    <div className="flex flex-col w-full items-center gap-4 ">
      <Link href="https://www.fahari.pro/">
        <img
          src={props.image}
          className="w-28 h-20 object-contain rounded-md"
        />
      </Link>
      <p className="text-lg font-semibold text-center	">
        <Code>{props.title}</Code>
      </p>
      <p className="text-sm text-muted-foreground text-center	">
        {props.description}
      </p>
    </div>
  );
};
