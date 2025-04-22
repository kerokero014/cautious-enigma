import { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm('your_service_id', 'your_template_id', formRef.current, 'your_public_key')
      .then(
        () => {
          setOpen(true);
          formRef.current?.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={3}>
        Whether you have a question, a project idea, or just want to connect — shoot me a message!
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextField label="Name" name="user_name" fullWidth margin="normal" required />
        <TextField
          label="Email"
          name="user_email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>

      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
        <Alert severity="success" onClose={() => setOpen(false)}>
          Message sent successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert severity="error" onClose={() => setError(false)}>
          Failed to send message. Try again!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
