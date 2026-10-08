const music = ["jazz", "rock", "pop", "hip-hop", "house"];

export function printMusic(): void {
    for (const genre of music) {
        console.log(genre);
    }
}

printMusic();