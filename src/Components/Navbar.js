import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: isScrolled ? "#00000080" : "#00000080",
  };
  const linkStyle = {
    color: isScrolled ? "white" : "white",

    
  };

  const [openMenu, setOpenMenu] = useState(false);
  const MenuOptions = [
    { text: "Home", icon: <HomeIcon />, id: "home" },
    { text: "About", icon: <InfoIcon />, id: "about" },
    { text: "testimonials", icon: <CommentRoundedIcon />, id: "testimonials" },
    { text: "Contact", icon: <PhoneRoundedIcon />, id: "contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, id: "Cart" },
  ];
  return (
    <header className="header" style={navStyle}>
      <nav className="nav">
        <div className="nav-logo-container">
          <img src={Logo} alt="logo" className="nav-logo" />
        </div>
        <div className="navbar-links-container">
          <Link to="home" smooth={true} duration={500}>
            <a href="" className="link" style={linkStyle}>
              Home
            </a>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <a href="" className="link" style={linkStyle}>
              About
            </a>
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            <a href="" className="link" style={linkStyle}>
              Testimonials
            </a>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <a href="" className="link" style={linkStyle}>
              Contact
            </a>
          </Link>

          <a href="#">
            <BsCart2 className="navbar-cart-icon" style={linkStyle} />
          </a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} style={linkStyle} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        
        >
          <Box
            sx={{ width: 250 , backgroundColor:"#00000080", height:"100vh",color:'black' , }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onkeyDown={() => setOpenMenu(false)}
         
          
          >
            <IoMdCloseCircle style={{ width:'25px', height:"25px",cursor:'pointer', margin:" 10px 15px" ,":hover": { color: "white" }}}/>
            <List >
              {MenuOptions.map((item, index) => (
                <Link to={item.id} smooth={true} duration={700}>
                  <ListItem
                    key={item.text}
                    disablePadding
                    sx={{ cursor: "pointer",":hover": { color: "white" } }}
                  >
                    <ListItemButton disableRipple>{item.icon}</ListItemButton>
                    <ListItemText primary={item.text}> </ListItemText>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </header>
  );
};

export default Navbar;
