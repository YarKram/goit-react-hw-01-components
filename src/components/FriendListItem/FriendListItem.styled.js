import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  width: fit-content;
  min-width: 350px;
  height: fit-content;

  padding: 10px;

  border: 1px solid teal;
  border-radius: 5px;

  margin: 0 0 10px 0;
  box-shadow: 2px 2px grey;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
