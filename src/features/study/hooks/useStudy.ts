import { useEffect, useState } from 'react';
import type { Word, WordStatus } from '../../../types/types';

const STORAGE_KEY = 'words';
const REVIEW_DELAY_MS = 10 * 1000; // 3 часа в миллисекундах
// Для тестов можно временно поставить, например, 10 секунд: 10 * 1000;

export const useStudy = () => {
  const [words, setWords] = useState<Word[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    try {
      const parsed: Word[] = JSON.parse(saved);
      return parsed.map((w) => ({
        id: w.id,
        english: w.english,
        translation: w.translation,
        status: w.status,
        streak: w.streak ?? 0,
        lastStudiedAt: w.lastStudiedAt ?? 0,
      }));
    } catch (e) {
      console.error('Ошибка чтения слов', e);
      return [];
    }
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  }, [words]);

  const now = Date.now();

  // Очередь тренировки:
  // 1. Все со статусом 'learning' (новые)
  // 2. Карточки со статусом 'review', у которых ПРОШЛО 3 часа с момента последнего ответа
  const studyQueue = words.filter((w) => {
    if (w.status === 'learning') return true;
    if (w.status === 'review') {
      const lastTime = w.lastStudiedAt ?? 0;
      return now - lastTime >= REVIEW_DELAY_MS;
    }
    return false;
  });

  const total = words.length;
  const remainingCount = studyQueue.length;
  
  // Статистика для блоков "Изучается / Выучено / Всего"
  const learnedCount = total - remainingCount; 
  const trueLearnedCount = words.filter((w) => w.status === 'learned').length;

  // Прогресс-бар заполняется на 100%, как только пользователь прошел все карточки хотя бы 1 раз
  const restingCount = total - remainingCount;
  const progressPercent =
    total === 0 ? 0 : Math.round((restingCount / total) * 100);

  const safeIndex =
    studyQueue.length === 0
      ? 0
      : Math.min(currentIndex, studyQueue.length - 1);

  const currentCard = studyQueue[safeIndex];

  const handleAnswer = (known: boolean) => {
    if (!currentCard || animationClass) return;

    const cardId = currentCard.id;
    const queueLength = studyQueue.length;
    const currentTime = Date.now();

    setAnimationClass(known ? 'swipe-right' : 'swipe-left');

    setTimeout(() => {
      setIsFlipped(false);
      setAnimationClass('');

      setWords((prev) =>
        prev.map((w) => {
          if (w.id !== cardId) return w;

          if (known) {
            const nextStreak = (w.streak ?? 0) + 1;

            // Если ответили правильно 3 раза — отправляем в 'learned' (навсегда)
            if (nextStreak >= 3) {
              return {
                ...w,
                status: 'learned' as WordStatus,
                streak: nextStreak,
                lastStudiedAt: currentTime,
              };
            }

            // Иначе отправляем на повторение ('review') с фиксацией времени (через 3 часа)
            return {
              ...w,
              status: 'review' as WordStatus,
              streak: nextStreak,
              lastStudiedAt: currentTime,
            };
          } else {
            // При ошибке возвращаем в обычное обучение ('learning') и сбрасываем серию
            return {
              ...w,
              status: 'learning' as WordStatus,
              streak: 0,
              lastStudiedAt: currentTime,
            };
          }
        })
      );

      // Корректируем индекс карточки в очереди
      if (known) {
        setCurrentIndex((prev) => {
          const newLength = queueLength - 1;
          if (newLength <= 0) return 0;
          return prev >= newLength ? 0 : prev;
        });
      } else {
        // Если "Не знаю", карточка уходит в конец текущей сессии
        setCurrentIndex((prev) => (prev + 1) % queueLength);
      }
    }, 300);
  };

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const resetAll = () => {
    setWords([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setAnimationClass('');
  };

  return {
    words,
    studyQueue,
    currentCard,
    isFlipped,
    animationClass,
    total,
    learnedCount,
    remainingCount,
    progressPercent,
    handleAnswer,
    toggleFlip,
    resetAll,
  };
};