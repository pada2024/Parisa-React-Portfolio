import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
     
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      
    ],
  },

  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

