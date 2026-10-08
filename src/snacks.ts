import { boldText } from './animation';
// let snacks: string[] = ["chips", "cookies", "candy", "popcorn", "pretzels", "shrimp chips", "nuts", "fruits", "trail mix", "fruit snacks", "granola bars"];
let snacks: string[] = ["chips"];


export function getSnack(): string{
    return boldText(snacks[0]); 
}

