import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { post1 } from "./Posts";
import * as c from "./constants";
const lang = localStorage.getItem("lang");
let isEng;
lang === "ur" ? (isEng = false) : (isEng = true);

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    textAlign: isEng?"left":"right",
  }
}));

const mainFeaturedPost = {
  title: c.HEAD_TITLE,
  description: c.HEAD_SUB_TITLE,
  image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUzMzPK7GI1AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC", //"https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: c.CONTINUE_READING
};

const featuredPosts = [
  {
    id:c.ID1,
    title: c.p1_TITLE,
    date: c.p1_DATE,
    description: c.p1_DES,
    image: "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/hide-under-table.png",//https://www.earthquakecountry.org/library/step5wideicon.png",
    imageText: "Image Text"
  },
  {
    id:c.ID2,
    title: c.p2_TITLE,
    date: c.p2_DATE,
    description: c.p2_DES,
    image: "https://www.tfd.metro.tokyo.lg.jp/lfe/bou_topic/jisin/data/point-02.jpg",
    imageText: "Image Text"
  },
  {
    id:c.ID3,
    title: c.p3_TITLE,
    date: c.p3_DATE,
    description: c.p3_DES,
    image: "https://www.tfd.metro.tokyo.lg.jp/lfe/bou_topic/jisin/data/point-08.jpg",
    imageText: "Image Text"
  }
];

const posts = [post1];

const sidebar = {
  title: c.ABOUT,
  description:
    c.SIDEBAR_DES,
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

export default function Body(props) {
  const classes = useStyles();

  return (
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} appContext={props.appContext}/>
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
  );
}
