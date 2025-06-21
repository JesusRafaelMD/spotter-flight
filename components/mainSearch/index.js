import { Container, Typography } from '@mui/material';
import React from 'react'
import Search from './Search';

export const Index = () => {
  return (
    <Container maxWidth="lg" className="flex flex-col items-center justify-center mt-16">
      <img src="/mainBackground.svg" alt="Main Background" className="w-full h-auto" />
      <Typography variant="h2">Vuelos</Typography>
      <Search />
    </Container>
  )
}

export default Index;