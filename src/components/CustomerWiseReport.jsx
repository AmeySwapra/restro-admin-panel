import React from 'react';
import { Box, Heading, VStack, HStack, Text, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerWiseReport = () => {
  // Dummy data for customer orders
  const customerData = {
    labels: ['New Customers', 'Returning Customers'],
    datasets: [
      {
        data: [200, 500],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Customer-wise Report</Heading>
      <Box w={'500px'} h={'500px'} mx="auto">
        <Doughnut data={customerData} />
      </Box>
      <HStack mt={4} spacing={4}>
        <Card>
          <CardHeader>Total Customers</CardHeader>
          <CardBody>700</CardBody>
        </Card>
        <Card>
          <CardHeader>Returning Customers</CardHeader>
          <CardBody>500</CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default CustomerWiseReport;