import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  margin: 25px auto;
  border: 1px solid #4a6741;
  border-radius: 4px;
  color: #4a6741;
  font-weight: 700;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 50px 20px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  width: 120px;
  height: 25px;
  color: #cbe368;
  background-color: #4a6741;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  text-align: start;
  margin: 0 50px 10px;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export { Container, Wrapper, Label, Button, List, ListItem };
