import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
    const router = createBrowserRouter([
        {
            path: '/login',
            element: <Login />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
