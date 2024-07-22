

import { Button, ButtonGroup } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Filtros = ({ setFiltro }) => {
  return (
    <ButtonGroup sx={{marginTop:"20px", }} variant="contained" aria-label="outlined primary button group">
      <Button sx={{backgroundColor: "#fe7be8", borderColor: "violet", }} color="secondary" onClick={() => setFiltro('todas')}>Todas</Button>
      <Button sx={{backgroundColor: "#fe7be8", borderColor: "violet",  }} color="secondary" onClick={() => setFiltro('completas')}>Completas</Button>
      <Button sx={{backgroundColor: "#fe7be8", borderColor: "violet",  }} color="secondary" onClick={() => setFiltro('incompletas')}>Incompletas</Button>
    </ButtonGroup>
  );
};

export default Filtros;