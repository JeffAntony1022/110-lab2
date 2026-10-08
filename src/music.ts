import { boldText } from './animation';

const music = ["jazz", "rock", "pop", "hip-hop", "house"];

export function printMusic(): void {
    console.log("\nMusic:");
    for (const genre of music) {
        console.log(boldText(genre));
    }
}

