import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
import BodyContainer from "./BodyContainer";
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as c from "./constants";
let url_gallery =  "/gallery";//"http://localhost:3000/gallery";
let url_contact =  "/contact";//"http://localhost:3000/contact"
const sections = [
  { title: c.HOME, url:"/" },
  { title: c.GALLERY, url:url_gallery },
  { title: c.EARTHQUAKE_ALERT, url: "http://seismic.pmd.gov.pk/events.php" },
  { title: c.CONTACT, url:url_contact }
];



export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={c.EMS} sections={sections} />
        <Router>
          <Switch>
            <Route path="/" exact component={BodyContainer} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </Router>

      </Container>
      <Footer title="" description={c.EMS} />
    </React.Fragment>
  );
}
