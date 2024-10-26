import { useParams } from 'react-router-dom';
import books from '../data/books.json'
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const BookPage = () => {
	const { id } = useParams();
	const book = books.find((book) => book.id === parseInt(id));
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCart();

	if (!book) {
		return <p>Libro no encontrado</p>;
	}

	const handleAddToCart = () => {
		for (let i = 0; i < quantity; i++) {
			addToCart(book);
		}
	};

	return (
		<section className="flex flex-col items-center justify-center h-screen">
		<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
			<img src={book.image} alt={book.title} className="mb-4 w-full h-auto" />
			<h1 className="text-2xl font-bold mb-2">{book.title}</h1>
			<p className="text-gray-700 mb-2">Autor: {book.author}</p>
			<p className="text-gray-900 font-bold mb-4">Precio: {book.price}</p>
			<div className="flex items-center mb-4">
				<label className="mr-2" htmlFor="quantity">Cantidad:</label>
				<select
					id="quantity"
					value={quantity}
					onChange={(e) => setQuantity(parseInt(e.target.value))}
					className="border border-gray-300 rounded-md p-2"
				>
					{[...Array(10).keys()].map(num => (
						<option key={num} value={num + 1}>{num + 1}</option>
					))}
				</select>
			</div>
			<button 
				className="mt-4 bg-[#dd7596] text-white py-2 px-4 rounded"
				onClick={handleAddToCart}
			>
				Agregar al carrito
			</button>
		</div>
	</section>
  );
}

export default BookPage;