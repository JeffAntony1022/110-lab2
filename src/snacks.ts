import { boldText } from './animation';
let snacks: string[] = ["chips", "cookies", "candy", "popcorn", "pretzels"];

export function getSnack(): string{
    return boldText(snacks[0]); 
}

