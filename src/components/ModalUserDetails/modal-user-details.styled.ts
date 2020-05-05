import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 50px;
`;


export const SectionTitle = styled.div`
  color: ${props => props.theme.highlight};
  margin: 15px 0 15px;
`;