import styled from 'styled-components';

export const ContactInfo = styled.p`
  color: #fff;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactRemoveBtn = styled.button`
  padding: 0;
  min-width: 30px;
  height: 30px;
  border: none;
  border-radius: 999px;
  background: #64c97c;
  cursor: pointer;
  :hover {
    background: rgb(254, 97, 97);
  }
`;
