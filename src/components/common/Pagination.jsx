import { HStack, IconButton, Text, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <HStack spacing={2} justify="center" mt={6}>
    
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        aria-label="Previous Page"
        color="text"
        variant="outline"
      />

      
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          boxShadow={'lg'}
          onClick={() => onPageChange(index + 1)}
          color={currentPage === index + 1 ? 'bg' : 'gray'}
          bg={currentPage === index + 1 ? 'text' : 'bg'}
          variant={currentPage === index + 1 ? 'solid' : 'outline'}
          aria-label={`Page ${index + 1}`}
        >
          {index + 1}
        </Button>
      ))}

      
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        aria-label="Next Page"
        color="text"
        variant="outline"
      />
    </HStack>
  );
};

export default Pagination;