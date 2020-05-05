import styled from 'styled-components';
import { theme } from '../../app.styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(135, 136, 142, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.basicBackground};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;

  @media (min-width: 768px) {
    position: relative;
    width: 380px;
    height: 570px;
    border-radius: 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
