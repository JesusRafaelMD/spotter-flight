"use client"
import { Drawer, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { SUBMENUS, SUBMENUS_SECTION_2 } from '../../utils/submenus';
import * as Icons from '@mui/icons-material';

export const ExpandableMenu = () => {
  const [expandableMenu, setExpandableMenu] = useState(false);
  return (
    <div>
      <MenuIcon className='cursor-pointer' onClick={() => setExpandableMenu(!expandableMenu)} />
      <Drawer open={expandableMenu} onClose={() => setExpandableMenu(false)}>
        <div className='p-4'>
          <h2 className='text-lg font-semibold'>Menu</h2>
          <div>
            {SUBMENUS.map((submenu, idx) => {
              const IconComponent = Icons[submenu.icon] || Icons.Menu;
              return (
                <ul key={idx} className=''>
                  <li>
                    <Button
                      startIcon={<IconComponent fontSize='small' />}
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '1rem',
                        borderRadius: 4,
                        px: 2,
                        py: 2,
                        //color: 'inherit',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                      }}
                    >
                      {submenu.title}
                    </Button>
                  </li>
                </ul>
              );
            })}
            <Divider sx={{ my: 2 }} />
            {SUBMENUS_SECTION_2.map((submenu, idx) => {
              const IconComponent = Icons[submenu.icon] || Icons.Menu;
              return (
                <ul key={idx} className=''>
                  <li>
                    <Button
                      startIcon={<IconComponent fontSize='small' />}
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '1rem',
                        borderRadius: 4,
                        px: 2,
                        py: 2,
                        //color: 'inherit',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                      }}
                    >
                      {submenu.title}
                    </Button>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  )
}
