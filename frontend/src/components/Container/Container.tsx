import type { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="container-px mx-auto w-full max-w-6xl">{children}</div>;
}

