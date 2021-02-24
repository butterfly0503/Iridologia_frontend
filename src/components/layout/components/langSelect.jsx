import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Flag from "react-flagkit";
import { IconButton } from "@material-ui/core";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const FLAGS = ["US", "FR", "IT", "PT", "ES"];

const useStyles = makeStyles({
  menuPaperProps: {
    marginTop: "0",
    padding: "0",
  },
  menuItem: {
    padding: "0",
  },
});

const LangSelect = (props) => {
  const { onChange } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [flagIndex, setFlagIndex] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (index) => {
    setFlagIndex(index - 1);
    onChange(index);
    setAnchorEl(null);
  };

  return (
    <div className="lang-selector-dropdown">
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Flag country={FLAGS[flagIndex]} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          style: {
            padding: "0",
          },
        }}
        PaperProps={{
          style: {
            marginTop: "0",
            padding: "0",
          },
        }}
      >
        <MenuItem
          className={classes.menuItem}
          ButtonProps={{ style: { padding: "0" } }}
          onClick={() => handleClose(1)}
        >
          {" "}
          <IconButton>
            <Flag country="US" />
          </IconButton>
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => handleClose(2)}>
          {" "}
          <IconButton>
            <Flag country="FR" />
          </IconButton>
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => handleClose(3)}>
          {" "}
          <IconButton>
            <Flag country="IT" />
          </IconButton>
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => handleClose(4)}>
          {" "}
          <IconButton>
            <Flag country="PT" />
          </IconButton>
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => handleClose(5)}>
          {" "}
          <IconButton>
            <Flag country="ES" />
          </IconButton>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default connect()(withRouter(LangSelect));
