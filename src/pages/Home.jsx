import React from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';
import Dashboard from '../components/Dashboard';

const Container = styled.div`
  width: 1366px;
  height: 975px;
  background-color: #292738;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
`

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Cards />
        <Dashboard />
      </Wrapper>
    </Container>
  )
}

export default Home;