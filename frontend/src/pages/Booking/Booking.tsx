import {
  Button,
  Flex,
  Group,
  Pagination,
  Table,
  TextInput,
  Title,
} from "@mantine/core";

export const Booking = () => {
  const elements = [
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      date: "25/05/2024",
      time: "10:00",
      address: "123, ABC Street, Singapore",
      carnum: "SGB1234A",
    },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.time}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.carnum}</Table.Td>
      <Table.Td>{element.address}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex justify={"space-between"}>
        <Title>Bookings</Title>
        <Button ml={"auto"}>Create Booking</Button>
      </Flex>
      <Flex align={"center"} mt="xl" gap="lg">
        <TextInput placeholder="search company" w={"800px"}></TextInput>
        <Button>Search</Button>
      </Flex>
      <Table mt="lg" verticalSpacing={"lg"}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Company</Table.Th>
            <Table.Th>Car No.</Table.Th>
            <Table.Th>Address</Table.Th>
            <Table.Th>Phone</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Pagination.Root total={10} mt="xl">
        <Group gap={5} justify="center">
          <Pagination.First />
          <Pagination.Previous />
          <Pagination.Items />
          <Pagination.Next />
          <Pagination.Last />
        </Group>
      </Pagination.Root>
    </>
  );
};
