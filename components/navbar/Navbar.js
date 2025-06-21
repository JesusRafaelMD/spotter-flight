import React from 'react'
import { Button, Drawer } from '@mui/material';
import { Apps, Bed, Brightness4, Flight, House, Luggage, TravelExplore } from '@mui/icons-material';
import { ExpandableMenu } from './ExpandableMenu';

export const Navbar = () => {
  
  return (
    <div className='w-full fixed top-0 z-50 bg-white shadow-md h-16 text-black flex items-center justify-between px-4'>
      <div className='hidden lg:flex items-center gap-6'>
        <ExpandableMenu/>
        <div className='w-auto bg-black text-white'>Spotter</div>
        <Button variant='outlined'> <Luggage/> Viajes</Button>
        <Button variant='outlined'> <TravelExplore/> Explorar</Button>
        <Button variant='outlined'> <Flight/> Vuelos</Button>
        <Button variant='outlined'> <Bed/> Hoteles</Button>
        <Button variant='outlined'> <House/> Alquileres de vacaciones</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Brightness4/>
        <Apps/>
        <Button variant='outlined'>Iniciar sesión</Button>
        <Button variant='contained' color='primary'>Registrarse</Button>
      </div>
    </div>
  )
}
