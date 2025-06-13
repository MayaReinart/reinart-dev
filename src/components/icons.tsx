import { HTMLAttributes } from "react";
import Image from "next/image";

export const GitHubIcon = ({ className, ...props }: HTMLAttributes<HTMLImageElement>) => (
  <Image
    src="/github.svg"
    alt="GitHub"
    width={24}
    height={24}
    className={className}
    {...props}
  />
);
