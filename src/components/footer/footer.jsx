import { Box, Typography } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#fe7be8",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Todo Listo by Cinthia Sosa💕 . Todos los derechos reservados.
        </Typography>
     
      <FaInstagram />

      <FaLinkedin />

      <FaFacebook />
      </Box>

  );
};
