import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn,SignedOut,UserButton,gutterbottom} from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography ,Button,Box,Grid} from "@mui/material";
import Head from 'next/head'

/////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Home() {
  return (
    <Container maxWidth = "100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name = "description" content = 'Create flashcard from your text'/>
        </Head>

        <AppBar position = "static">
          <Toolbar>
            <Typography variant = "h6" style = {{flexGrow: 1}}>Flashcard Saas</Typography>
            <SignedOut>
              <Button color = "inherit">Login</Button>
              <Button color = "inherit">Sign Up</Button>
            </SignedOut>
            <SignedIn>
            <UserButton/>
            </SignedIn>
          </Toolbar>
        </AppBar>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box sx = {{
          textAlign:'center',
          my: 4,
        }}>
          <Typography variant = "h2" gutterbottom >Welcome to Flashcard SaaS</Typography>
          <Typography variant="h5" gutterbottom sx={{mt: 2}}>The easiest way to create flashcards from your text</Typography>
          <Button variant = 'contained' color = 'primary' sx = {{mt: 2}} >Get started</Button>
        </Box>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box sx = {{my:6}}>
          <Typography variant="h4" components = "h2" gutterbottom> Features</Typography>
          <Grid container spacing = {4}>
            <Grid item xs= {12} md = {4}>
              <Typography variant="h5">Easy Text Input </Typography>
              <Typography>
                {' '} 
                Simply input your text and let our software and do the rest.Creating flashcards has never been easier.
                </Typography>
                </Grid>
 {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Grid item xs= {12} md = {4}>
              <Typography variant="h6" gutterbottom>Smart Flashcards</Typography>
              <Typography>
                {' '}
                Our AI intelligently breaks down your text into concise flashcards, perfect for studying  
                </Typography>
                </Grid>
                <Grid item xs= {12} md = {4}>
              <Typography variant="h6" gutterbottom>Accessible Anywhere</Typography>
              <Typography>
                {' '}
               Access your flashcards from any device, at any time.Study on the go with ease.
                </Typography>
                </Grid>
          </Grid>
        </Box>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<Box sx = {{my:6, textAlign: 'center'}}>
  <Typography variant="h4" gutterbottom>Pricing</Typography>
  <Grid container spacing = {4}> 
            <Grid item xs= {12} md = {6}>
              <Box sx = {{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}>
              <Typography variant="h5" gutterbottom>Basic </Typography>
              <Typography variant="h6" gutterbottom>5$ / month </Typography>
             
              <Typography>
                {' '}
               Access to basic flashcard features and limited storage
                </Typography>
                <Button variant = "contained" color = "primary" sx = {{mt: 2}} gutterbottom>choose basic</Button>
                </Box>
                </Grid>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Grid item xs= {12} md = {6}>
                <Box sx = {{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}>  
               <Typography variant="h5" gutterbottom>Pro</Typography>
              <Typography variant="h6" gutterbottom>10$ / month </Typography>
             
              <Typography>
                {' '}
               Unlimited access to flashcard and storage, with priority support
                </Typography>
                <Button variant = "contained" color = "primary" sx = {{mt: 2}} gutterbottom>choose Pro</Button>
                </Box>
                </Grid>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}            
</Grid>
</Box>
</Container>   
  )
}
