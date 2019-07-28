import React, { Component } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    currentNav: "/"
  };
  componentDidMount = () => {
    this.setState({
      currentNav: this.props.location.pathname
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        currentNav: this.props.location.pathname
      });
    }
  };

  _handleActiveNav = nav => {};

  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <ButtonGroup>
              <Button
                outline
                color="primary"
                active={this.state.currentNav === "/"}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                outline
                color="primary"
                active={this.state.currentNav === "/tweet"}
              >
                <Link to="/tweet">Tweet</Link>
              </Button>
              <Button
                outline
                color="primary"
                active={this.state.currentNav === "/trending"}
              >
                <Link to="/trending">Trending Topics</Link>
              </Button>
              <Button
                outline
                color="primary"
                active={this.state.currentNav === "/madness"}
              >
                <Link to="/madness">Madness</Link>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(NavBar);
