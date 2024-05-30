import { Box, Button, Divider, Flex, Text, Title } from "@mantine/core";

export const BookingDetail = () => {
  return (
    <>
      <Title>Booking Detail</Title>
      <Box mt="xl">
        <Text>Date: 25/05/2024</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="xl">
        <Text>Time: 11:00</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="xl">
        <Text>Address: 239 Waterloo Street, 123456</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="xl">
        <Text>Phone: 12345678</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="xl">
        <Text>Staff: Johny Tan / Jerome Tan / Johnson Tan / Fenny Tan </Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="xl">
        <Text>Car No.: XHV123</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="xl">
        <Text>Remarks: </Text>
        <Divider mt="md"></Divider>
      </Box>

      <Flex align={"center"} mt="xl" justify={"center"} gap="md">
        <Button>Update</Button>
        <Button color="red">Delete</Button>
      </Flex>
    </>
  );
};
