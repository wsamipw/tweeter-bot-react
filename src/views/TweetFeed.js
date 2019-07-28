import React, { Component } from "react";
import { Row, Col, Media } from "reactstrap";
import { searchTweet } from "../config/serverCall";

export default class TweetFeed extends Component {
  state = {
    result: {}
  };
  componentDidMount = () => {
    searchTweet(this.props.selectedTerm, 50).then(result => {
      console.log(result);
      this.setState({ result });
    });
  };
  render() {
    const { result } = this.state;
    return (
      <div className="p-4">
        <h3 className="mb-3">{this.props.selectedTerm}</h3>
        {result &&
          result.statuses &&
          result.statuses.map(status => {
            return (
              <Row className="mb-3" key={status.id}>
                <Media>
                  <Media left href="#" className="mr-2">
                    <Media
                      className="profile_image"
                      object
                      src={status.user.profile_image_url}
                      data-src={status.user.profile_image_url}
                      alt={status.user.screen_name}
                    />
                  </Media>
                  <Media body>
                    <Media heading>@{status.user.screen_name}</Media>
                    <small className="text-muted">{new Date(status.created_at).toDateString()}</small>
                    <p>
                      {status.text}
                    </p>
                  </Media>
                </Media>
                <Col />
              </Row>
            );
          })}
      </div>
    );
  }
}
