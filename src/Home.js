import { styled } from '@mui/material/styles';
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
export function Home() {
  return <Div className='home'>{"🤞Welcome to My react Practice🤞"}</Div>;
}
