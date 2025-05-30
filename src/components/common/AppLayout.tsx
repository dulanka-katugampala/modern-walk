import type { ReactNode } from "react";

import Header from "./Header";
import RoutePaths from "../../router/RoutePaths";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header link={RoutePaths.Root} title="Modern Walk" />
      <main className="w-container max-w-max-screen mx-auto px-4 py-8 mt-[86px]">
        <div className="mt-8 mb-10">{children}</div>
      </main>
    </>
  );
};

export default AppLayout;
