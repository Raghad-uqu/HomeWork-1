// main.ts
import { Flashcard } from './flashcard';
import { RecentMistakesFirstSorter } from './recentMistakesFirstSorter';


const flashcards: Flashcard[] = [
    new Flashcard("What is the capital of Japan?", false), 
    new Flashcard("Is the Earth round?", true),  
    new Flashcard("What is the smallest planet in our solar system?", false),
    new Flashcard("What is the square root of 64?", true)  
];


const sorter = new RecentMistakesFirstSorter(flashcards);
sorter.sort(); 
