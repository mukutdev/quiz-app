import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog/Blog'
import Statistic from './components/Statistic/Statistic'
import Topics from './components/Topics/Topics'
import Main from './layout/Main/Main'


function App() {

  const router = createBrowserRouter([
     {
      path:'/',
      element: <Main />,
      children:[
        {
          path: '/',
          element: <Topics />,
        },
        {
          path: '/topics',
          element: <Topics />,
        },
        {
          path: '/statistic',
          element: <Statistic />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
      ],
     },
  ])
  return (
    <div className="App">
       
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
