
import { Flashcard } from './flashcard';
import { CardOrganizer } from './cardOrganizer';

export class RecentMistakesFirstSorter implements CardOrganizer {
    constructor(private flashcards: Flashcard[]) {}

    
    sort(): void {
        console.log("Before Sorting:");
        this.printFlashcards();

        this.flashcards.sort((flashcard1, flashcard2) => {
            if (flashcard1.hasMistake() && !flashcard2.hasMistake()) {
                return -1;
            } else if (!flashcard1.hasMistake() && flashcard2.hasMistake()) {
                return 1;
            }
            return 0;
        });

        console.log("After Sorting:");
        this.printFlashcards();
    }

    
    private printFlashcards(): void {
        for (const flashcard of this.flashcards) {
            console.log(`Question: ${flashcard.getQuestion()} | Correct: ${!flashcard.hasMistake()}`);
        }
    }
}