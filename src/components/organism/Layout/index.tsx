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
      <div className={`${fontFamily.className}`}>
        <header className="fixed flex h-[70px] bg-white border-b w-full items-center">
          <div className={"container mx-auto flex w-full justify-between px-4"}>
            <div></div>
            <div className="self-end flex gap-x-3 items-center">
              Hi, <b>Asep Yayat</b>
              <button
                className={"btn bg-danger px-4 py-2 rounded-lg text-white"}
              >
                <b>Logout</b>
              </button>
            </div>
          </div>
        </header>
        <main className="pt-[70px]">{children}</main>
      </div>
    </>
  );
}

export default React.memo(Layout);
