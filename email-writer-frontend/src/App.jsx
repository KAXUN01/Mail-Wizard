import { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  CircularProgress,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Switch,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#ff4081",
      },
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone,
      });
      setGeneratedReply(
        typeof response.data === "string" ? response.data : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Video Background */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box sx={{ minHeight: "100vh", color: "text.primary" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
                MailWizard
              </Typography>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="secondary"
              />
            </Toolbar>
          </AppBar>

          <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                This is Your AI Email Assistant. Generate quick replies to your emails effortlessly.
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <TextField
                    label="Email Content"
                    placeholder="Paste your email here..."
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Tone</InputLabel>
                    <Select
                      value={tone}
                      label="Tone"
                      onChange={(e) => setTone(e.target.value)}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="formal">Formal</MenuItem>
                      <MenuItem value="professional">Professional</MenuItem>
                      <MenuItem value="friendly">Friendly</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    fullWidth
                    disabled={!emailContent || loading}
                    onClick={handleSubmit}
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    {loading ? <CircularProgress size={24} /> : "Generate Reply"}
                  </Button>
                </Box>

                {error && (
                  <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}

                {generatedReply && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Generated Reply
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      variant="outlined"
                      value={generatedReply || ""}
                      inputProps={{ readOnly: true }}
                      rows={6}
                    />
                    <Button
                      variant="outlined"
                      sx={{ mt: 2 }}
                      onClick={() => navigator.clipboard.writeText(generatedReply)}
                    >
                      Copy to Clipboard
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
