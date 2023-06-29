import { Montserrat } from 'next/font/google';
import React from 'react';

const fontFamily = Montserrat({ subsets: ['latin'] });

interface ILayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

function Layout(props: ILayoutProps) {
  const { children, hideHeader } = props;
  return (
    <>
      <div className={`${fontFamily.className}`}>
        {!hideHeader && (
          <header className="fixed flex h-[70px] bg-white/95 border-b w-full items-center backdrop-blur">
            <div
              className={'container mx-auto flex w-full justify-between px-4'}
            >
              <div></div>
              <div className="self-end flex gap-x-3 items-center">
                Hi, <b>Asep Yayat</b>
                <button
                  className={'btn bg-danger px-4 py-2 rounded-lg text-white'}
                >
                  <b>Logout</b>
                </button>
              </div>
            </div>
          </header>
        )}
        <main className={`${!hideHeader && 'pt-[70px]'}`}>{children}</main>
      </div>
    </>
  );
}

Layout.defaultProps = {
  hideHeader: false,
};
export default React.memo(Layout);
