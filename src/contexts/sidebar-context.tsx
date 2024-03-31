import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { usePathname } from 'src/hooks/use-pathname';

// Context structure
interface SidebarContextType {
  isSidebarCollapsed: boolean;
  isSidebarHovered: boolean;
  toggleSidebarCollapsed: () => void;
  toggleSidebarHover: (hovered: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>(null!);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const pathname = usePathname();

  // Toggle the sidebar collapsed state
  const toggleSidebarCollapsed = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle hover state persistence on route changes
  useEffect(() => {
    if (isSidebarCollapsed) {
      setIsSidebarHovered(false);
    }
  }, [pathname, isSidebarCollapsed]);

  // Toggle hover state
  const toggleSidebarHover = (hovered: boolean) => {
    if (isSidebarCollapsed) {
      setIsSidebarHovered(hovered);
    }
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarCollapsed, isSidebarHovered, toggleSidebarCollapsed, toggleSidebarHover }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useSidebarContext = () => useContext(SidebarContext);
