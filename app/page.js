import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
import NextLink from 'next/link';
import Head from 'next/head';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard Saas
          </Typography>
          <SignedOut>
            <div>
              {/* Correct usage of NextLink with Button */}
              <NextLink href="/sign-in" passHref>
                <Button color="inherit">Login</Button>
              </NextLink>

              <NextLink href="/sign-up" passHref>
                <Button color="inherit">Sign Up</Button>
              </NextLink>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          The easiest way to create flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Easy Text Input</Typography>
            <Typography>
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month
              </Typography>
              <Typography>
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month
              </Typography>
              <Typography>
                Unlimited access to flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
