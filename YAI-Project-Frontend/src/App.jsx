import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import './App.css';
import AboutProduct from './pages/home/sections/AboutProduct';
import AboutInnovator from './pages/home/sections/AboutInnovator';
import Showcase from './pages/home/sections/Showcase';
import Contact from './pages/home/sections/Contact';
import Hero from './pages/home/sections/Hero';

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {path: "about", element: <AboutProduct />},
        {path: "company", element: <AboutInnovator />},
        {path: "services", element: <Showcase />},
        {path: "contact", element: <Contact />},
        {path: "hero", element: <Hero />},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
