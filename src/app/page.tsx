"use client";
import { useState } from "react";
import { conversionTable } from "./conversion";
import {
  Container,
  FormContainer,
  InputBox,
  MorseContainer,
} from "./styles/styles";
import { formatLetter } from "./helpers/formatLetter";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  // Handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const submittedValueDestruct: string[] = inputValue.split("") ?? [];

  return (
    <Container>
      <h1 style={{ margin: "10px" }}>Morse Code App</h1>
      <FormContainer>
        <InputBox
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text here..."
        />
      </FormContainer>
      <MorseContainer>
        {submittedValueDestruct.map((letter) => {
          const formattedLetter: string = formatLetter(letter);
          const morseTranslation: string[] =
            conversionTable[formattedLetter as keyof typeof conversionTable] ||
            [];

          console.log("morseTranslate", morseTranslation);

          return `${formattedLetter}=${morseTranslation.map((morse) => {
            console.log("morse", morse);
            return `${morse as string}`;
          })} :: `;
        })}
      </MorseContainer>
    </Container>
  );
}
