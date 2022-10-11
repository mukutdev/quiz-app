import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog/Blog'
import QuizElement from './components/QuizElement/QuizElement'
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
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics />,
        },
        {
          path: '/topics',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics />,
        },
        {
          path: '/topics/:quizId',
          loader: ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizElement />,
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
