import React, { useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

const Container = styled.div`
  margin: 60px 0;
  width: 1120px;
  height: 314px;
  background-color: #363447;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.h1`

`
const Wrapper = styled.div``
const UpDown = styled.div``
const Grafic = styled.div``


const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
      labels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
        }
      }
    },
    margin: {
      left: 50,
      right: 50
    }
  });

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70]
    }
  ]);
  return (
    <Container>
      <Title></Title>
      <Wrapper>
        <UpDown>

        </UpDown>
        <Grafic>
          <ReactApexChart options={options} series={series} type="bar" height={300} />
        </Grafic>
      </Wrapper>
    </Container>
  )
}

export default Dashboard;