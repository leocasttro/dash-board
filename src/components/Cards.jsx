import React, { useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { ImHappy2 } from 'react-icons/im';


const Container = styled.div`
  width: 1120px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 379px;
`

const Card = styled.div`
  background-color: #363447;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  width: 296px;
`
const Title = styled.h1`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 400;
`

const Icon = styled.span`
  font-size: 50px;
  color: #81fbb8;
`

const Desc = styled.span`
  font-size: 25px;
  color: #81fbb8;
  font-weight: 500;
`
const Details = styled.span`
  font-size: 12px;
  color: #FFFFFF;
`

const GrafContainer = styled.div`
  margin: 5px 40px;
`

const Cards = () => {
  const [options1, setOptions1] = useState({
    chart: {
      id: 'basic-donut'
    },
    labels: ['Esperado', 'Alcançado'],
    legend: {
      position: 'bottom',
      offsetY: 12,
      labels: {
        colors: '#ffff'
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 4,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    colors: [ '#4A4556', '#CE9FFC'],
  })
  const [series1, setSeries1] = useState([60, 100]);

  const [options2, setOptions2] = useState({
    chart: {
      id: 'basic-donut'
    },
    labels: ['Esperado', 'Alcançado'],
    legend: {
      position: 'bottom',
      offsetY: 12,
      labels: {
        colors: '#ffff'
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 4,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    colors: [ '#4A4556', '#DF9780'],
  })
  const [series2, setSeries2] = useState([10, 55]);

  return (
    <Container>
    <Wrapper>
      <Card>
        <Title>NPS geral</Title>
        <IconContainer>
          <Icon>
            <ImHappy2/>
          </Icon>
          <Desc>Execelente!</Desc>
        </IconContainer>
        <Details>NPS Score 75</Details>
      </Card>
      <Card>
        <Title>Vendas fechadas</Title>
        <GrafContainer>
          <ReactApexChart options={options1} series={series1} type="donut" height={300} />
        </GrafContainer>
      </Card>
      <Card>
        <Title>Meta mensal</Title>
        <GrafContainer>
          <ReactApexChart options={options2} series={series2} type="donut" height={300} />
        </GrafContainer>
      </Card>
    </Wrapper>
    </Container>
  )
}

export default Cards;