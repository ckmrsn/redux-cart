import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {
	return (
		<div className='App'>
			<h1>Redux ile Alışveriş Sepeti Yapımı</h1>
			<Route exact path='/' component={Products} />
			<Route path='/cart' component={Cart} />
		</div>
	)
}

export default App
