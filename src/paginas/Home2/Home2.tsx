import { Grid } from '@material-ui/core'
import Carrossel from '../../componentes/Carrossel/Carrossel'
import Lista from '../../componentes/Lista/Lista'

function Home() {
  return (
    <Grid container style={{ marginTop: "8px"}}>
      <Grid item xs={12}>
        {/* <Lista /> */}
        <Carrossel />
      </Grid>
    </Grid>
  )
}

export default Home