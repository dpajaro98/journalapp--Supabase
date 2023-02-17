import { Button,Grid,TextField,Link,Typography } from '@mui/material'
import './styles/AuthStyles.css'
import React from 'react'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'



export const LoginPage = () => {
  return (
    <AuthLayout title='Inicio de Sesión'>
      <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Correo"
                type='email'
                placeholder='ingrese su correo'
                fullWidth              
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Contraseña"
                type='password'
                placeholder='ingrese su contraseña'
                fullWidth              
              />
            </Grid>
            <Grid
            container
            spacing={2}
            sx={{mb:2,mt:2}}
            >
              <Grid item xs={12} sm={6} >
                <Button variant='contained'  fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google/>
                  <Typography sx={{ml:0.5}}>Google</Typography>
                </Button>
              </Grid>
              

            </Grid>
            <Grid container direction="row" justifyContent={'end'}>
              <Link component={RouterLink} color='inherit' to="/auth/register">
              create una cuenta
              </Link>
              
                
              </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}