import { Montserrat } from "next/font/google";
import React from "react";

const fontFamily = Montserrat({ subsets: ["latin"] });

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout(props: ILayoutProps) {
  const { children } = props;
  return (
    <>
      <div className={`${fontFamily.className}`}>{children}</div>
    </>
  );
}

export default React.memo(Layout);
