import { AppBar, Container, Toolbar, Typography, Button, Box } from "@mui/material";
import NextLink from "next/link"; // Use Next.js Link for routing
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <NextLink href="/sign-in" passHref>
            <Button color="inherit" component="a">
              Login
            </Button>
          </NextLink>
          <NextLink href="/sign-up" passHref>
            <Button color="inherit" component="a">
              Sign Up
            </Button>
          </NextLink>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Typography variant="h4">Sign Up</Typography>
        <SignUp />
      </Box>
    </Container>
  );
}
