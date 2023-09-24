import styled from 'styled-components';

import { TableCell } from '../TableCell';

const TableRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 1px solid #C0C0C0;
`;

const GrayText = styled.div`
  color: #999999;
`;

const BoldText = styled.div`
  font-weight: bold;
`;

const RegularText = styled.div`
  font-weight: 400;
`

const StatusFalse = styled.div`
  color: #ca332f;
`

const StatusTrue = styled.div`
  color: #a1a2a5;
`

function TableRow({ referral }) {
  const { referralEvent, advocate, friend, referralStatus } = referral;

  return (
    <TableRowContainer>
      <TableCell>
        <BoldText>Purchase</BoldText>
        <GrayText>{referralEvent.date}<GrayText/></GrayText>
        <BoldText>{referralEvent.price}</BoldText>
      </TableCell>
      <TableCell>
        <BoldText>{advocate.emailAdvocate}</BoldText>
        <RegularText>{advocate.role}</RegularText>
      </TableCell>
      <TableCell>
        <BoldText>{friend.emailFriend}</BoldText>
        <RegularText>{friend.roleFriend}</RegularText>
      </TableCell>
      <TableCell>
        <BoldText>{referralStatus.nameStatus}</BoldText>
        <RegularText>{referralStatus.status ? <StatusTrue>Passed fraud checks</StatusTrue>: <StatusFalse>Marked as fraud</StatusFalse>}</RegularText>
      </TableCell>
    </TableRowContainer>
  );
}

export { TableRow };
