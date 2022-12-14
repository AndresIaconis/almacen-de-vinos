import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Carrito from './Carrito';
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom';

const pages = ['Productos', 'Contacto', 'Promociones'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const{cartQuantity}= useCart()
// const navigate = useNavigate()

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const cantCarrito = 20;

  return (
    <AppBar position="static" sx={{backgroundColor: "rgb(132, 23, 76)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' style={{ color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ALMACÉN DE VINOS
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to='category/Pinot'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Pino</Typography>
                </MenuItem>
              </Link>
              <Link to='category/Cabernet'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cabernet</Typography>
                </MenuItem>
              </Link>
              <Link to='category/Malbec'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Malbec</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ALMACÉN DE VINOS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='category/Pinot'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', fontSize: "12px" }}>
                Pinot
              </Button>
            </Link>
            <Link to='category/Cabernet'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', fontSize: "12px" }}>
                Cabernet
              </Button>
            </Link>
            <Link to='category/Malbec'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', fontSize: "12px" }}>
                Malbec
              </Button>
            </Link>
          </Box>         
          <Link to={'/cart'}>
            <Carrito />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
