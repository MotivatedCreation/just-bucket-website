
import * as React from 'react';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


interface ContactInfo {
  email?: string;
  message?: string;
  lastName?: string;
  firstName?: string;
}

const Contact = () => {
  const [contactInfo, setContactInfo] = React.useState<ContactInfo>({});

  const setValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof ContactInfo) => {
    setContactInfo(i => ({ ...i, [key]: event.target.value }));
  };

  const isEmpty = (value?: string) => value === null || value === undefined || value?.length <= 0;

  const isValid = () => {
    let isValid = true;
    isValid &&= !isEmpty(contactInfo.email);
    isValid &&= !isEmpty(contactInfo.message);
    isValid &&= !isEmpty(contactInfo.lastName);
    isValid &&= !isEmpty(contactInfo.firstName);

    return isValid;
  };

  return (
    <Container maxWidth='sm'>
      <Paper sx={{ padding: 2 }}>
        <Stack spacing={2} direction='column'>
          <Typography variant='h6'>
            Contact us
          </Typography>
          <Typography variant='subtitle1'>
            We're here to answer your questions!
          </Typography>
          <Stack spacing={2} direction='row'>
            <TextField
              required
              fullWidth
              label='First Name'
              variant='outlined'
              onChange={e => setValue(e, 'firstName')}
            />
            <TextField
              required
              fullWidth
              label='Last Name'
              variant='outlined'
              onChange={e => setValue(e, 'lastName')}
            />
          </Stack>
          <TextField
            required
            fullWidth
            variant='outlined'
            label='Email address'
            onChange={e => setValue(e, 'email')}
          />
          <TextField
            rows={5}
            required
            multiline
            fullWidth
            label='Message'
            variant='outlined'
            onChange={e => setValue(e, 'message')}
          />
          <Button
            type='submit'
            variant='contained'
            disabled={!isValid()}
          >
            Submit
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Contact;