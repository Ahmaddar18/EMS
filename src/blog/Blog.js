import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
import BodyContainer from "./BodyContainer";
import * as c from "./constants";

const sections = [
  { title: c.HOME },
  { title: c.EARTHQUAKE_ALERT, url: "http://seismic.pmd.gov.pk/events.php" },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT },
  { title: c.UNDER_DEVELOPMENT }
];



export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={c.EMS} sections={sections} />
        <BodyContainer />
      </Container>
      <Footer title="" description={c.EMS} />
    </React.Fragment>
  );
}
