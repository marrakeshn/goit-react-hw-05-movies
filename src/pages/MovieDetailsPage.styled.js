import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WraperInfo = styled.div`
  display: flex;
  gap: 16px;
  color: #fff;
  padding: 8px 0;
  border-bottom: 1px solid #F5C518;
`;

export const Wraper = styled.div`
  border-bottom: 1px solid #F5C518;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const WraperBtn = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #F5C518;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: white;
  color: black;
  font-weight: 600;
  padding: 4px 16px;
  width: 150px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 4px;
`;