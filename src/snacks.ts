import { boldText } from './animation';
export const snacks: string[] = ["chips", "cookies", "candy", "popcorn", "pretzels", "shrimp chips", "nuts", "fruits", "trail mix", "fruit snacks", "granola bars"];
// export const snacks: string[] = ["chips"];


export function getSnack(): string{
    return boldText(snacks[0]); 
}

