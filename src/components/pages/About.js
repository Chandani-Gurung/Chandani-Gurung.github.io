import React from "react";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    fontSize: "1.5rem",
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr",
    gridGap: "20px",
    "@media (max-width: 780px)": {
      display: "block",
    },
  },
  paper: {
    justifyContent: "center",
    padding: "50px",
    elevation: "24",
    justifyContent: "center",
    height: "50%",
    border: "50px solid transparent",
  },
  about: {
    height: "80%",
    maxWidth: "500px",
    fontWeight: "bold",
    fontSize: "1rem",
    fontFamily: "Nunito",
    padding: "10px",
    margin: "10px ",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#f1a7a9",
    },
  },
});

function About() {
  const classes = useStyles();
  return (
    <>
      <h1 className="about">About</h1>
      <div className={classes.container}>
        <Paper elevation={5} className={classes.about}>
          <div>
            <h1>Vice President/Interim President</h1>
            <h2>Association for Computing Machinery W </h2>
            <p>(2019 – 2021)</p>
          </div>
        </Paper>
        <Paper elevation={5} className={classes.about}>
          <div>
            <h1>Active member</h1>
            <h2>SLU Data Science Research Club</h2>
            <p>(2020 – 2021)</p>
          </div>
        </Paper>
        <Paper elevation={5} className={classes.about}>
          <div>
            <h1>Math Problem Solver of the Month</h1>
          </div>
        </Paper>
        <Paper elevation={5} className={classes.about}>
          <div>
            <h1>Scholarship Recipient</h1>
            <h2>Honors and Promise Scholarship</h2>
            <p>(2017 – 2021)</p>
          </div>
        </Paper>
        <Paper elevation={5} className={classes.about}>
          <div>
            <h1>Active Member</h1>
            <h2>Women in Technology</h2>
            <p>(2019 – 2021)</p>
          </div>
        </Paper>
        <Paper elevation={5} className={classes.about}>
          <div>
            <h1>Active Member</h1>
            <h2>SLU Vegan Club</h2>
            <p>(2019 – 2021)</p>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default About;
