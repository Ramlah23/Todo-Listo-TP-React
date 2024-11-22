import { Box, Typography } from "@mui/material";

export const Footer = () => { 
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: { xs: "auto", md: "100%" },
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#f5c6cb", // rosa pastel
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)", // Añade sombra suave
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Todo Listo by Cinthia Sosa💕 . Todos los derechos reservados.
      </Typography>
    </Box>
  );
};