import {
  Box,
  Button,
  Group,
  MultiSelect,
  Select,
  //   NumberInput,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
// import { useForm } from "@mantine/form";
// import { IconClock } from "@tabler/icons-react";

export const CreateBooking = () => {
  return (
    <>
      <Title order={2} ta="center">
        Create Booking
      </Title>
      <Box maw={340} mx="auto" mt="xl">
        <form
        //   onSubmit={form.onSubmit(() => {
        //     if (form.isValid) {
        //       toggle();
        //     }
        //   })}
        >
          <Select
            label="Company"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />

          <DateInput
            mt="md"
            valueFormat="DD/MM/YYYY"
            label="Date"
            placeholder="01/03/2024"
            // {...form.getInputProps("date")}
          />

          <Select
            mt="md"
            label="Timeslot"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />

          <MultiSelect
            mt="md"
            label="Staff"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />

          <TextInput mt="md" label="Contact" />

          <TextInput mt="md" label="Car number" />

          <Textarea
            label="Address"
            mt="md"
            // placeholder="Child sheet, wheelchair, etc."
            // autosize="true"
            minRows={2}
            // {...form.getInputProps("request")}
          />

          {/* <TimeInput
            label="Time"
            mt="md"
            // ref={ref}
            // rightSection={pickerControl}
            // {...form.getInputProps("time")}
          /> */}

          {/* <NumberInput
            label="Number of Pax"
            placeholder="2"
            min={1}
            mt="md"
            // {...form.getInputProps("pax")}
          /> */}

          <Textarea
            label="Remarks"
            mt="md"
            // placeholder="Child sheet, wheelchair, etc."
            // autosize="true"
            minRows={3}
            // {...form.getInputProps("request")}
          />

          <Group justify="center" mt="xl">
            <Button
              type="button"
              //   component={Link}
              //   to={`/restaurant/${pathId}`}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
};
