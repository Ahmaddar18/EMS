import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { post1 } from "./Posts";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: "Home", url: "#" },
  { title: "Earthquake Alert", url: "http://seismic.pmd.gov.pk/events.php" },
  { title: "Under Development", url: "#" },
  { title: "Under Development", url: "#" },
  { title: "Under Development", url: "#" },
  { title: "Under Development", url: "#" },
  { title: "Under Development", url: "#" }
];

const mainFeaturedPost = {
  title: "Earthquake Safety Tips and Precautions",
  description: "What Should I Do Before, During, And After An Earthquake?",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…"
};

const featuredPosts = [
  {
    title: "Simple Hacks for an Earthquake",
    date: "Jan 10",
    description:
      "Carry cash: In an earthquake, ATMs and credit card systems can go offline. Hence , it is advisable to keep some spare cash handy at all times.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Prepare Your Home",
    date: "Dec 14",
    description:
      "Getting your house ready for an earthquake can save you from dealing with a lot of damage should a large earthquake hit. To do so",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Things to Keep in Mind",
    date: "Nov 12",
    description:
      "Ducking under a table or desk is the quickest way to protect yourself. If you’re in a high rise building, and away from a table or desk, move against a wall. Don’t panic when the sprinkler or alarm systems turn on due to malfunction, and DO NOT use the elevators.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

const posts = [post1];

const sidebar = {
  title: "About",
  description:
    "This website is under construction. Universal Design and Urdu language support will also be added soon",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" }
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Earthquake Managment System" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main
              title="Earthquake Safety Tips and Precautions"
              posts={posts}
            />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="Earthquake Management System" />
    </React.Fragment>
  );
}
