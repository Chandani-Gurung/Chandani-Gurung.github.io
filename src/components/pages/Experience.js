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
        maxWidth: 400,
        justifyContent: "center",
        display: "inline-block",
        margin: "5px 15px 0px 15px",
        margin: "100px 50px 0px 50px",
        border: "solid 10px transparent",
        position: "relative",
        verticalAlign: "top",

    },
    header: {
        "&:hover": {
            color: "#e8c7c8",
        },
    },
    media: {
        height: 0,
        padding: "20%",
        display: "center",
        marginTop: "0px",
    },

    expand: {
        transform: "rotate(270deg)",
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
        marginTop: "20px",
        fontStyle: "italic",
    },
});

function Experience() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="experience">
                {" "}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>Experience </motion.h1>{" "}
            </div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt="SnapIt-logo"
                            src="./snapitsolutions_logo - Copy.jpg"
                            className={classes.avatar}
                        ></Avatar>
                    }
                    title="Junior Software Developer"
                    subheader="October 18, 2021 - December 31, 2023"
                />
                <CardMedia
                    className={classes.media}
                    image="./images/snapitsolutions_logo.jpg"
                    title="SnapIT"
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: '20px' }}>
                        In this role, I played a pivotal role in the enhancement and maintenance of critical medical software for
                        the client, focusing on code quality, testing, and seamless communication within the Agile framework.
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
                        <Typography paragraph>TECHNICAL SKILLS:</Typography>
                        <Typography paragraph>
                            Programming Languages: Java, JavaScript, HTML, CSS5
            </Typography>
                        <Typography paragraph>
                            Source and Version Control: Git, GitHub
            </Typography>
                        <Typography paragraph>
                            Tools & Frameworks: Java Spring, Spring Boot, Android SDK, ReactJS, VueJS, IntelliJ, Android Studio, Eclipse, VS Code, ASP.NET Core, Maven, Gradle, Jira, Trello
            </Typography>
                        <Typography paragraph>
                            Databases: MySQL, Oracle, FileZilla, Citrix Workspace, Remote Desktop
            </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <div className={classes.contact}>
                <a
                    id="gh"
                    href="https://www.linkedin.com/in/chandani-gurung-394096152/"
                    target="_blank"
                    class="btn contact-details"
                >
                    <p>You can check out my LinkedIn here:</p>
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </>
    );
}

export default Experience;
