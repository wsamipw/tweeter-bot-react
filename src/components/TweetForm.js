import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input,
  FormGroup
} from "reactstrap";
import { postTweet } from "../config/serverCall";
class TweetForm extends Component {
  state = {
    status: "",
    alert: false
  };

  _handleTweetChange = status => {
    this.setState({ status });
  };

  _handleTweetSubmit = () => {
    postTweet(this.state.status).then((response)=>{
      console.log(response);
    });
  };
  render() {
    const { status } = this.state;
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  {/* <Label>Tweet</Label> */}
                  <Input
                    type="textarea"
                    rows={5}
                    maxLength={280}
                    value={status}
                    onChange={tweet =>
                      this._handleTweetChange(tweet.target.value)
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" onClick={this._handleTweetSubmit}>
                    Tweet
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TweetForm;
