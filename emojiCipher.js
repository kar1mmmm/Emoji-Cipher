const emojiMap = {
    'a': '🐑', 'b': '🎟', 'c': '🔥', 'd': '💎', 'e': '🌍', 
    'f': '🦊', 'g': '🍇', 'h': '🚁', 'i': '🍦', 'j': '🕹', 
    'k': '🔑', 'l': '🍋', 'm': '🌙', 'n': '🎵', 'o': '🐙', 
    'p': '🍕', 'q': '👑', 'r': '🚀', 's': '☀️', 't': '🦖', 
    'u': '🦄', 'v': '🌋', 'w': '🌊', 'x': '❌', 'y': '🎨', 
    'z': '⚡', ' ': '🌌', '.': '💧', ',': '🧧'
};

const reverseEmojiMap = Object.fromEntries(
    Object.entries(emojiMap).map(([key, value]) => [value, key])
);

const inputArea = document.getElementById('inputText');
const outputDisplay = document.getElementById('outputEmoji');
const actionBtn = document.getElementById('actionBtn');
const copyBtn = document.getElementById('copyBtn');

actionBtn.addEventListener('click', () => {
    const text = inputArea.value;
    if (!text) return;

    const isEmojiInput = [...text].some(char => reverseEmojiMap[char]);

    if (isEmojiInput) {
        let decodedText = "";
        for (let char of [...text]) {
            decodedText += reverseEmojiMap[char] || char;
        }
        outputDisplay.innerText = decodedText;
    } else {
        let result = "";
        for (let char of text.toLowerCase()) {
            result += emojiMap[char] || char;
        }
        outputDisplay.innerText = result;
    }
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputDisplay.innerText);
    alert("Hasil berhasil disalin!");
});