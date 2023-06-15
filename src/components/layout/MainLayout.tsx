import Header from "../header/Header";

interface MainLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
