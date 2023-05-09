import styled from 'styled-components';

export const SearchWraper = styled.div`
  padding: 8px;
  margin-bottom: 8px;

  border-bottom: 1px solid grey;
`;

export const SearchLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: 350px;

  padding: 8px 16px 8px 8px;
  font-size: 16px;

  border: 1px solid grey;
  border-radius: 4px;
`;

export const SearchField = styled.input`
  border: none;
  outline: none;

  width: 100%;
`;

export const SearchBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;