import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" className="Logo">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 6,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "black",
                  alignItems: "center",
                  ":hover": {
                    color: "black",
                  },
                }}
                component={Link}
                to={"/"}
              >
                {/* <img src={Logo} alt='logo' className='logo'/> */}
                <h3 className="logo-text">Construction.co</h3>
              </Typography>
            </Link>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 1000,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Construction.co
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  flexDirection: "column",
                }}
                className="nav-menu"
              >
                <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Services
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Contact Us
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Projects
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                my: 3,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className="navbar-menu-text"
                >
                  Home
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className="navbar-menu-text"
                >
                  Services
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className="navbar-menu-text"
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className="navbar-menu-text"
                >
                  Projects
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
    </AppBar>
  );
}
export default Navbar;
