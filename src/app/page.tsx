import Practice from '@/app/pages/practice';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';


export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <Practice />
      </ThemeProvider>
    </>
  );
}
