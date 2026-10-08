import { boldText } from './animation';

const music = ["jazz", "rock", "pop", "hip-hop", "house"];

export function printMusic(): void {
    for (const genre of music) {
        console.log(boldText(genre));
    }
}

