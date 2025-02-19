function generateFrames(seed, paddingLength) {
    let paddedLength = BOX_LENGTH - 2*paddingLength;
    let repeatCount = Math.ceil(BOX_LENGTH / seed.length) + 1;
    let repeatedSeed = seed.repeat(repeatCount);

    let padding = " ".repeat(paddingLength);
    let frames = []

    for (let i = 0; i < seed.length; i++) {
        let trimed = repeatedSeed.slice(i, i + paddedLength);
        frames.push(`${padding}${trimed}${padding}\n`);
    }
    return frames
}

const BOX_LENGTH = 29;

const ELEMENTS = [
    generateFrames("NWnwu:>>=-", 4),
    generateFrames("|p+=~-|i+=~-|a+=~-|c+=~-|o+=~-|s+=~-", 9),
    generateFrames(":>~-. ", 12),
]
const PATTERN = [
    0, 0, 
    1, 1, 
    2, 2, 2, 
    1, 1, 
    0, 0, 
    2, 2,
    0, 0,
    1,
    2,
];

function createUpdater() {
    let index = 0;

    return function() {
        let frame = "";
        for (let i = 0; i < PATTERN.length; i++) {
            element = ELEMENTS[PATTERN[i]];
            frame += element[(index + i) % element.length]
        }
        document.getElementById("towerBox").innerText = frame;
        index ++;
    };
}

const updateText = createUpdater();
setInterval(updateText, 75);