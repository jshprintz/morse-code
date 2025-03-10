export const formatLetter = (letter: string) => {
  const isSpace: boolean = letter === " ";

  if (isSpace) {
    return "space";
  }

  return letter.toLowerCase();
};
