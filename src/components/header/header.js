import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./header.css";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Latest News", path: "/latest-news" },
  { id: 3, title: "Popular News", path: "/popular-news" },
];

const Header = () => (
  <header>
    <nav className='nav'>
      <Box className='links'>
        {navigation.map(({ id, title, path }) => (
          <NavLink key={id} to={path} end>
            <Typography variant='h6'>{title}</Typography>
          </NavLink>
        ))}
      </Box>
    </nav>
  </header>
);

export default Header;
