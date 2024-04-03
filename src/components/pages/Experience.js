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
        marginTop: "10px",
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
            <div className={classes.contact}>
                <a
                    id = "gh"
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
