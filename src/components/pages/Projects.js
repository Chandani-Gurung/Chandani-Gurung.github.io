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
        padding: "40%",
        display: "block",
        marginTop: "10px",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: "transform 0.3s ease",
        border: "solid #e8c7c8",
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    content: {
        backgroundColor: "#e8c7c8",
    },
    collapseContent: {
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: "#e8c7c8",
        border: "solid 1px #ccc",
    },
    contact: {
        fontSize: "small",
        textAlign: "center",
        marginTop: "10px",
        fontStyle: "italic",
        verticalAlign: "bottom",
    },
});

function Projects() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(Array(4).fill(false)); // Initialize with the number of cards

    const handleClick = (index) => {
        setExpanded((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index]; // Toggle the specific card's expanded state
            return newExpanded;
        });
    };

    return (
        <>
            <div className="projects">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Projects
                </motion.h1>
            </div>

            {/* Card 1 */}
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            alt="React-logo"
                            src="./logo192.png"
                            className={classes.avatar}
                        />
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
                            [classes.expandOpen]: expanded[0],
                        })}
                        onClick={() => handleClick(0)}
                        aria-expanded={expanded[0]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Developed a web application for Dr. Kuo Pao Yang to manage the university's
                            computer science tutoring lab. The application utilizes  <span style={{ color: 'red', fontWeight: 'bold' }}>React</span> for a dynamic and
                            responsive front-end, <span style={{ color: 'red', fontWeight: 'bold' }}>.NET Core </span> for robust backend functionality, and
                            <span style={{ color: 'red', fontWeight: 'bold' }}> SQL Server </span> for seamless and efficient database management.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            {/* Card 2 */}
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            alt="C#-logo"
                            src="./csharplogo.png"
                            className={classes.avatar}
                        />
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
                        Social web application that allows users to upload their life stories
                        and events instantly, under different subgroups.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded[1], // Update index for card 2
                        })}
                        onClick={() => handleClick(1)} // Pass index for card 2
                        aria-expanded={expanded[1]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Developed a social web application allowing users
                            to share life stories and events instantly. The
                            platform features emotion-based subgroups,
                            enabling users to connect with peers through shared experiences.
                            Key functionalities include email confirmation, intuitive
                            UI navigation, real-time post alerts, and full CRUD
                            (Create, Read, Update, Delete) operations. The project
                            leveraged  <span style={{ color: 'red', fontWeight: 'bold' }}> C#</span> and  <span style={{ color: 'red', fontWeight: 'bold' }}> .NET Core</span> for backend development,
                             <span style={{ color: 'red', fontWeight: 'bold' }}> SQL Server</span> for database management, and
                             <span style={{ color: 'red', fontWeight: 'bold' }}> Angular </span> for the front end.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            {/* Card 3 */}
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            alt="SSMS-logo"
                            src="./ssmslogo.png"
                            className={classes.avatar}
                        />
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
                            [classes.expandOpen]: expanded[2], // Update index for card 3
                        })}
                        onClick={() => handleClick(2)} // Pass index for card 3
                        aria-expanded={expanded[2]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Developed a comprehensive web application for the university to
                            manage records of both current and alumni international students.
                            The project centered around advanced database design and implementation,
                            providing hands-on experience with  <span style={{ color: 'red', fontWeight: 'bold' }}> SQL Server</span>. I was responsible for
                            building and optimizing the database architecture from the ground up,
                            ensuring robust data integrity, high scalability, and efficient management of student records.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            {/* Card 4 */}
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            alt="KOTLIN-logo"
                            src="./kotlinlogo.jpg"
                            className={classes.avatar}
                        />
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
                            [classes.expandOpen]: expanded[3], // Update index for card 4
                        })}
                        onClick={() => handleClick(3)} // Pass index for card 4
                        aria-expanded={expanded[3]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Developed a web application for students to effortlessly generate
                            and send resumes on the spot during career fairs. The project
                            incorporated user-friendly templates and guided users through the
                            resume creation process. The front-end utilized  <span style={{ color: 'red', fontWeight: 'bold' }}> React </span> for
                            a smooth user experience, while the backend was powered by  <span style={{ color: 'red', fontWeight: 'bold' }}> Node.js </span>,
                            ensuring efficient data handling and real-time updates.
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
