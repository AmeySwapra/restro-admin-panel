import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  VStack,
  HStack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

const DeliveryAgents = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedAgent, setSelectedAgent] = useState(null); 
  const { isOpen, onOpen, onClose } = useDisclosure(); 

 
  const agents = [
    {
      id: 1,
      name: 'Rahul Sharma',
      phone: '+91 9876543210',
      joinDate: '2023-01-15',
      totalDeliveries: 120,
      lastDelivery: '2023-10-05 - Butter Chicken (₹450)',
      rating: 4.5,
      feedbacks: ['Great service!', 'Always on time.'],
      complaints: ['Late delivery once.'],
    },
    {
      id: 2,
      name: 'Vikram Singh',
      phone: '+91 9876543211',
      joinDate: '2023-02-10',
      totalDeliveries: 90,
      lastDelivery: '2023-10-06 - Paneer Tikka (₹300)',
      rating: 4.2,
      feedbacks: ['Polite and professional.'],
      complaints: [],
    },
    {
      id: 3,
      name: 'Ankit Patel',
      phone: '+91 9876543212',
      joinDate: '2023-03-22',
      totalDeliveries: 150,
      lastDelivery: '2023-10-07 - Chicken Biryani (₹250)',
      rating: 4.7,
      feedbacks: ['Excellent delivery service.'],
      complaints: [],
    },
    {
      id: 4,
      name: 'Suresh Kumar',
      phone: '+91 9876543213',
      joinDate: '2023-04-18',
      totalDeliveries: 80,
      lastDelivery: '2023-10-08 - Dal Makhani (₹200)',
      rating: 4.0,
      feedbacks: ['Good service.'],
      complaints: ['Late delivery once.'],
    },
    {
      id: 5,
      name: 'Rajesh Mehta',
      phone: '+91 9876543214',
      joinDate: '2023-05-05',
      totalDeliveries: 70,
      lastDelivery: '2023-10-09 - Naan (₹100)',
      rating: 4.4,
      feedbacks: [],
      complaints: ['Rude behavior once.'],
    },
    {
      id: 6,
      name: 'Amit Verma',
      phone: '+91 9876543215',
      joinDate: '2023-06-12',
      totalDeliveries: 110,
      lastDelivery: '2023-10-10 - Tandoori Roti (₹50)',
      rating: 4.3,
      feedbacks: ['Fast delivery.'],
      complaints: [],
    },
    {
      id: 7,
      name: 'Deepak Yadav',
      phone: '+91 9876543216',
      joinDate: '2023-07-19',
      totalDeliveries: 60,
      lastDelivery: '2023-10-11 - Veg Biryani (₹180)',
      rating: 4.1,
      feedbacks: ['Polite and efficient.'],
      complaints: [],
    },
    {
      id: 8,
      name: 'Pradeep Singh',
      phone: '+91 9876543217',
      joinDate: '2023-08-25',
      totalDeliveries: 100,
      lastDelivery: '2023-10-12 - Chicken Curry (₹220)',
      rating: 4.6,
      feedbacks: ['Always on time.'],
      complaints: [],
    },
    {
      id: 9,
      name: 'Manoj Tiwari',
      phone: '+91 9876543218',
      joinDate: '2023-09-30',
      totalDeliveries: 50,
      lastDelivery: '2023-10-13 - Fish Curry (₹280)',
      rating: 4.0,
      feedbacks: [],
      complaints: ['Late delivery.'],
    },
    {
      id: 10,
      name: 'Ravi Shastri',
      phone: '+91 9876543219',
      joinDate: '2023-10-01',
      totalDeliveries: 40,
      lastDelivery: '2023-10-14 - Butter Naan (₹120)',
      rating: 4.5,
      feedbacks: ['Good service.'],
      complaints: [],
    },
    
  ];

  
  const filteredAgents = agents.filter((agent) => {
    return (
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.phone.includes(searchQuery)
    );
  });

  
  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    onOpen();
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Delivery Agents</Heading>

      {/* Search Bar */}
      <Input
        placeholder="Search by name or phone number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
      />

      {/* Agents Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Join Date</Th>
            <Th>Total Deliveries</Th>
            <Th>Last Delivery</Th>
            <Th>Rating</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredAgents.map((agent, index) => (
            <Tr
              key={agent.id}
              sx={{
                backgroundColor: index % 2 === 0 ? 'gray.500' : 'white', 
                _hover: { backgroundColor: 'gray.100' }, 
              }}
            >
              <Td>{agent.name}</Td>
              <Td>{agent.phone}</Td>
              <Td>{agent.joinDate}</Td>
              <Td>{agent.totalDeliveries}</Td>
              <Td>{agent.lastDelivery}</Td>
              <Td>
                <Badge colorScheme={agent.rating >= 4 ? 'green' : 'yellow'}>
                  {agent.rating}
                </Badge>
              </Td>
              <Td>
                <Button size="sm" onClick={() => handleAgentClick(agent)}>
                  View Details
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Agent Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delivery Agent Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedAgent && (
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Name:</strong> {selectedAgent.name}
                </Text>
                <Text>
                  <strong>Phone:</strong> {selectedAgent.phone}
                </Text>
                <Text>
                  <strong>Join Date:</strong> {selectedAgent.joinDate}
                </Text>
                <Text>
                  <strong>Total Deliveries:</strong> {selectedAgent.totalDeliveries}
                </Text>
                <Text>
                  <strong>Last Delivery:</strong> {selectedAgent.lastDelivery}
                </Text>
                <Text>
                  <strong>Rating:</strong> {selectedAgent.rating}
                </Text>
                <Text>
                  <strong>Feedbacks:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedAgent.feedbacks.length > 0 ? (
                    selectedAgent.feedbacks.map((feedback, index) => (
                      <Text key={index}>- {feedback}</Text>
                    ))
                  ) : (
                    <Text>No feedbacks yet.</Text>
                  )}
                </VStack>
                <Text>
                  <strong>Complaints:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedAgent.complaints.length > 0 ? (
                    selectedAgent.complaints.map((complaint, index) => (
                      <Text key={index}>- {complaint}</Text>
                    ))
                  ) : (
                    <Text>No complaints yet.</Text>
                  )}
                </VStack>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DeliveryAgents;