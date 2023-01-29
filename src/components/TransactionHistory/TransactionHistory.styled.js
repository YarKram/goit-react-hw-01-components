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

// export const TransactionHeader = styled.thead`
//   height: 50px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   text-align: left;
//   background-color: teal;
//   color: white;
//   padding: 20px;
//   text-align: center;
// `;

// export const TransactionHeaderRow = styled.tr`
//   /* display: block; */
// `;
// export const TransactionBodyRow = styled.tr`
//   height: 50px;
//   padding-top: 12px;
//   padding-bottom: 12px;
// `;

// export const TransactionBody = styled.tbody`
//   height: 50px;
//   text-align: center;
//   border: 1px solid teal;
//   color: grey;

//   &${TransactionBodyRow} {
//     :nth-child(even) {
//       background-color: #f2f2f2;
//     }
//   }
// `;

// export const TransactionCell = styled.td`
//   border: 1px solid teal;
// `;
