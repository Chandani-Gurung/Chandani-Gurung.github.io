import React from "react";
import "../../App.css";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    justifyContent: "center",
    display: "inline-block",
    margin: "5px 15px",
  },
  header: {
    "&:hover": {
      color: "#e8c7c8",
    },
  },
  media: {
    height: 0,
    padding: "40%",
    display: "block",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: "auto",
    border: "solid #e8c7c8",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  content: {
    backgroundColor: "#e8c7c8",
  },
  contact: {
    fontSize: "small",
    textAlign: "center",
    marginTop: "10px",
    fontStyle: "italic",
  },
});

function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="projects">
        {" "}
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>Projects </motion.h1>{" "}
      </div>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              alt="React-logo"
              src="./logo192.png"
              className={classes.avatar}
            ></Avatar>
          }
          title="SLU CSLab"
          subheader="November 17, 2020"
        />
        <CardMedia
          className={classes.media}
          image="./images/projects.png"
          title="CSLab"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a web application built for Dr. Kuo Pao Yang, to help manage
            the university's computer science tutoring lab.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Technology used:</Typography>
            <Typography paragraph>
              For front-end development we used Javascript, HTML, and CSS We
              utilized Javascript's React Library.
            </Typography>
            <Typography paragraph>
              For back-end development we used C# as our language and developed
              the app in .NET Core. We used SSMS for database management.{" "}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              alt="C#-logo"
              src="./csharplogo.png"
              className={classes.avatar}
            ></Avatar>
          }
          title="That Just Happened"
          subheader="November 17, 2020"
        />
        <CardMedia
          className={classes.media}
          image="./images/project2.png"
          title="CSLab"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            Social web application that allows users to upload their life
            stories and events instantly, under different subgroups.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => {
              setExpanded(!expanded);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Features like email confirmation, easy navigation on UI, post
              alerts, and CRUD operations were implemented. This project was
              built using C#, .NET Core for back-end and SQL server for database
              management. Frontend was developed in the Angular framework.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              alt="SSMS-logo"
              src="./ssmslogo.png"
              className={classes.avatar}
            ></Avatar>
          }
          title="International Student Record"
          subheader="September 15, 2018"
        />
        <CardMedia
          className={classes.media}
          image="./images/project3.png"
          title="CSLab"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a web application built for the university to track records
            of all International students currently studying or graduated.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => {
              setExpanded(!expanded);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Technology used:</Typography>
            <Typography paragraph>
              This project was mainly database oriented where we learned a lot
              about using SQL server and programming database first.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              alt="KOTLIN-logo"
              src="./kotlinlogo.jpg"
              className={classes.avatar}
            ></Avatar>
          }
          title="SLU CSLab"
          subheader="November 17, 2020"
        />
        <CardMedia
          className={classes.media}
          image="./images/project4.png"
          title="CSLab"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a web application built for a project class in which users
            can generate and send resumes on the spot.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => {
              setExpanded(!expanded);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              The application was built using pure KOTLIN. We were given an
              ooprtunity to dabble with a language we have not used before and
              we utilized the new up and coming Google's language KOTLIN used
              for mobile app development.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <div className={classes.contact}>
        <a
          id="gh"
          href="https://github.com/Chandani-Gurung"
          target="_blank"
          class="btn contact-details"
        >
          <p>You can check out the source codes of my projects here:</p>
          <i class="fab fa-github"></i>
        </a>
      </div>
    </>
  );
}

export default Projects;
