import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "bootstrap/dist/css/bootstrap.css";

export default function DefaultMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Projects
            </Button>
          </li>
        </ul>
      </nav>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          <MenuItem component={Link} to="/projects/1" onClick={handleClose}>
            Project 1
          </MenuItem>
          <MenuItem component={Link} to="/projects/2" onClick={handleClose}>
            Project 2
          </MenuItem>
          <MenuItem component={Link} to="/projects/3" onClick={handleClose}>
            Project 3
          </MenuItem>
          <MenuItem component={Link} to="/projects/4" onClick={handleClose}>
            Project 4
          </MenuItem>
          <MenuItem component={Link} to="/projects/5" onClick={handleClose}>
            Project 5
          </MenuItem>
          <MenuItem component={Link} to="/projects/6" onClick={handleClose}>
            Project 6
          </MenuItem>
          <MenuItem component={Link} to="/projects/7" onClick={handleClose}>
            Project 7
          </MenuItem>
          <MenuItem component={Link} to="/projects/8" onClick={handleClose}>
            Project 8
          </MenuItem>
          <MenuItem component={Link} to="/projects/9" onClick={handleClose}>
            Project 9
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
