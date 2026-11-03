import styles from "./WordsPage.module.css"

import { useWords } from "./hooks/useWords";
import { WordsTable } from "./components/WordsTable/WordsTable";
import { Pagination } from "./components/Pagination/Pagination";
import { WordForm } from "./components/WordForm/WordForm";

export const WordsPage = () => {
 const {
  visibleWords,
  page,
  totalPages,
  editingWord,
  setPage,
  handleSubmit,
  handleEdit,
  handleCancelEdit,
  handleDelete,
  toggleStatus,
 } = useWords();

 return (
  <main className={styles["site-main"]}>
   <h2 className={styles["page-title"]}>Список слов</h2>
   <p className={styles["page-lead"]}>Управление словарем</p>

   <WordsTable
    words={visibleWords}
    onEdit={handleEdit}
    onDelete={handleDelete}
    onToggleStatus={toggleStatus}
   />

   <Pagination page={page} totalPages={totalPages} onChange={setPage} />

   <WordForm
    editingWord={editingWord}
    onSubmit={handleSubmit}
    onCancel={handleCancelEdit}
   />
  </main>
 );
};

export default WordsPage;
