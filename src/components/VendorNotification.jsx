import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Input,
  Button,
  IconButton,
  Text,
  useToast,
} from '@chakra-ui/react';
import { BellIcon, DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';

const VendorNotification = () => {
  const toast = useToast();
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order received! Please confirm ASAP.", isEditing: false },
    { id: 2, message: "Order cancelled by customer. Check your dashboard.", isEditing: false },
  ]);
  
  const [newNotification, setNewNotification] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleBellClick = (notification) => {
    toast({
      title: "Notified",
      description: `Notification sent: "${notification.message}"`,
      status: "success",
      duration: 2000,
      isClosable: true,
       position : 'top-right'
    });
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    toast({
      title: "Deleted",
      description: "Notification deleted.",
      status: "error",
      duration: 2000,
      isClosable: true,
       position : 'top-right'
    });
  };

  const handleEdit = (id, currentMessage) => {
    setEditingId(id);
    setEditingText(currentMessage);
  };

  const handleEditSave = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, message: editingText, isEditing: false } : n
      )
    );
    setEditingId(null);
    setEditingText("");
    toast({
      title: "Edited",
      description: "Notification updated.",
      status: "info",
      duration: 2000,
      isClosable: true,
       position : 'top-right'
    });
  };

  const handleAddNotification = () => {
    if (newNotification.trim() === "") return;
    const newNotif = {
      id: Date.now(),
      message: newNotification,
      isEditing: false,
    };
    setNotifications([newNotif, ...notifications]);
    setNewNotification("");
    toast({
      title: "Added",
      description: "New notification added.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position : 'top-right'
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} m={3}>
      <Text fontSize="xl" mb={4}>Vendor Notifications</Text>
      {/* Form to add new notification */}
      <HStack mb={4}>
        <Input
          placeholder="Enter new notification"
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleAddNotification}>
          Add Notification
        </Button>
      </HStack>
      <VStack spacing={3} align="stretch">
        {notifications.map((notification, index) => (
          <HStack
            key={notification.id}
            justifyContent="space-between"
            p={3}
            bg={index % 2 === 0 ? "gray.500" : "white"}
            color={index % 2 === 0 ? "white" : "black"}
            _hover={{ bg: "gray.100", color: "black" }}
            borderRadius="md"
          >
            {editingId === notification.id ? (
              <Input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <Text flex="1">{notification.message}</Text>
            )}
            <HStack spacing={2}>
              {editingId === notification.id ? (
                <IconButton
                  aria-label="Save edit"
                  icon={<CheckIcon />}
                  size="sm"
                  onClick={() => handleEditSave(notification.id)}
                />
              ) : (
                <IconButton
                  aria-label="Edit notification"
                  icon={<EditIcon color={'blue'} boxSize={'20px'}/>}
                  size="sm"
                  onClick={() => handleEdit(notification.id, notification.message)}
                />
              )}
              <IconButton
                aria-label="Send notification"
                icon={<BellIcon color={'green'} boxSize={'20px'} />}
                size="sm"
                onClick={() => handleBellClick(notification)}
              />
              <IconButton
                aria-label="Delete notification"
                icon={<DeleteIcon color={'red'} boxSize={'20px'} />}
                size="sm"
                onClick={() => handleDelete(notification.id)}
              />
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default VendorNotification;
