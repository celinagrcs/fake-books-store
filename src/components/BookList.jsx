import books from '../data/books.json'

const BookList = () => {
  return (
    <main>
      <section>
        <h2 className='font-extrabold text-3xl p-16 text-center'>Libros Disponibles</h2>
      </section>
      <section className='grid grid-cols-4 px-[115px]'>
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow">
            <img src={book.image} alt={book.title} className="mb-4" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-700">Autor: {book.author}</p>
            <p className="text-gray-900 font-bold">Precio: {book.price}</p>
            <button className="mt-4 bg-pink-400 text-white py-2 px-4 rounded">
              Agregar al carrito
            </button>
          </div>
        ))}
      </section>
    </main>
  )
}

export default BookList