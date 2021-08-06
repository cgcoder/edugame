import React from "react";
import { makeStyles, Box } from "@material-ui/core";

interface DisplayWordProps {
  display: string;
  handleClick: (index: number) => void;
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FECB8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    color: "white",
    minHeight: 150,
    border: "10px solid rgba(255, 155, 0, 1)",
    padding: "10px",
    fontSize: "32px",
    alignItems: "center",
    justifyContent: "left",
  },
  root2: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
    border: "5px solid rgba(11, 236, 255, 1)",
    fontSize: "40px",
    margin: "10px",
    width: "50px",
    height: "50px",
    textAlign: "center",
    verticalAlign: "center",
    cursor: "pointer",
    userSelect: "none",
    color: "black",
    "&:hover": {
      background: "rgb(211, 38, 255)",
    },
  },
});

export const DisplayWord: React.FC<DisplayWordProps> = ({
  display,
  handleClick,
}) => {
  const chars = display.split("");
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" className={classes.root}>
      {chars.map((c, i) => (
        <div
          key={`${c}${i}`}
          className={classes.label}
          onMouseUp={() => handleClick(i)}
        >
          {c}
        </div>
      ))}
    </Box>
  );
};
