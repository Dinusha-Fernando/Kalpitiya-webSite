import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function Container({ children, className }: Props) {
  return <div className={["container-px mx-auto w-full max-w-6xl", className].join(" ")}>{children}</div>;
}

