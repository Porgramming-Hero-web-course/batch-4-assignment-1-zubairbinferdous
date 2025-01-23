// function that count the word how many time come in a  sentence
function countWordOccurrences(sentence: string, word: string): number {
  const Sentence = sentence;
  const Word = word;
  const SentenceConvertToWords = Sentence.split(" ");
  let count = 0;
  for (let w of SentenceConvertToWords) {
    if (w === Word) {
      count++;
    }
  }
  return count;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
