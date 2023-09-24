import styled from 'styled-components';

const TableCellContainer = styled.div`
  flex: 1;
`;

const PaddedTableCell = styled(TableCellContainer)`
  & > * {
    padding-bottom: 10px;
  }
`;

function TableCell({ children }) {
  return (
    <PaddedTableCell>{children}</PaddedTableCell>
  );
}

export { TableCell };
