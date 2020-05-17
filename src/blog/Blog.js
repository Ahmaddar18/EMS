import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
// import BodyContainer from "./BodyContainer";
import Body from "./Body";
// import Contact from "./Contact/Contact";
// import Gallery from "./Gallery/Gallery";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as c from "./constants";
let host = "http://localhost:3000";
if (!process.env.NODE_ENV || process.env.NODE_ENV !== "development") {
  /*eslint-disable no-undef*/
  host = "http://ahmaddar009.0fees.us";
}
let url_home = "/"; //https://htmlpreview.github.io/?https://github.com/Ahmaddar18/EMS/blob/master/build/index.html"
let url_gallery = host + "/gallery"; //"http://localhost:3000/gallery";
let url_contact = host + "/contact"; //"http://localhost:3000/contact"
const sections = [
  { title: c.HOME, url: url_home },
  { title: c.GALLERY, url: url_gallery },
  { title: c.EARTHQUAKE_ALERT, url: "http://seismic.pmd.gov.pk/events.php" },
  { title: c.CONTACT, url: url_contact },
];

export default class Blog extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      screen: [],
    };
  }
 
  UNSAFE_componentWillMount() {
    var screen = [];
    screen.push(<Body appContext={this} key={"Home-screen"} />);
    this.setState({
      screen: screen
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title={c.EMS} sections={sections} appContext={this}/>
          {this.state.screen}
          {/* <Router>
            <Switch>
              <Route path={url_home} exact component={BodyContainer} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router> */}
        </Container>
        <Footer title="" description={c.EMS} />
      </React.Fragment>
    );
  }
}
