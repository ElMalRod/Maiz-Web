import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Publicaciones from './pages/publicaciones'
import Galeria from './pages/galeria'
import Info from './pages/info'
import Recetas from './pages/recetas'

const Content = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/publicaciones" component={Publicaciones} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/info" component={Info} />
        <Route path="/Recetas" component={Recetas} />
      </Switch>
    </BrowserRouter>
  )
}

export default Content
