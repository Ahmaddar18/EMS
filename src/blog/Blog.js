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
import * as c from "./constants";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: c.HOME },
  { title: c.EARTHQUAKE_ALERT, url: "http://seismic.pmd.gov.pk/events.php" },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT }
];

const mainFeaturedPost = {
  title: c.HEAD_TITLE,
  description: c.HEAD_SUB_TITLE,
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…"
};

const featuredPosts = [
  {
    title: c.p1_TITLE,
    date: c.p1_DATE,
    description: c.p1_DES,
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: c.p2_TITLE,
    date: c.p2_DATE,
    description: c.p2_DES,
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: c.p3_TITLE,
    date: c.p3_DATE,
    description: c.p3_DES,
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
    { title: "March 2020" },
    { title: "February 2020" },
    { title: "January 2020" },
    { title: "November 1999" },
    { title: "October 1999" },
    { title: "September 1999" },
    { title: "August 1999" },
    { title: "July 1999" },
    { title: "June 1999" },
    { title: "May 1999" },
    { title: "April 1999" }
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
        <Header title={c.EMS} sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title={c.HEAD_TITLE} posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description={c.EMS} />
    </React.Fragment>
  );
}
