import imgEdit from "../assets/editar.svg";
import imgTrash from "../assets/lixeira.svg";

import styles from "../styles/components/MyBooksTable.module.css";

import api from "../services/api";
import { getToken } from "../services/auth";

export default function MyBookTable(props) {
  async function destroyBook(id) {
    const token = getToken();
    await api.delete(`/books/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    props.onDeleteLivro();
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Imagem:</th>
          <th>Título:</th>
          <th>Autor:</th>
          <th>Ação:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={props.thumbnailURL} alt="imagem do livro" />
          </td>
          <td>{props.name}</td>
          <td>{props.author}</td>
          <td>
            <div className={styles.actionsButtonsContainer}>
              <button>
                <img src={imgEdit} alt="imagem editar livro" />
                <span>editar</span>
              </button>
              <button onClick={() => destroyBook(props.id)}>
                <img src={imgTrash} alt="imagem excluir livro" />
                <span>apagar</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
