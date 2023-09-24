import { styled } from "styled-components";

const TableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 1px solid #C0C0C0;
  font-weight: bold;
`;

const TableHeaderItem = styled.span`
  flex: 1;
`;

function TableHeader({data}) {
  return (
    <>
      <h1>Referrals - {data.length}</h1>
      <TableHeaderContainer>
        <TableHeaderItem>Referral event</TableHeaderItem>
        <TableHeaderItem>Advocate</TableHeaderItem>
        <TableHeaderItem>Friend</TableHeaderItem>
        <TableHeaderItem>Referral status</TableHeaderItem>
      </TableHeaderContainer>
    </>
  );
}

export { TableHeader };
