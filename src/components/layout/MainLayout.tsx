
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const MainLayout = ({ children, showSidebar = false }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} showMenuButton={showSidebar} />
      <div className="flex flex-1">
        {showSidebar && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}
        <main className={`flex-1 ${showSidebar ? 'lg:ml-64' : ''} transition-all duration-300`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
