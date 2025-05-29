import type { ReactNode } from "react";

import Header from "./Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-[86px]">
        <div className="my-8">{children}</div>
      </main>
    </>
  );
};

export default AppLayout;
