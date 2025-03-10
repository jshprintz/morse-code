"use client";
import { useState } from "react";
import styled from "styled-components";
import { conversionTable } from "./conversion";

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
          const formattedLetter: string = letter.toLowerCase();
          const morseTranslation: string[] =
            conversionTable[formattedLetter as keyof typeof conversionTable] ||
            [];

          console.log("morseTranslate", morseTranslation);

          return morseTranslation.map((morse) => {
            console.log("morse", morse);
            return `${morse} `;
          });
        })}
      </MorseContainer>
    </Container>
  );
}

const MorseContainer = styled.div`
  width: 50%;
  height: auto;
  min-height: 200px;
  max-height: 50%;

  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;

  margin: 10px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
`;

const FormContainer = styled.form`
  width: 50%;
  height: 20%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 10px;
`;

const InputBox = styled.textarea`
  height: 90%;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Container = styled.div`
  height: 100dvh;
  width: 100dvw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: black;

  box-sizing: border-box;
`;
