import React, {useEffect} from "react";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { AiOutlineMenu } from "react-icons/ai";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../app/reducers/authSlice";

const options = ["Log in", "Sign up", "Your home", "Rented rooms", "Log out"];

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  let selectedIndex;
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth)


    let navigate = useNavigate();

  function handleClick() {
      let path = '';
      switch (options[selectedIndex]) {
          case 'Sign up':
              path = '/signup';
              navigate(path);
              break;
          case 'Log in':
              path = '/login';
              navigate(path);
              break;
          case 'Your home':
              path = '/hosts';
              navigate(path);
              break;
          case 'Rented rooms':
              path = '/rented';
              navigate(path);
              break;
          case 'Log out':
              sessionStorage.removeItem('token');
              dispatch(logout())
              path = '/login';
              navigate(path);
              break;
          default:
              path = '/login';
              navigate(path);
              break;

      }
  }

  const handleMenuItemClick = async (event, index) => {
      selectedIndex=index;
    setOpen(false);
    handleClick();
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
        <ButtonGroup
            variant="contained "
            ref={anchorRef}
            aria-label="split button"
        >
            {/*<Button*/}
            {/*    style={{*/}
            {/*        backgroundColor: "#ef405f",*/}
            {/*        marginRight: "1px",*/}
            {/*        color: "#fff"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {options[selectedIndex] }*/}
            {/*</Button>*/}
            <Button
                size="small"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="menu"
                style={{ backgroundColor: "#ef405f" }}
                onClick={handleToggle}
            >
                <AiOutlineMenu style={{ color: "#fff" }} />
            </Button>
        </ButtonGroup>
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            sx={{".MuiPaper-root":{borderRadius: '1rem', marginTop: '1rem'}}}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu" autoFocusItem>
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        disabled={sessionStorage['token'] ? index <= 1 : index >= 2}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                        sx={{fontSize: '0.9rem', position:'relative', zIndex:2}}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </>
  );
}
