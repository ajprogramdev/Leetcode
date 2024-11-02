# How to create a custom MaterialUI theme in React.

## Step 1

Import createMuiTheme and initialize it with an object as parameter, which contains the theme properties.

```javascript
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#5c67a3',
      main: '#3f4771',
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
    openTitle: '#3f4771',
    protectedTitle: pink['400'],
    type: 'light',
  },
});
export default theme;
```

## Step 2

Just like useContext hook, use a provider and pass the theme as a prop, the theme will be available in the components tree.

```javascript
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const App = () => {
  return (
    <BrowserRouter>
      {/*Wrapper, just like useContext's provider.*/}
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};
```

## Step 3

```javascript
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px
 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <CardMedia
        className={classes.media}
        image={unicornbikeImg}
        title="Unicorn Bicycle"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the MERN Skeleton home page.
        </Typography>
      </CardContent>
    </Card>
  );
}
```
