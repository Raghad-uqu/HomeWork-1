// cardOrganizer.ts
import { Flashcard } from './flashcard';

// تعريف الواجهة CardOrganizer
export interface CardOrganizer {
    sort(): void;
}