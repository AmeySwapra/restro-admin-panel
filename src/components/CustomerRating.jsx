import { useState } from "react";
import {
  Box,
  Heading,
  Select,
  VStack,
  HStack,
  Text,
  Badge,
  Progress,
  Divider,
  Grid,
  GridItem,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Pagination from "./common/Pagination";

const CustomerRating = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const toast = useToast();

  const ratings = [
    {
      id: 1,
      name: "John Doe",
      stars: 5,
      feedback: "Amazing food and great service! Loved the Margherita Pizza.",
    },
    {
      id: 2,
      name: "Jane Smith",
      stars: 4,
      feedback: "The pasta was delicious, but the service was a bit slow.",
    },
    {
      id: 3,
      name: "Robert Brown",
      stars: 5,
      feedback: "Best Italian food in town! Highly recommend the Carbonara.",
    },
    {
      id: 4,
      name: "Emily Davis",
      stars: 5,
      feedback: "Fantastic experience! The ambiance was perfect for a dinner date.",
    },
    {
      id: 5,
      name: "Michael Johnson",
      stars: 3,
      feedback: "The food was good, but the portions were a bit small.",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      stars: 5,
      feedback: "Absolutely loved the Chocolate Lava Cake! Will come back soon.",
    },
    {
      id: 7,
      name: "Daniel Lee",
      stars: 2,
      feedback: "The food was cold when it arrived. Disappointing.",
    },
    {
      id: 8,
      name: "Olivia Martin",
      stars: 5,
      feedback: "Delicious Bites never disappoints! Great food and service.",
    },
    {
      id: 9,
      name: "James White",
      stars: 1,
      feedback: "Very bad experience. The food was undercooked.",
    },
    {
      id: 10,
      name: "Sophia Harris",
      stars: 5,
      feedback: "The staff was very friendly, and the food was amazing!",
    },
    {
      id: 11,
      name: "David Clark",
      stars: 4,
      feedback: "Overall a good experience. The tiramisu was excellent.",
    },
    {
      id: 12,
      name: "Isabella Lewis",
      stars: 5,
      feedback: "The best restaurant in the city! Loved everything.",
    },
    {
      id: 13,
      name: "Ethan Walker",
      stars: 3,
      feedback: "The food was okay, but the prices are a bit high.",
    },
    {
      id: 14,
      name: "Mia Hall",
      stars: 5,
      feedback: "Great food and quick service. Highly recommended!",
    },
    {
      id: 15,
      name: "Alexander Allen",
      stars: 5,
      feedback: "Perfect place for a family dinner. Loved the ambiance.",
    },
    {
      id: 16,
      name: "Lucas Wright",
      stars: 4,
      feedback: "The pizza was fantastic, but the salad was average.",
    },
    {
      id: 17,
      name: "Emma Turner",
      stars: 1,
      feedback: "The service was terrible, and the food was bland.",
    },
    {
      id: 18,
      name: "Liam Scott",
      stars: 5,
      feedback: "Delicious Bites is my favorite restaurant! Always great.",
    },
    {
      id: 19,
      name: "Charlotte Green",
      stars: 2,
      feedback: "The food was cold, and the staff was unresponsive.",
    },
    {
      id: 20,
      name: "Benjamin Baker",
      stars: 3,
      feedback: "The food was decent, but the wait time was too long.",
    },
    {
      id: 21,
      name: "Ava Mitchell",
      stars: 5,
      feedback: "Perfect experience! The pasta was cooked to perfection.",
    },
    {
      id: 22,
      name: "Noah Carter",
      stars: 4,
      feedback: "Great food, but the dessert menu could be better.",
    },
    {
      id: 23,
      name: "Ella Adams",
      stars: 5,
      feedback: "Outstanding service and delicious food!",
    },
    {
      id: 24,
      name: "William Parker",
      stars: 3,
      feedback: "The food was good, but the ambiance was too noisy.",
    },
    {
      id: 25,
      name: "Sophia Campbell",
      stars: 2,
      feedback: "The portions were too small for the price.",
    },
    {
      id: 26,
      name: "Henry Gonzalez",
      stars: 5,
      feedback: "Exceptional food and service! Will definitely return.",
    },
    {
      id: 27,
      name: "Olivia Perez",
      stars: 4,
      feedback: "Great experience overall. Loved the dessert!",
    },
    {
      id: 28,
      name: "Lucas Evans",
      stars: 5,
      feedback: "Delicious Bites is amazing! The pizza is to die for.",
    },
    {
      id: 29,
      name: "Amelia Turner",
      stars: 3,
      feedback: "The food was okay, but nothing special.",
    },
    {
      id: 30,
      name: "Jack Murphy",
      stars: 2,
      feedback: "The service was slow, and the food was mediocre.",
    },
  ];

  const averageRating = (ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length).toFixed(1);

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => {
    const count = ratings.filter((r) => r.stars === star).length;
    return { star, count, percentage: (count / ratings.length) * 100 };
  });

  const filteredRatings = ratings.filter((rating) =>
    filter === "all" ? true : rating.stars === parseInt(filter)
  );

  const totalPages = Math.ceil(filteredRatings.length / itemsPerPage);
  const paginatedRatings = filteredRatings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFeedbackAction = (action, feedback) => {
    toast({
      title: action === "approve" ? "Feedback Approved" : "Feedback Rejected",
      description:
        action === "approve"
          ? `The feedback from "${feedback.name}" is now displayed on the app.`
          : `The feedback from "${feedback.name}" has been removed.`,
      status: action === "approve" ? "success" : "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box p={6}>
      <Heading mb={4}>Customer Reviews & Feedbacks</Heading>
      <HStack alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {averageRating} ⭐
        </Text>
        <Text fontSize="lg" color="gray.500">
          ({ratings.length} reviews)
        </Text>
      </HStack>

      {/* Rating Distribution */}
      <VStack align="stretch" mb={6}>
        {ratingDistribution.map(({ star, count, percentage }) => (
          <HStack key={star} align="center">
            <Text minW="30px">{star}⭐</Text>
            <Progress value={percentage} w="sm" colorScheme="green" />
            <Text minW="40px">{count}</Text>
          </HStack>
        ))}
      </VStack>
      <Divider mb={6} />

      {/* Filter Dropdown */}
      <Select
        placeholder="Filter by star rating"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setCurrentPage(1);
        }}
        mb={6}
        maxW="200px"
      >
        <option value="all">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </Select>

      {/* Ratings Grid */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        {paginatedRatings.map((rating) => (
          <GridItem
            key={rating.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="lg"
          >
            <HStack justify="space-between" mb={2}>
              <Badge colorScheme="green" fontSize="sm">
                {"⭐".repeat(rating.stars)}
              </Badge>
              <Text fontSize="sm" color="gray.500">
                {rating.name}
              </Text>
            </HStack>
            <Text mb={3}>{rating.feedback}</Text>
            <HStack justify="flex-end">
              <IconButton
                icon={<CheckIcon />}
                colorScheme="green"
                aria-label="Approve Feedback"
                size="sm"
                onClick={() => handleFeedbackAction("approve", rating)}
              />
              <IconButton
                icon={<CloseIcon />}
                colorScheme="red"
                aria-label="Reject Feedback"
                size="sm"
                onClick={() => handleFeedbackAction("reject", rating)}
              />
            </HStack>
          </GridItem>
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default CustomerRating;
