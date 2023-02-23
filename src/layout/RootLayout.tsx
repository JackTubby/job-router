import { NavLink, Outlet } from "react-router-dom";
//* This layout component is wrapping the other compnents inside App.tsx
//* We have to use the oulet component to tell react-router where we want to show our Routes in app.tsx
const RootLayout = () => {
  return (
    <div className="route-layout">
      <header>
        <nav>
          <h1>Job Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        {/* //* Outputs the route components from App.tsx */}
        <Outlet/>
      </main>
    </div>
  );
};

export default RootLayout;
