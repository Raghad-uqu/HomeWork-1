
export class Flashcard {
    constructor(public question: string, public isMistake: boolean) {}

    getQuestion(): string {
        return this.question;
    }

    hasMistake(): boolean {
        return this.isMistake;
    }
}
