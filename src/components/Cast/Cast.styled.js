import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 16px;

  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 8px;
  width: 200px;

  border: 1px solid grey;
  border-radius: 4px;
`;

export const WraperInfo = styled.div`
  margin: 0 0 8px;
`;

export const ActorName = styled.p`
  padding: 0;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const Character = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #fff;
`;

export const ActorImg = styled.img`
  display: block;
  margin: 0 auto;
`;