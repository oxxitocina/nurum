import { Center, Container, Flex, Text } from "@mantine/core";
import { supabase } from "../form";
import { useEffect, useState } from "react";

export const GuestsPage = () => {
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const { data, error } = await supabase.from("guests").select("*");

        if (error) {
          throw error;
        }

        console.log(data);
        setGuests([...data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGuests();
  }, []);

  return (
    <Container size={"xs"}>
      <Center>
        <Text style={{ fontSize: "2rem" }}>Список гостей</Text>
      </Center>

      {guests.map((guest) => {
        return (
          <Flex key={guest?.id} justify={"space-around"}>
            <Text style={{ display: "block" }}>{guest?.name}</Text>
            <Text style={{ display: "block" }}>{guest?.status}</Text>
          </Flex>
        );
      })}
    </Container>
  );
};
