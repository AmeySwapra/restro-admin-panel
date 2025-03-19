import React, { useState } from 'react';
import { Box, Input, Grid, Card, CardBody, Heading, Text, IconButton, Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const CouponCode = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [coupons, setCoupons] = useState([
    { id: 1, code: 'SAVE20', discount: '20% Off', details: 'Valid on orders above $50' },
    { id: 2, code: 'FREESHIP', discount: 'Free Shipping', details: 'Applicable on all orders' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState({ id: null, code: '', discount: '', details: '' });

  const handleDelete = (id) => {
    setCoupons(coupons.filter(coupon => coupon.id !== id));
    toast({ title: 'Coupon Deleted', status: 'error', duration: 2000, isClosable: true });
  };

  const handleEdit = (coupon) => {
    setCurrentCoupon(coupon);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (currentCoupon.id) {
      setCoupons(coupons.map(c => (c.id === currentCoupon.id ? currentCoupon : c)));
    } else {
      setCoupons([...coupons, { ...currentCoupon, id: Date.now() }]);
    }
    setIsModalOpen(false);
    toast({ title: 'Coupon Saved', status: 'success', duration: 2000, isClosable: true });
  };

  const filteredCoupons = coupons.filter(coupon =>
    coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={5}>
      <Heading size="lg" mb={5}>Coupons Code</Heading>
      <Input 
        placeholder="Search by coupon code" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        mb={5} 
      />
      <Button leftIcon={<FaPlus />} colorScheme="blue" mb={5} onClick={() => { setCurrentCoupon({ id: null, code: '', discount: '', details: '' }); setIsModalOpen(true); }}>
        Add New Coupon
      </Button>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {filteredCoupons.map(coupon => (
          <Card key={coupon.id} p={4} shadow="md">
            <CardBody>
              <Heading size="md">{coupon.code}</Heading>
              <Text>{coupon.discount}</Text>
              <Text fontSize="sm" mt={2}>{coupon.details}</Text>
              <Box mt={3} display="flex" justifyContent="space-between">
                <IconButton icon={<FaEdit />} aria-label="Edit" onClick={() => handleEdit(coupon)} />
                <IconButton icon={<FaTrash />} colorScheme="red" aria-label="Delete" onClick={() => handleDelete(coupon.id)} />
              </Box>
            </CardBody>
          </Card>
        ))}
      </Grid>

      {/* Modal for Adding/Editing Coupon */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentCoupon.id ? 'Edit Coupon' : 'Add New Coupon'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Coupon Code" mb={3} value={currentCoupon.code} onChange={(e) => setCurrentCoupon({ ...currentCoupon, code: e.target.value })} />
            <Input placeholder="Discount Details" mb={3} value={currentCoupon.discount} onChange={(e) => setCurrentCoupon({ ...currentCoupon, discount: e.target.value })} />
            <Input placeholder="Additional Info" value={currentCoupon.details} onChange={(e) => setCurrentCoupon({ ...currentCoupon, details: e.target.value })} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>{currentCoupon.id ? 'Save Changes' : 'Add Coupon'}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CouponCode;
