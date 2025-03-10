"use client";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  // Handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
    console.log("Submitted value:", submittedValue);
  };

  return (
    <Container>
      <h1>Morse Code App</h1>
      <FormContainer onSubmit={handleSubmit}>
        <InputBox
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text here..."
        />
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </FormContainer>
    </Container>
  );
}

const FormContainer = styled.form`
  width: 50%;
  height: 20%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SubmitBtn = styled.button`
  width: auto;
  height: 10%;
  padding: 10px;
  border: 1px solid green;
  background-color: green;
  border-radius: 10px;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
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

  background-color: grey;

  box-sizing: border-box;
`;
