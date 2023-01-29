import styled from 'styled-components';

export const TransactionTable = styled.table`
  border: 2px solid teal;
  border-collapse: collapse;
  margin-left: 10px;

  width: 600px;
  height: 50px;
  text-align: center;

  & td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: teal;
    color: white;
    text-align: center;
  }
`;
