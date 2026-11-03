import { useEffect, useMemo, useState } from "react";
import type { Word, WordStatus } from "../../../types/types"

const STORAGE_KEY = "words";
const PAGE_SIZE = 5;

export const useWords = () => {
  const [words, setWords] = useState<Word[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  }, [words]);

  const totalPages = Math.max(1, Math.ceil(words.length / PAGE_SIZE));

  const visibleWords = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return words.slice(start, start + PAGE_SIZE);
  }, [words, page]);

  // Слово, которое сейчас редактируется (или null)
  const editingWord = useMemo(
    () => words.find((word) => word.id === editingId) ?? null,
    [words, editingId],
  );

  const handleSubmit = (englishValue: string, translationValue: string) => {
    if (editingId !== null) {
      setWords((current) =>
        current.map((word) =>
          word.id === editingId
            ? { ...word, english: englishValue, translation: translationValue }
            : word,
        ),
      );
      setEditingId(null);
    } else {
      setWords((current) => [
        ...current,
        {
          id: Date.now(),
          english: englishValue,
          translation: translationValue,
          status: "learning" as WordStatus,
        },
      ]);
    }
  };

  const handleEdit = (word: Word) => setEditingId(word.id);

  const handleCancelEdit = () => setEditingId(null);

  const handleDelete = (id: number) => {
    setWords((current) => current.filter((word) => word.id !== id));

    // Если удалили редактируемое слово — выходим из режима редактирования
    if (editingId === id) setEditingId(null);

    const newLastPage = Math.max(1, Math.ceil((words.length - 1) / PAGE_SIZE));
    if (page > newLastPage) setPage(newLastPage);
  };

  const toggleStatus = (id: number) => {
    setWords((current) =>
      current.map((word) =>
        word.id === id
          ? {
              ...word,
              status: word.status === "learning" ? "learned" : "learning",
            }
          : word,
      ),
    );
  };

  return {
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
  };
};