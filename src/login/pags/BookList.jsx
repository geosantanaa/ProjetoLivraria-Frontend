import React, { useState } from 'react';
// eslint-disable-next-line
import { LayoutComponentes } from "../pags/LayoutComponentes/index.css";
import { Link } from 'react-router-dom';



import book1Image from '../pags/images/images.jpg';
import book2Image from '../pags/images/images (1).jpg';
import book3Image from '../pags/images/capas-jpg-sempre-1000x150021-ca5dc6790f213a637116722488318543-640-0.jpg';
import book4Image from '../pags/images/acotar.jpg';

const BookList = () => {
  const [books] = useState([
    { id: 1, title: 'Livro da Noite', author: 'Holly Black', price: 25, image: book1Image },
    { id: 2, title: 'Peter Pan e Wendy', author: 'Elizabeth Rudnick e Carlos César da Silva', price: 30, image: book2Image },
    { id: 3, title: 'O Livro da Vida', author: 'Santa Teresa Ávila', price: 20, image: book3Image },
    { id: 3, title: 'Corte de Espinhos e Rosas', author: 'Sarah J Maas', price: 40, image: book4Image },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const handleRemoveFromCart = (book) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== book.id));
  };

  return (
    <div className="book-list">
     
      <h1>Bem-vindo à Milk Shakespeare Livraria!</h1>
      <div className="forum-button-container">
        <Link to="/ForumScreen" className="forum-link">
          <button className="forum-button">Acessar Fórum</button>
        </Link>
      </div>
      <div className="books-container">
        <div className="side-content">
          <h3>Explore nossa seleção</h3>
          <p>Aproveite a variedade de livros que oferecemos em nossa livraria. Encontre os melhores títulos de diferentes gêneros e autores renomados.</p>
        </div>
        <ul className="book-grid">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <img src={book.image} alt={book.title} className="book-image" />
              <span>{`${book.title} - ${book.author} - R$ ${book.price.toFixed(2)}`}</span>
              <button onClick={() => handleAddToCart(book)}>Adicionar ao Carrinho</button>
            </li>
          ))}
        </ul>
        <br />
      </div>
            <div className="cart">
        <h3 className="cart-title">Carrinho de Compras</h3>
        {cartItems.length === 0 ? (
          <p className="cart-empty">O carrinho está vazio.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-title">{`${item.title}`}</span>
                <span className="cart-item-price">{`R$ ${item.price.toFixed(2)}`}</span>
                <button className="cart-item-remove" onClick={() => handleRemoveFromCart(item)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
    </div>
    </div>
  );
};

export default BookList;

