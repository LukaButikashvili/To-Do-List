import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

function MainLayout({ children }: IProps) {
  return (
    <div style={{ background: "#E8F1FD", height: "100vh", overflow: "auto" }}>
      <div id="content" style={{ padding: "30px 20px" }}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
