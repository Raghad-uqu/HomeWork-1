// main.ts
import { Flashcard } from './flashcard';
import { RecentMistakesFirstSorter } from './recentMistakesFirstSorter';

// إنشاء بعض البطاقات مع إجابات صحيحة وخاطئة
const flashcards: Flashcard[] = [
    new Flashcard("What is the capital of Japan?", false), // إجابة خاطئة
    new Flashcard("Is the Earth round?", true),  // إجابة صحيحة
    new Flashcard("What is the smallest planet in our solar system?", false), // إجابة خاطئة
    new Flashcard("What is the square root of 64?", true)  // إجابة صحيحة
];

// إنشاء منظم البطاقات وترتيبها
const sorter = new RecentMistakesFirstSorter(flashcards);
sorter.sort();  // ترتيب البطاقات قبل وبعد