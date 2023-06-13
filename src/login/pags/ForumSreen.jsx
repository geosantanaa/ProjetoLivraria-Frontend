import React, { useState } from 'react';

// Componente de tela do fórum
const ForumScreen = () => {
  // Dados do fórum
  const [forumData, setForumData] = useState([
    {
      id: 1,
      title: 'Discussão sobre Livro X',
      author: 'João',
      content: 'Qual a opinião de vocês sobre o livro X?'
    },
    {
      id: 2,
      title: 'Recomendação de Leitura',
      author: 'Maria',
      content: 'Gostaria de sugestões de livros do gênero Y.'
    },
    // Adicione mais dados do fórum aqui
  ]);

  const [newPost, setNewPost] = useState({
    id: '',
    title: '',
    author: '',
    content: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddPost = (event) => {
    event.preventDefault();
    if (newPost.title.trim() !== '' && newPost.author.trim() !== '' && newPost.content.trim() !== '') {
      if (editMode) {
        // Editar postagem existente
        setForumData((prevData) => {
          const updatedData = prevData.map((post) =>
            post.id === editPostId ? { ...post, title: newPost.title, author: newPost.author, content: newPost.content } : post
          );
          return updatedData;
        });
        setEditMode(false);
        setEditPostId(null);
      } else {
        // Adicionar nova postagem
        const postId = forumData.length + 1;
        const post = { id: postId, ...newPost };
        setForumData((prevData) => [...prevData, post]);
      }
      setNewPost({ id: '', title: '', author: '', content: '' });
    }
  };

  const handleEditPost = (postId) => {
    const postToEdit = forumData.find((post) => post.id === postId);
    if (postToEdit) {
      setNewPost({
        id: postToEdit.id,
        title: postToEdit.title,
        author: postToEdit.author,
        content: postToEdit.content
      });
      setEditMode(true);
      setEditPostId(postId);
    }
  };

  const handleDeletePost = (postId) => {
    setConfirmDelete(true);
    setDeletePostId(postId);
  };

  const confirmDeletePost = () => {
    setForumData((prevData) => prevData.filter((post) => post.id !== deletePostId));
    setConfirmDelete(false);
    setDeletePostId(null);
  };

  const cancelDelete = () => {
    setConfirmDelete(false);
    setDeletePostId(null);
  };

  return (
    <div className="forum-screen">
      <h1>Fórum</h1>

      {/* Renderizar as postagens do fórum */}
      {forumData.map((post) => (
        <div className="forum-post" key={post.id}>
          <h2>{post.title}</h2>
          <p>Autor: {post.author}</p>
          <p>{post.content}</p>
          <div>
            <button onClick={() => handleEditPost(post.id)}>Editar</button>
            <button onClick={() => handleDeletePost(post.id)}>Excluir</button>
          </div>
        </div>
      ))}

      {/* Caixa de mensagem para o usuário */}
      <div className="message-box">
        <h3>{editMode ? 'Editar Mensagem' : 'Adicionar Mensagem'}</h3>
        <form onSubmit={handleAddPost}>
          <input type="text" name="title" placeholder="Título" value={newPost.title} onChange={handleInputChange} />
          <input type="text" name="author" placeholder="Autor" value={newPost.author} onChange={handleInputChange} />
          <textarea name="content" placeholder="Conteúdo" value={newPost.content} onChange={handleInputChange} />
          <button type="submit">{editMode ? 'Salvar' : 'Enviar'}</button>
        </form>
      </div>

      {/* Confirmação de exclusão */}
      {confirmDelete && (
        <div className="confirm-delete">
          <p>Tem certeza que deseja excluir esta postagem?</p>
          <button onClick={confirmDeletePost}>Sim</button>
          <button onClick={cancelDelete}>Não</button>
        </div>
      )}
    </div>
  );
};

export default ForumScreen;