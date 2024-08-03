import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './about.jsx'
import SignIn from './signin.jsx'
//import Faq from './faq.jsx'
//import Locate from './locate.jsx'
import SignUp from './signup.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Faq from './faq.jsx'
import Locate from './locate.jsx'

// Step 3: Configure the theme
const config = {
  initialColorMode: "dark", // Set the initial color mode
  useSystemColorMode: false, // Use the system color mode preference
};

const theme = extendTheme({ config });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path:"faq",
    element: <Faq />,
  },

  {
    path:"locate",
    element: <Locate />,
  },

  {
    path:"signin",
    element: <SignIn />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
