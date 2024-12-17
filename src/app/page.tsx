import { Box } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Muhamad Nicky Salim | Home",
  description: "Welcome to my personal website!",
};

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "90.5vh",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Welcome to my personal website!</h1>
    </Box>
  );
}
