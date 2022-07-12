import styled from 'styled-components';

export const FormInput = styled.input`
  width: auto;
  margin-bottom: 10px;
  background: #383838;
  border: 2px solid #383838;
  color: #fff;
  padding: 0 15px;
  border-radius: 999px;
  transition: 0.4s;
  height: 30px;
  font-family: Montserrat, sans-serif;

  :focus {
    outline: none;
    border-color: #4b9d5e;
  }
`;

export const FormSubmitBtn = styled.button`
  background: #4b9d5e;
  border: none;
  color: #fff;
  padding: 10px 30px;
  margin-bottom: 10px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.4s;
  cursor: pointer;
  justify-content: center;
  font-family: Montserrat, sans-serif;

  :hover {
    background: #64c97c;
  }
`;

export const FormLabel = styled.label`
  color: #fff;
  font-family: Montserrat, sans-serif;
`;
