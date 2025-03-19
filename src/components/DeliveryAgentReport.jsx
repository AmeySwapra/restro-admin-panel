import React from 'react';
import { Box, Heading, VStack, HStack, Text, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const DeliveryAgentReport = () => {
  // Dummy data for delivery agents
  const agentData = {
    labels: ['Agent A', 'Agent B', 'Agent C', 'Agent D'],
    datasets: [
      {
        data: [50, 40, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Delivery Agent Report</Heading>
       <Box w={'500px'} h={'500px'} mx="auto">
        <PolarArea data={agentData} />
       </Box>
      <HStack mt={4} spacing={4}>
        <Card>
          <CardHeader>Top Agent</CardHeader>
          <CardBody>Agent A - 50 Deliveries</CardBody>
        </Card>
        <Card>
          <CardHeader>Lowest Agent</CardHeader>
          <CardBody>Agent D - 20 Deliveries</CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default DeliveryAgentReport;