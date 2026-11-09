import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
export default function TopBar(){

    return (<AppBar position='static'
    >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <WaterDropIcon sx={{display:{xs:'none', md:'flex}, mr:1'}}}/>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          HemaGoblin
          </Typography>
            </Toolbar>

        </Container>
    </AppBar>
    )
}