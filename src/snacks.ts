import { boldText } from './animation';
let snacks: string[] = ["chips", "cookies", "candy", "popcorn", "pretzels", "trail mix", "fruit snacks", "granola bars"];

export function getSnack(): string{
    return boldText(snacks[0]); 
}

