import { Box, Typography, Link, Divider, Container } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: "background.paper",
      py: 3,
      mt: "auto",
      borderTop: 1,
      borderColor: "divider",
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        gutterBottom
      >
        Built with ❤️ by Apetrei Florin Sebastian
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Link href="#" color="text.secondary" underline="hover">
          Privacy Policy
        </Link>
        <Link href="#" color="text.secondary" underline="hover">
          Terms of Service
        </Link>
        <Link href="#" color="text.secondary" underline="hover">
          Contact Us
        </Link>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Resume Builder. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
