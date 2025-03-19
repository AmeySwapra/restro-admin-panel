import React from 'react';
import { Box, Heading, VStack, HStack, Text, Card, CardHeader, CardBody, SimpleGrid } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const VendorWiseReport = () => {
  
  const vendorData = {
    labels: ['Restaurant A', 'Restaurant B', 'Restaurant C', 'Restaurant D'],
    datasets: [
      {
        data: [300, 200, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Vendor/Restaurant-wise Report</Heading>
      {/* Reduced size of Pie chart */}
      <Box w="500px" h="500px" mx="auto">
        <Pie data={vendorData} />
      </Box>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Card>
          <CardHeader>Top Restaurant</CardHeader>
          <CardBody>Restaurant A - 300 Orders</CardBody>
        </Card>
        <Card>
          <CardHeader>Lowest Restaurant</CardHeader>
          <CardBody>Restaurant D - 100 Orders</CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default VendorWiseReport;
