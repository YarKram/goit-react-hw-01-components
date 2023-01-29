import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  border: 1px solid teal;

  margin-left: 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 50%;
`;

function generateColor() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 15)];
  }
  return `#${code}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;
  background-color: ${generateColor};
  width: calc(100% / 5);
  height: auto;
`;

export const Label = styled.span`
  color: wheat;
  font-size: 16px;
`;

export const Percentage = styled.span`
  color: wheat;
  font-size: 20px;
  font-weight: bold;
`;
