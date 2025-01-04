import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { alpha } from '@mui/system';
import { APP_NAME, AppTextLogo } from './constants';


const Copyright = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        mt: 2,
        mb: 2,
        color: 'text.secondary'
      }}
    >
      {'Copyright © '}
      {new Date().getFullYear()}{' '}
      <Link color="inherit" href="/">
        {APP_NAME}.
      </Link>
      {' '}All rights reserved.
    </Typography>
  );
};

interface LayoutProps extends React.PropsWithChildren {}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  const paper = [
    { height: 15, top: 0, bgcolor: 'warning.main' },
    { height: 25, top: 30, bgcolor: 'info.main' },
    { height: 30, top: 70, bgcolor: 'error.main' },
    { height: 35, top: 120, bgcolor: 'success.main' }
  ];

  return (
    <>
      {paper.map((paper, i) => (
        <Box
          key={i}
          sx={{
            width: '100%',
            height: paper.height,
            bgcolor: paper.bgcolor,
          }}
        >
          <Box
            sx={{
              top: 0,
              height: 6,
              position: 'relative',
              bgcolor: alpha('#000', 0.1)
            }}
          />
          <Box
            sx={{
              height: 6,
              top: paper.height-6,
              position: 'relative',
              bgcolor: alpha('#000', 0.1)
            }}
          />
        </Box>
      ))}
      <Typography
        variant="h5"
        align="left"
        sx={{
          mt: 2,
          ml: 2,
          mr: 2
        }}
      >
        <Link href="/" underline='none'><AppTextLogo sx={{ width: 24, height: 24 }} /></Link>
      </Typography>
      <Container maxWidth="xl">
        {children}
      </Container>
      <Copyright />
      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 2,
          mb: 2,
          color: 'text.secondary',
        }}
      >
        <Link color='inherit' href='#/privacy-policy'>Privacy Policy</Link>
      </Typography>
    </>
  );
};

export default Layout;
