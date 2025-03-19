import {
  Box,
  Flex,
  Heading,
  Progress,
  Text,
  Avatar,
  VStack,
  HStack,
  Button,
  Divider,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import EditRestaurantDetailsModal from "../modals/EditRestaurantDetailsModal";

import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantProfile = () => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);

  const {
    isOpen: isDetailsOpen,
    onOpen: onDetailsOpen,
    onClose: onDetailsClose,
  } = useDisclosure();
  const {
    isOpen: isKYCOpen,
    onOpen: onKYCOpen,
    onClose: onKYCClose,
  } = useDisclosure();

  return (
    <Box p={6}>
      <Heading mb={6}>Admin Profile</Heading>

      <Flex direction={{ base: "column", md: "row" }} gap={6} align="start">
        <Box flex={1}>
          {/* Profile Completion */}
          <Box mb={6}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Profile Completion
            </Text>
            <Progress
              value={restaurant.profileCompletion}
              size="sm"
              sx={{
                "& > div": {
                  backgroundColor: "#38a169",
                },
              }}
            />
            <Text fontSize="sm" mt={2}>
              {restaurant.profileCompletion}% Complete
            </Text>
          </Box>

         

          {/* Restaurant Details */}
          <VStack align="start" spacing={3} mb={6}>
            <Text fontSize="xl" fontWeight="bold">
              Application Details
            </Text>
            <Divider />
            <Text>
              <strong>Name:</strong> {restaurant.name}
            </Text>
            <Text>
              <strong>Email:</strong> {restaurant.email}
            </Text>
            <Text>
              <strong>Phone:</strong> {restaurant.phone}
            </Text>
            <Text>
              <strong>Address:</strong> {restaurant.address}
            </Text>
            <Text>
              <strong>Cuisine Type:</strong> {restaurant.cuisineType}
            </Text>
            <Button
              leftIcon={<EditIcon />}
              onClick={onDetailsOpen}
              bg="text"
              color="bg"
            >
              Edit Details
            </Button>
          </VStack>

          {/* KYC Details */}
         
        </Box>

        {/* Right Side: Restaurant Logo */}
        <Box textAlign="center">
          <Avatar size="2xl" src="https://via.placeholder.com/300" />
        </Box>
      </Flex>

      {/* Modals */}
      <EditRestaurantDetailsModal
  isOpen={isDetailsOpen}
  onClose={onDetailsClose}
/>
    
    </Box>
  );
};

export default RestaurantProfile;