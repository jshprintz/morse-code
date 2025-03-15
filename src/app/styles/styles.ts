import styled from "styled-components";

export const MorseContainer = styled.div`
  width: 60%;
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

export const FormContainer = styled.form`
  width: 80%;
  height: 20%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 10px;
`;

export const TranslationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputBox = styled.textarea`
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
    border-color: #ff6a00;
    box-shadow: 0 0 5px rgba(255, 51, 0, 0.5);
  }
`;

export const Container = styled.div`
  height: 100dvh;
  width: 100dvw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: black;

  box-sizing: border-box;
`;
