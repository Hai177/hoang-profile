import './App.css';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/ProfilePage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Coding from './pages/coding/CodingPage.jsx';
import './styles/home.css';
import Common from './layouts/MainLayout.jsx';
import Generate from './pages/coding/CodingPage.jsx';

import Contact from './pages/contact/contact.jsx';
import GenerateFile from './pages/coding/GenerateFile.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/',
        element: <Common />,
        children: [
            {
                path: '/coding',
                element: <Coding />,
                children: [
                    {
                        path: 'generate',
                        element: <Generate />,
                    },
                ],
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/contact',
                element: <GenerateFile/>
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
