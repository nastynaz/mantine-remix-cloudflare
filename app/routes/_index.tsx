import {Button, Box, Title} from "@mantine/core";
import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <Box>
      <Title order={1}>Welcome to Remix!</Title>
      <Button mt='lg'>Look, I'm styled!</Button>
    </Box>
  );
}
