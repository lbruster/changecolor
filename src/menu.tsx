import * as React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
            <MenuItem onClick={handleClose}>Project 1</MenuItem>
            <MenuItem onClick={handleClose}>Project 2</MenuItem>
            <MenuItem onClick={handleClose}>Project 3</MenuItem>
            <MenuItem onClick={handleClose}>Project 4</MenuItem>
            <MenuItem onClick={handleClose}>Project 5</MenuItem>
            <MenuItem onClick={handleClose}>Project 6</MenuItem>
            <MenuItem onClick={handleClose}>Project 7</MenuItem>
            <MenuItem onClick={handleClose}>Project 8</MenuItem>
            <MenuItem onClick={handleClose}>Project 9</MenuItem>
          </Menu>
        </div>
      </>
    </BrowserRouter>
  );
}
