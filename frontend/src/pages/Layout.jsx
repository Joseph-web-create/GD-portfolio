import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-black ">
      <Outlet />
    </div>
  );
}

export default Layout;
