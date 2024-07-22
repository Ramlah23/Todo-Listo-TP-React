import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Filtros = ({ filtro, setFiltro }) => {
  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "center", borderColor:"violet", ":hover":"violet"}}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="filtro-label">Filtrar</InputLabel>
        <Select
          labelId="filtro-label"
          value={filtro}
          label="Filtrar"
          onChange={handleChange}
        >
          <MenuItem value="todas">Todas</MenuItem>
          <MenuItem value="completas">Completas</MenuItem>
          <MenuItem value="incompletas">Incompletas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filtros;