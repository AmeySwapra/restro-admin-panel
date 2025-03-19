import { Box, Heading, SimpleGrid, Card, CardBody, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const storeEarnings = {
  restaurant: {
    weekly: [5000, 6200, 5700, 6900, 6400, 8200, 7600],
    monthly: [26000, 31000, 29000, 33000],
  },
  groceryStore: {
    weekly: [3200, 3400, 3900, 4700, 4900, 5300, 6100],
    monthly: [16000, 19000, 21000, 23000],
  },
  veggiesStore: {
    weekly: [2100, 2400, 2900, 3600, 3900, 4400, 5100],
    monthly: [11000, 12500, 13500, 14500],
  },
  fruitsStore: {
    weekly: [1400, 2200, 2600, 2800, 3600, 3900, 4700],
    monthly: [8500, 9500, 10500, 11500],
  },
  meatStore: {
    weekly: [1100, 1400, 2100, 2700, 3200, 3700, 4200],
    monthly: [5500, 6500, 7500, 8500],
  },
  liquorStore: {
    weekly: [600, 1200, 1600, 2100, 2600, 3200, 3800],
    monthly: [3500, 4500, 5500, 6500],
  },
};

const getEarningsChartData = (store, period) => {
  const labels = period === 'weekly' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  const data = storeEarnings[store][period];
  return {
    labels,
    datasets: [
      {
        label: 'Earnings (₹)',
        data: data,
        borderColor: period === 'weekly' ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)',
        backgroundColor: period === 'weekly' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true },
  },
};

const RestroEarns = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Store Earnings Overview</Heading>
      <Tabs variant="enclosed">
        <TabList>
          {Object.keys(storeEarnings).map((store) => (
            <Tab key={store}>{store.replace(/([A-Z])/g, ' $1').trim()}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.keys(storeEarnings).map((store) => (
            <TabPanel key={store}>
              <Tabs variant="soft-rounded" colorScheme="blue" mb={6}>
                <TabList>
                  <Tab>Weekly Earnings</Tab>
                  <Tab>Monthly Earnings</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box mb={6}>
                      <Line
                        data={getEarningsChartData(store, 'weekly')}
                        options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Weekly Earnings' } } }}
                      />
                    </Box>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={6}>
                      <Card bg="pink.100">
                        <CardBody>
                          <Text fontSize="xl" fontWeight="bold">Total Weekly Earnings</Text>
                          <Text fontSize="2xl" color="pink.800">₹{storeEarnings[store].weekly.reduce((acc, val) => acc + val, 0)}</Text>
                        </CardBody>
                      </Card>
                    </SimpleGrid>
                  </TabPanel>
                  <TabPanel>
                    <Box mb={6}>
                      <Line
                        data={getEarningsChartData(store, 'monthly')}
                        options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Monthly Earnings' } } }}
                      />
                    </Box>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={6}>
                      <Card bg="green.100">
                        <CardBody>
                          <Text fontSize="xl" fontWeight="bold">Total Monthly Earnings</Text>
                          <Text fontSize="2xl" color="green.800">₹{storeEarnings[store].monthly.reduce((acc, val) => acc + val, 0)}</Text>
                        </CardBody>
                      </Card>
                    </SimpleGrid>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RestroEarns;
