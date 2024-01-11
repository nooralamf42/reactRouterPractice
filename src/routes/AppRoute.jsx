import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App'
import { About, Contact, Github, Home } from '../pages'
import { githubDataLoader } from '../pages/Github'

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' Component={App}>
            <Route path='' Component={Home}/>
            <Route path='about' Component={About}/>
            <Route path='contact' Component={Contact}/>
            <Route 
                path='github' 
                Component={Github}
                loader={githubDataLoader}
            />
        </Route>
    ))

function AppRoute() {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default AppRoute