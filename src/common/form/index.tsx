import {
  Button,
  TextInput,
  Text,
  Radio,
  Stack,
  Center,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./index.module.css";

export const supabase = createClient(
  "https://tafamoxopmirmljwwrer.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZmFtb3hvcG1pcm1sand3cmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NjkwMDUsImV4cCI6MjA1NTU0NTAwNX0.qaQAIlfXS4CHp2NRRrkRmjjA0sm03hB5cE5b4Y5d__Y"
);

export const GuestForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      status: "",
    },
  });

  const [opened, { open, close }] = useDisclosure(false);

  async function sendData(guest: any) {
    try {
      const { data, error } = await supabase
        .from("guests")
        .insert({ name: guest?.name, status: guest?.status })
        .select("*");

      if (error) {
        throw error;
      }
      open();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <TextInput
        placeholder="Имя"
        key={form.key("name")}
        {...form.getInputProps("name")}
        styles={{
          input: {
            backgroundColor: "#846815",
            color: "white",
            border: "none",
            "::placeholder": {
              color: "red",
              opacity: 1,
            },
          },
        }}
        classNames={{ input: classes.textInput }}
        style={{ "::placeholder": { color: "white" } }}
      />
      <Text
        fz={"1rem"}
        style={{
          textAlign: "center",
          display: "block",
        }}
      >
        Если будете с парой то укажите оба имени
      </Text>

      <Modal
        opened={opened}
        onClose={close}
        title="Спасибо за ответ"
        centered
        styles={{
          content: { backgroundColor: "white" },
          title: { backgroundColor: "white" },
          header: { backgroundColor: "white" },
        }}
      >
        <Text>Можете закрыть форму</Text>
      </Modal>

      <Center>
        <Radio.Group name="status" withAsterisk>
          <Stack mt="xs">
            <Radio
              key={1}
              {...form.getInputProps("status")}
              value="Придет один"
              label="Я с удовольствием приду"
              styles={{
                radio: {
                  color: "white",
                  backgroundColor: "#846815",
                },
              }}
            />
            <Radio
              key={2}
              {...form.getInputProps("status")}
              value="Придет с парой"
              label="Буду со своей парой"
              styles={{
                radio: {
                  color: "white",
                  backgroundColor: "#846815",
                },
              }}
            />
            <Radio
              key={3}
              {...form.getInputProps("status")}
              value="Не придет"
              label="К сожалению, не смогу присутствовать"
              styles={{
                radio: {
                  color: "white",
                  backgroundColor: "#846815",
                },
              }}
            />
          </Stack>
        </Radio.Group>
      </Center>

      <Center>
        <Button
          onClick={() => {
            sendData(form.getValues());
          }}
          style={{
            backgroundColor: "#846815",
            fontFamily: "Montserrat",
            marginTop: "1rem",
          }}
        >
          Отправить
        </Button>
      </Center>
    </div>
  );
};
