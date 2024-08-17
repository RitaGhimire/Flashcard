'use client';
import { useUser } from '@clerk/nextjs';
import { Container, Box, Typography, Paper, TextField, Button } from '@mui/material';
import { writeBatch, collection, doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation'; // Switch to `next/navigation` for useRouter in App directory
import { useState, useEffect } from 'react';

export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true); // This ensures the component is mounted in the browser
    }, []);

    if (!isMounted) {
        // Prevent SSR issues by not rendering until the component is mounted
        return null;
    }

    const handleSubmit = async () => {
        fetch('/api/generate', {
            method: 'POST',
            body: text,
        })
        .then((res) => res.json())
        .then((data) => setFlashcards(data))
        .catch((error) => console.error('Error generating flashcards:', error));
    };

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name');
            return;
        }

        const batch = writeBatch(db);
        const userDocRef = doc(collection(db, 'users'), user.id);
        const docSnap = await getDoc(userDocRef);
        const collections = docSnap.exists() ? docSnap.data().flashcards || [] : [];

        if (collections.find((f) => f.name === name)) {
            alert('Flashcard collection with the name already exists');
            return;
        } else {
            collections.push({ name });
            batch.set(userDocRef, { flashcards: collections }, { merge: true });
        }

        const colRef = collection(userDocRef, name);
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef);
            batch.set(cardDocRef, flashcard);
        });

        await batch.commit();
        handleClose();
        router.push('/flashcards');
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Generate Flashcards</Typography>
                <Paper sx={{ p: 4, width: '100%' }}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        label="Enter text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Generate Flashcards
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
}
