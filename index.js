const emojiDictionary = require('./emojiDictionary.json');

function encodeToEmoji(text) {
    const words = text.split(" ");
    const textWithEmojis = words.map(word => emojiDictionary[word.toLowerCase()] || word);
    return textWithEmojis.join(" ");
}

module.exports = encodeToEmoji;
