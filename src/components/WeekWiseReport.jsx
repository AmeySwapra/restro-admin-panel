import React, { useState } from 'react';
import { Box, Heading, VStack, HStack, Text, Select, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeekWiseReport = () => {
  const [selectedMonth, setSelectedMonth] = useState('October');

  const weeklyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Orders',
        data: [80, 120, 90, 110],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  
  const filteredData = {
    ...weeklyData,
    datasets: weeklyData.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.map((value) => (selectedMonth === 'October' ? value : value * 0.3)), 
    })),
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Week-wise Report</Heading>
      <HStack mb={4}>
        <Text>Select Month:</Text>
        <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} width="150px">
          <option value="October">October</option>
          <option value="September">September</option>
          <option value="August">August</option>
        </Select>
      </HStack>
      <Bar data={filteredData} />
      <HStack mt={4} spacing={4}>
        <Card>
          <CardHeader>Total Orders</CardHeader>
          <CardBody>{filteredData.datasets[0].data.reduce((a, b) => a + b, 0)}</CardBody>
        </Card>
        <Card>
          <CardHeader>Total Revenue</CardHeader>
          <CardBody>₹{filteredData.datasets[0].data.reduce((a, b) => a + b, 0) * 100}</CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default WeekWiseReport;