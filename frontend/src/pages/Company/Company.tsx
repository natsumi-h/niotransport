import {
  Button,
  Flex,
  Group,
  Pagination,
  Table,
  TextInput,
  Title,
} from "@mantine/core";

export const Company = () => {
  const elements = [
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Daiso Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Uniqlo Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Sushiro Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "NTUC Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
    {
      name: "Ikea Singapore",
      phone: "12345678",
      address: "123, ABC Street, Singapore",
    },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>{element.address}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex justify={"space-between"}>
        <Title>Companies</Title>
        <Button ml={"auto"}>Create Company</Button>
      </Flex>

      <Flex align={"center"} mt="lg" gap="lg">
        <TextInput placeholder="search company" w={"800px"}></TextInput>
        <Button>Search</Button>
      </Flex>

      <Table mt="lg" verticalSpacing={"lg"}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Address</Table.Th>
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
