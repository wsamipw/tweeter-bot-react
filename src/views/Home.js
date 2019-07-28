import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input, Media, Row, Col } from "reactstrap";
import { searchTweet } from "../config/serverCall";
export default class Home extends Component {
  state = {
    term: "",
    count: 50,
    result: {}
  };

  handleChange = term => this.setState({ term });

  handleSearch = () => {
    searchTweet(this.state.term, this.state.count).then(result => {
      console.log(result);
      this.setState({ result });
    });
  };
  render() {
    const { result } = this.state;
    return (
      <div>
        <InputGroup>
          <Input
            value={this.state.term}
            onChange={e => this.handleChange(e.target.value)}
            placeholder="Search tweets, hashtags..."
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={this.handleSearch}>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <div className="mt-5">
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
                      <small className="text-muted">
                        {new Date(status.created_at).toDateString()}
                      </small>
                      <p>{status.text}</p>
                    </Media>
                  </Media>
                  <Col />
                </Row>
              );
            })}
        </div>
      </div>
    );
  }
}
