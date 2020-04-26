import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  box-shadow: 4px 3px 10px 2px rgba(199, 199, 199, 1);
  display: flex;
  padding: 20px 30px;
  border-radius: 10px;
  margin-bottom: 15px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const DetailsWrapper = styled.div`
  flex: 3;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
`;
