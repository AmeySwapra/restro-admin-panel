import React, { useState } from 'react';
import { Box, Heading, VStack, HStack, Text, Select, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonthWiseReport = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  // Dummy data for monthly orders
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        data: [120, 150, 200, 180, 250, 300, 280, 320, 400, 380, 450, 500],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Month-wise Report</Heading>
      <HStack mb={4}>
        <Text>Select Year:</Text>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} width="150px">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </Select>
      </HStack>
      <Line data={monthlyData} />
      <HStack mt={4} spacing={4}>
        <Card>
          <CardHeader>Total Orders</CardHeader>
          <CardBody>4,320</CardBody>
        </Card>
        <Card>
          <CardHeader>Total Revenue</CardHeader>
          <CardBody>₹12,34,567</CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default MonthWiseReport;