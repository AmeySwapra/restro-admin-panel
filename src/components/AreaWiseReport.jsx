import React, { useState } from 'react';
import { Box, Heading, VStack, HStack, Text, Select, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AreaWiseReport = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi');

 
  const cityData = {
    Delhi: [120, 90, 80, 70, 60],
    Mumbai: [100, 85, 75, 65, 55],
    Bangalore: [110, 95, 85, 75, 65],
    Hyderabad: [90, 80, 70, 60, 50],
    Kolkata: [80, 70, 60, 50, 40],
  };

  
  const filteredData = {
    labels: ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5'],
    datasets: [
      {
        label: 'Orders',
        data: cityData[selectedCity],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Area-wise Report</Heading>
      <HStack mb={4}>
        <Text>Select City:</Text>
        <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} width="150px">
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Kolkata">Kolkata</option>
        </Select>
      </HStack>
      <Bar data={filteredData} />
      <HStack mt={4} spacing={4}>
        <Card>
          <CardHeader>Total Orders</CardHeader>
          <CardBody>{filteredData.datasets[0].data.reduce((a, b) => a + b, 0)}</CardBody>
        </Card>
        <Card>
          <CardHeader>Top Area</CardHeader>
          <CardBody>Area 1 - {filteredData.datasets[0].data[0]} Orders</CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default AreaWiseReport;