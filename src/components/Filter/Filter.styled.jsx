import styled from 'styled-components';

export const FilterLabel = styled.label`
  color: #fff;
  margin-bottom: 5px;
  font-family: Montserrat, sans-serif;
`;

export const FilterInput = styled.input`
  width: auto;
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
