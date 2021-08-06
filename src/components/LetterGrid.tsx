import React from "react";
import { makeStyles, Box } from "@material-ui/core";

export interface LetterGridProps {
  onClick: (letter: string) => void;
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    color: "white",
    minHeight: 300,
    border: "10px solid rgba(0, 0, 0, 1)",
    padding: "10px",
    fontSize: "32px",
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
    fontSize: "50px",
    margin: "14px",
    width: "60px",
    height: "60px",
    textAlign: "center",
    verticalAlign: "center",
    cursor: "pointer",
    userSelect: "none",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: "rgb(11, 38, 255)",
    },
  },
  action: {
    textTransform: "capitalize",
    border: "5px solid rgba(11, 236, 255, 1)",
    fontSize: "50px",
    margin: "14px",
    height: "60px",
    textAlign: "center",
    verticalAlign: "center",
    cursor: "pointer",
    userSelect: "none",
    alignItems: "center",
    justifyContent: "left",
    "&:hover": {
      background: "rgb(11, 38, 255)",
    },
  },
});

export const LetterGrid: React.FC<LetterGridProps> = ({ onClick }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" className={classes.root}>
      {letters.map((c) => (
        <div key={c} className={classes.label} onMouseUp={() => onClick(c)}>
          {c}
        </div>
      ))}
      <div
        key="clear"
        className={classes.action}
        onMouseUp={() => onClick("clear")}
      >
        &nbsp;Clear&nbsp;
      </div>
    </Box>
  );
};
