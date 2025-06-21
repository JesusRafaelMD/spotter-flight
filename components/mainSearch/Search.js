"use client"
import { Person, SwapHoriz } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react'

export const Search = () => {
  const [tipoViaje, settipoViaje] = useState("1");
  return (
    <div className='bg-gray-500 h-52 w-full rounded-xl p-2' >
      <div className='flex flex-row gap-8'>
        <InputLabel id="demo-simple-select-label">Tipo de viaje</InputLabel>
        <Select defaultValue="1">
          <MenuItem value="1">Ida y vuelta</MenuItem>
          <MenuItem value="2">Solo ida</MenuItem>
          <MenuItem value="3">Varias ciudades</MenuItem>
        </Select>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Tipo de viaje</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipoViaje}
            label="Tipo de viaje"
            onChange={(e) => settipoViaje(e.target.value)}
          >
            <MenuItem value="1">Ida y vuelta</MenuItem>
            <MenuItem value="2">Solo ida</MenuItem>
            <MenuItem value="3">Varias ciudades</MenuItem>
          </Select>
        </FormControl>
        <div><SwapHoriz/> Ida y Vuelta</div>
        <div><Person/> 1 </div>
        <div>Clase turista</div>
      </div>
    </div>
  )
}

export default Search;
