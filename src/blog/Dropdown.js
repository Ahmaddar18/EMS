import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function Dropdown() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Language</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "demo-controlled-open-select"
          }}
        >
          <MenuItem value={"en"}>
            <em>English</em>
          </MenuItem>
          <MenuItem value={"ur"}>Urdu</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
