import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Addrecord from '../components/addrecord.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/addrecord',
      element: <Addrecord />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
