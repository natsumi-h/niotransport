import { Box, Button, Divider, Flex, Text, Title } from "@mantine/core";

export const CompanyDetail = () => {
  return (
    <>
      <Title>Daiso Singapore</Title>
      <Box mt="xl">
        <Text>Email: email@email.com</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="lg">
        <Text>Address: 239 Waterloo Street, 123456</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="lg">
        <Text>Phone: 12345678</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Box mt="lg">
        <Text>Timeslot: 9:00 / 13:00 / 16:00</Text>
        <Divider mt="md"></Divider>
      </Box>
      <Flex align={"center"} mt="xl" justify={"center"} gap="md">
        <Button>Update</Button>
        {/* <Button color="red">Delete</Button> */}
      </Flex>
    </>
  );
};
