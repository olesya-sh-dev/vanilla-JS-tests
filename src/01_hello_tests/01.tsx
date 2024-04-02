export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

// const sentenses = "hello my typescript!";

export function splitIntoWords(sentenses: string) {
  const words = sentenses.toLowerCase().split(" ");
  return words
    .filter((w) => w !== "" && w !== "-")
    .map((w) => w.replace("!", ""));
}
