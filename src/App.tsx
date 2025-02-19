import "./App.css";
import {
  Container,
  Center,
  Image,
  Box,
  Text,
  Stack,
  Button,
  Divider,
  Transition,
} from "@mantine/core";
import { Fade, Slide } from "react-awesome-reveal";
import wreath from "./assets/wreath.png";
import cream from "./assets/cream.png";
import feather from "./assets/feather.png";
import featherBig from "./assets/featherBigger.png";
import flower from "./assets/flower.png";
import { Animation } from "./common/animation";
import { h3 } from "motion/react-m";

function App() {
  return (
    <>
      <Container my="xs" pos="relative">
        <Box style={{ position: "relative" }}>
          <Image
            src={cream}
            w="auto"
            fit="contain"
            pos="fixed"
            className="cream_right"
          />
          <Image
            src={cream}
            w="auto"
            fit="contain"
            pos="fixed"
            className="cream"
          />
          <Image
            src={feather}
            w="auto"
            fit="contain"
            pos="fixed"
            className="feather"
          />
          <Image
            src={featherBig}
            w="auto"
            fit="contain"
            pos="fixed"
            className="feather_big"
            style={{ zIndex: "-1" }}
          />
          <Image
            src={feather}
            w="auto"
            fit="contain"
            pos="fixed"
            className="feather_right"
          />
          <Image
            src={featherBig}
            w="auto"
            fit="contain"
            pos="fixed"
            style={{ zIndex: "-1" }}
            className="feather_big_right"
          />
        </Box>

        <Stack>
          <Stack justify="center" style={{ paddingTop: "5rem" }}>
            <Animation>
              <Center
                style={{
                  position: "relative",
                  paddingTop: "3rem",
                  paddingBottom: "3rem",
                }}
              >
                <Text fz={"2rem"} style={{ color: "#503d05" }}>
                  49
                </Text>

                <Image
                  src={wreath}
                  h={150}
                  w={150}
                  fit="contain"
                  pos={"absolute"}
                />
              </Center>
            </Animation>
          </Stack>
          <Box>
            <Animation>
              <Text
                fz={"2rem"}
                style={{
                  textAlign: "center",
                  color: "#846815",
                  display: "block",
                  paddingTop: "1rem",
                }}
              >
                Дорогие <br></br> родные и друзья!
              </Text>
            </Animation>
            <Divider my="lg" style={{ borderColor: "#846815" }} />
            <Animation>
              <Text
                fz={"lg"}
                style={{
                  textAlign: "center",
                  color: "#846815",
                  display: "block",
                  paddingTop: "1rem",
                }}
              >
                Этот день будет для нас будет особенно важным. Поэтому мы хотим
                провести его в кругу друзей и близких! <br></br>
                <br></br>С большим удовольстивием приглашаем вас на юбилей!
              </Text>
            </Animation>

            <Divider my="lg" style={{ borderColor: "#846815" }} />
            <Animation>
              <Text
                fz={"2rem"}
                style={{
                  textAlign: "center",
                  color: "#846815",
                  display: "block",
                  paddingTop: "1rem",
                }}
              >
                С уважением, <br></br>Нурум - Нургуль!
              </Text>
            </Animation>

            <Animation>
              <Center style={{ paddingTop: "1rem" }}>
                <Image src={flower} w="auto" fit="contain" h={"20vh"}></Image>
              </Center>
            </Animation>

            <Divider my="lg" style={{ borderColor: "#846815" }} />
            <Animation>
              <Text
                fz={"1.6rem"}
                td={"underline"}
                style={{
                  textAlign: "center",
                  display: "block",
                  color: "#503d05",
                }}
              >
                ЖДЁМ ВАС:
              </Text>
            </Animation>
            <Animation>
              <Text
                fz={"1.2rem"}
                style={{
                  textAlign: "center",

                  display: "block",
                }}
              >
                Суббота
              </Text>
            </Animation>
            <Animation>
              <Text
                fz={"1.8rem"}
                style={{
                  textAlign: "center",

                  display: "block",
                }}
              >
                12.04.2025
              </Text>
            </Animation>
            <Animation>
              <Text
                fz={"1.2rem"}
                style={{
                  textAlign: "center",
                }}
              >
                Начало в 17:00
              </Text>
            </Animation>

            <Divider my="lg" style={{ borderColor: "#846815" }} />

            <Animation>
              <Text
                fz={"2rem"}
                td={"underline"}
                style={{
                  textAlign: "center",
                  color: "#503d05",
                  display: "block",
                }}
              >
                Адрес:
              </Text>
            </Animation>
            <Animation>
              <Text
                fz={"1rem"}
                style={{
                  textAlign: "center",
                }}
              >
                Город Петропавл, Улица Шоссе Кожаберген жырау, 39/5, Семейная
                ресторация
              </Text>
            </Animation>
            <Animation>
              <Text
                fz={"1.5rem"}
                style={{
                  textAlign: "center",
                  color: "#503d05",
                  display: "block",
                }}
              >
                Усадьба
              </Text>
            </Animation>
          </Box>

          <Stack>
            <Animation>
              <Text style={{ textAlign: "center" }}>
                Для вашего удобства мы подготовили карту. Надеемся что вы легко
                найдете место проведения свадьбы
              </Text>
            </Animation>

            <Animation>
              <Center>
                <a href="https://2gis.kz/petropavlovsk/gallery/firm/70000001064925134/photoId/30258560091044653?m=69.124021%2C54.835301%2F19.28">
                  <Button
                    variant="filled"
                    bg={"#846815"}
                    style={{ fontFamily: "Montserrat" }}
                  >
                    2GIS
                  </Button>
                </a>
              </Center>
            </Animation>
          </Stack>

          <Divider my="lg" style={{ borderColor: "#846815" }} />

          <Stack>
            <Animation>
              <Text
                fz={"2rem"}
                style={{
                  textAlign: "center",
                  color: "#846815",
                  display: "block",
                  paddingTop: "1rem",
                }}
              >
                Ждём вас с нетерпением!
              </Text>
            </Animation>

            <Animation>
              <Center style={{ paddingTop: "1rem" }}>
                <Image src={flower} w="auto" fit="contain" h={"20vh"}></Image>
              </Center>
            </Animation>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default App;
