import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
}));

const ActionCards = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  const handleClick = (route: string) => {
    if (!isLoaded) return; // Wait for auth to load
    if (isSignedIn) {
      router.push(route);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <StyledCard sx={{ width: "50%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create New Resume
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start building your professional resume now.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => handleClick("/resume/create")}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              mt: "auto",
              bgcolor: "#4338CA",
              "&:hover": { bgcolor: "#3730A3" },
            }}
          >
            Create Resume
          </Button>
        </CardActions>
      </StyledCard>
      <StyledCard sx={{ width: "50%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            My Resumes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View and edit your existing resumes.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => handleClick("/resume")}
            variant="contained"
            startIcon={<VisibilityIcon />}
            sx={{
              mt: "auto",
              bgcolor: "#059669",
              "&:hover": { bgcolor: "#047857" },
            }}
          >
            View Resumes
          </Button>
        </CardActions>
      </StyledCard>
    </Stack>
  );
};

export default ActionCards;
