import { useState } from "react";
import './styles.css'

export const CadastroProduto = () => {
  
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(produto);
  };

  return (
    <div>
      <h2 class="CadastroProduto">Cadastro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="nome">Produto:</label>
          <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
        </div>
        <div>
          <label class="preco">Preço:</label>
          <input type="text" name="preco" value={produto.preco} onChange={handleChange} />
        </div>
        <div>
          <label class="descricao">Descrição:</label>
          <textarea name="descricao" value={produto.descricao} onChange={handleChange} />
        </div>
        <button class="botao" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProduto;