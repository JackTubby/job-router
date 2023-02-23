import { NavLink, Outlet } from "react-router-dom";
const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laborum.</p>
        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        {/* //* This is where any nested pages in App.tsx inside the help route will be displayed */}
        <Outlet/>
    </div>
  );
};

export default HelpLayout;
