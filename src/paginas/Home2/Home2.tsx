import { Grid, Typography } from '@material-ui/core'
import { Box } from "@mui/material";
import Carrossel from '../../componentes/Carrossel/Carrossel'
import Lista from '../../componentes/Lista/Lista'
import './QueroAjudar.css'

function Home() {
  return (
    <Grid container >
      <Grid item xs={12}>
        <Carrossel />
      </Grid>

      <Grid container xs={12} sm={12}justifyContent="center" className='colorWhite padding15'>
            <Box width='25%' padding={12} className='marginText'>
                <Typography className='fntWork'>Se informe sobre diversos temas e opiniões</Typography>
            </Box>
            <Box width='35%' padding={12} className='marginText'>
                <Typography className='fntWork'>A TamoJuntas começou uma grande campanha de doação para que mais voluntárias consigam continuar o trabalho de assistência multidisciplinar com mulheres vítimas de violência. Dessa forma, você...
                </Typography>
                <Typography style={{fontWeight: "bold" }}>Saiba mais</Typography>
            </Box>
      </Grid>

      <Grid container xs={12} sm={12} direction="row" justifyContent="center" className='colorLight padding15'>
          <Box width='25%' padding={13} className='marginText'>
              <Typography className='fntWork'>Se informe sobre diversos temas e opiniões</Typography>
          </Box>
          <Box width='35%' padding={13} className='marginText'>
              <Typography className='fntWork'>A TamoJuntas começou uma grande campanha de doação para que mais voluntárias consigam continuar o trabalho de assistência multidisciplinar com mulheres vítimas de violência. Dessa forma, você...Saiba mais
              </Typography>
              <Typography style={{fontWeight: "bold" }}>Saiba mais</Typography>
          </Box>
      </Grid>

    </Grid>
  )
}

export default Home