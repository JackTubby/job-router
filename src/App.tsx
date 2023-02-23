//* Imports from react router
import {
  Routes,
  Route,
  createBrowserRouter,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
// Layouts
import RootLayout from "./layout/RootLayout";

function App() {
  //* This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
  //? It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
  const router = createBrowserRouter(
    //* We add createRoutesFromElements which holds our routes
    createRoutesFromElements(
      //* Our wrapping Route is not Routes as that will cause an error, the new way is to just use Route
      //? We can assign our Route element and it can act like a layout component for any route nested inside it
      //? So what we pass to this element would basically wrap around or other route components for example a navbar
      //? We can also have a path which will be equal to / which means it will match the root path
      <Route element={<RootLayout/>} path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
    //* Now we pass our router and pass it into a route provider component that goes inside our return
  );

  return (
    <>
      {/*
    //* Add our RouterProvider and pass in our router to router
  */}
      <RouterProvider router={router}/>
    </>
  );
}
export default App;

//! THIS IS HOW WE WOULD PREVIOUSLY USE ROUTES BUT REACT-ROUTER NEWER UPDATE WE USE A DIFFERENT WAY. THAT IS SHOWN ABOVE ^^^^^^^^^
// function App() {
//   return (
//     <>
//       {/*
//         //* Wrap entire application with the BrowserRouter component then inside we can set our routes
//         //? We do this because BrowserRouter stores the current location in the browser's built-in history stack.
//         //? <BrowserRouter window> defaults to using the current document's defaultView, but it may also be used to track changes to another window's URL, in an <iframe>, for example.
//       */}
//       <BrowserRouter>
//       <header>
//         <nav>
//           <h1>Job Router</h1>
//           {/* //* We add our Link Elements and use to to link to our path
//               //? The reason we use these links is if we do not a call to the server is made each time adding a NavLink intercepts these requests
//               //? We use NavLink and not Link because NavLink gives us the extra ability of it having a class attribute which turns active when the user goes to that route
//           */}
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="about">About</NavLink>
//         </nav>
//       </header>
//         {/* // Inside our main tags we want all our routes */}
//         <main>
//           {/* //* We create our Routes components so we can place our Route components inside
//               //? Routes are kind of a parent component for multiple different route components
//           */}
//           <Routes>
//             {/*
//               //* We now create our Route components
//               //? We set up a route component for every route we want
//               //? The Route component takes two props path which is the location for this route
//               //? And element which is what we want to show when the route is searched
//         */}
//             <Route path="/" element={<Home />} />
//             <Route path="about" element={<About />} />
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
