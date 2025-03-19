import React, { useState } from 'react';
import { Box, Input, Grid, Card, CardBody, Heading, Text } from '@chakra-ui/react';

const RestroDiscounts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const discounts = [
    { id: 1, name: 'Flat 20% Off', details: 'Valid on orders above $10', restaurant: 'Pizza Palace' },
    { id: 2, name: 'Buy 1 Get 1 Free', details: 'Applicable on selected items', restaurant: 'Burger Hub' },
    { id: 3, name: '10% Off on Groceries', details: 'Valid for Instamart orders above $15', restaurant: 'FreshMart' },
    { id: 4, name: 'Free Delivery', details: 'On orders above $25', restaurant: 'QuickBites' },
  ];

  const filteredDiscounts = discounts.filter(discount =>
    discount.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discount.restaurant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={5}>
      <Heading size="lg" mb={5}>Restaurant & Vendor Discounts</Heading>
      <Input 
        placeholder="Search by discount name or restaurant/vendor" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        mb={5} 
      />
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {filteredDiscounts.map(discount => (
          <Card key={discount.id} p={4} shadow="md">
            <CardBody>
              <Heading size="md">{discount.name}</Heading>
              <Text>{discount.details}</Text>
              <Text fontWeight="bold" mt={2}>Restaurant/Vendor: {discount.restaurant}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default RestroDiscounts;
