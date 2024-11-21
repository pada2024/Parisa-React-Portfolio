import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Skills',
        element: <Skills />,
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
