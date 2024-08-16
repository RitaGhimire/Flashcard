'use client'
import {useUser} from '@clerk/nextjs'
import {Container} from ' @mui/material'
import { writeBatch } from "firebase/firestore"
import { useRouter } from "next/router"
import { useState } from 'react'
import { TextField, Typography } from '@mui/material'

export default function Generate(){
    const {isLoaded,isSignedIn,user}= useUser()
    const {flashcards,setFlashcards} = useState([])
    const {flipped,setFlipped} = useState([])
    const {text,setText} = useState('')
    const {name,setName} = useState('')
    const {open,setOpen} = useState(false)
    const router = useRouter()
    const handleSubmit = async ()=>{
        fetch ('api/generate',{
            method: 'POST',
            body: text,
        })
        .then((res) => res.json())
        .then(data > setFlashcards(data))
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))   
    }
    const handleOpen = () =>{
        setOpenI(true)
    }
    const handleClose = () =>{
        setOpenI(false)
    }

    const saveFlashcards = async () => {
        if (!name){
            alert('Please enter a name')
            return 
        }

        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'),user.id)
        const docSnap = await getDoc(userDocRef)
        if(docSnap.exists()){
const collection = docSnap.data().flashcards || []
if (collections.find((f) => f.name === name)){
    alert("Flashcard collection with the name already exists")
    return 
}
else{
    collection.push({name})
    batch.set(userDocRef, {flashcards: collections}, {merge: true})
}
}

else {
    batch.set(userDocRef, {flashcards: [{name}]})
}

const colRef = collection(userDocRef, name)
flashcards.forEach((flashcard) => {
    const cardDocRef = doc(colRef)
    batch.set(cardDocRef, flashcard)
})

await batch.commit()
handleClose()
router.push('/flashcards')
}
return  <Container maxWidth = "md">
    
    <Box sx = {{
        mt:4 , mb:6, display: ' flex', flexDirection: 'column', alignItems: ' center'
    }}
    >
        <Typography variant = " h4">Generate Flashcards </Typography>
        <Paper sx = {{p: 4, width: ' 100%'}} >
            <TextField value = {text}
            onChange= {(e) => setText(e.target.value)} 
            label = " Enter text" 
            fullWidth
            multiline
            rows = {4}
            variant = "outlined" 
            sx = {{
                mb: 2,
            }}/>
        </Paper>
    </Box>
</Container>
        
}
