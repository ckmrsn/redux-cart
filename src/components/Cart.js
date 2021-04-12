import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseItem, decreaseItem, removeFromCart } from '../actions/index'
import alertify from 'alertifyjs'

const Cart = (props) => {
	const totalCartAmount = props.cart.reduce(
		(total, item) => (total += item.price * item.count),
		0
	)
	return (
		<div>
			<h2>
				<Link to='/'>Kitap Listesi</Link> <span>Sepetim</span>
			</h2>

			<h3>Toplam Sepet Tutarı: &#8378;{totalCartAmount.toFixed(2)}</h3>

			{props.cart.map((book) => (
				<div className='book' key={book.id}>
					<img src={book.image} alt={book.name} />
					<div>
						<h4>{book.name}</h4>
						<p>Yazar: {book.author}</p>
						<p>Fiyat: &#8378; {book.price}</p>
						<p>Toplam: &#8378;{(book.price * book.count).toFixed(2)}</p>
						<p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
						<button
							className='redButton'
							onClick={() => {
								props.decreaseItem(book.id)
							}}
						>
							-
						</button>{' '}
						<button
							className='redButton'
							onClick={() => {
								alertify.set('notifier', 'position', 'bottom-left')
								alertify.notify(
									`${book.name} sepetten kaldırıldı.`,
									'custom2',
									2
								)
								props.removeFromCart(book.id)
							}}
						>
							Sepetten Çıkar
						</button>{' '}
						<button
							className='greenButton'
							onClick={() => {
								props.increaseItem(book.id)
							}}
						>
							+
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

const mapSateToProps = (state) => {
	return {
		cart: state.bookReducer.cart,
	}
}

export default connect(mapSateToProps, {
	increaseItem,
	decreaseItem,
	removeFromCart,
})(Cart)
