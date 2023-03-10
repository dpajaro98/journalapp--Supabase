import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../ui';
import { Toolbar } from '@mui/material';


const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    
    <Box
        sx={{display:'flex'}}
    >

      <NavBar drawerWidth={drawerWidth} />


      <SideBar drawerWidth={drawerWidth} />
      
        <Box
            component={'main'}
            sx={{flexGrow:1,p:1}}
        >
            <Toolbar/>
            {children}
            
        </Box>

    </Box>
  )
}
