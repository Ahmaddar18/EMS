import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Dropdown from "./Dropdown";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Body from "./Body";
import * as c from "./constants";
import { hasPrefixSuffix } from "antd/lib/input/ClearableLabeledInput";
const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title, appContext } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Dropdown />
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            className={classes.toolbarLink}
            onClick={() => {
              if(section.title === c.GALLERY)
              {
                let screen = [];
                screen.push(<Gallery key={section.title} />);
                appContext.setState({
                  screen: screen
                });
              }
              else if(section.title === c.CONTACT)
              {
                let screen = [];
                screen.push(<Contact key={section.title} />);
                appContext.setState({
                  screen: screen
                });
              }
              else if(section.title === c.HOME) 
              {
                let screen = [];
                screen.push(<Body key={section.title} />);
                appContext.setState({
                  screen: screen
                });
              }
              else if(section.title === c.EARTHQUAKE_ALERT) 
              {
                window.open(section.url)
              }
            }}
          >
            <b>{section.title}</b>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
