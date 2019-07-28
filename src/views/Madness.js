import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import Select from "react-select";
const projects = [
  {
    id: 1,
    value: "nice",
    label: "Nice"
  }
];
export default class Madness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      mad: false,
      location: null,
      frequency: 0,
      customSearchTerm: "",
      includeTargetHandle: true,
      includeTargetHashTag: true,
      customHashTag: false,
      tweets: [
        {
          tweet: ""
        }
      ]
    };
  }

  _handleMadnessButton = () => this.setState({ mad: !this.state.mad });
  _handleChange = (key, value) => {
    this.setState({ [key]: value });
  };
  _handleTweetChange = (index, value) => {
    let tweets = [...this.state.tweets];
    tweets[index] = {
      tweet: value
    };
    this.setState({
      tweets
    });
  };

  _addNewTweet = () => {
    this.setState({
      tweets: [
        ...this.state.tweets,
        {
          tweet: ""
        }
      ]
    });
  };

  _deleteTweet = index => {
    var newArray = this.state.tweets.filter((tweet, inx) => inx !== index);
    this.setState({ tweets: newArray });
    //   console.log("deleted::", index);
  };
  render() {
    return (
      <Row className="mb-2">
        <Col xs={12} md={7} className="mb-3">
          <Card body>
            <CardTitle>
              <strong>Configuration</strong>
            </CardTitle>
            <CardText>Configure your madness Campaign.</CardText>
            <ListGroup flush>
              <ListGroupItem>
                Campaign Name*
                <span className="float-right" style={{ width: "200px" }}>
                  {/* <Select
                    value={this.state.project}
                    onChange={project => this.setState({ project })}
                    options={projects}
                    placeholder="Select Project"
                    isClearable
                  /> */}
                  <Input
                    value={this.state.project}
                    placeholder="Name"
                    onChange={e => this.setState({ project: e.target.value })}
                  />
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Trending Location
                <Select
                  value={this.state.project}
                  onChange={project => this.setState({ project })}
                  options={projects}
                  placeholder="Select Location"
                  isClearable
                  className="float-right w-50"
                />
                <div>
                  <small className="text-muted">Defaults to Worldwide</small>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <span>Custom Search Term</span>
                <span className="float-right">
                  <Input
                    value={this.state.customSearchTerm}
                    onChange={e =>
                      this._handleChange("customSearchTerm", e.target.value)
                    }
                    // style={{ width: "70px" }}
                  />
                </span>
                <div>
                  <small className="text-muted">Defaults to None</small>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <span>Frequency</span>
                <span className="float-right">
                  <InputGroup>
                    <Input
                      value={this.state.frequency}
                      onChange={e =>
                        this._handleChange("frequency", e.target.value)
                      }
                      style={{ width: "70px" }}
                      type="number"
                      min="0"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>Per Minute</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </span>
                <div>
                  <small className="text-muted">Defaults to 10 tweet/min</small>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                Include Target Handle
                <Switch
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={checked =>
                    this.setState({ includeTargetHandle: checked })
                  }
                  checked={this.state.includeTargetHandle}
                  className="float-right"
                />
              </ListGroupItem>
              <ListGroupItem>
                Include Target Hashtag
                <Switch
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={checked =>
                    this.setState({ includeTargetHashTag: checked })
                  }
                  checked={this.state.includeTargetHashTag}
                  className="float-right"
                />
              </ListGroupItem>
              <ListGroupItem>
                Custom Hashtags
                <Switch
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={checked =>
                    this.setState({ customHashTag: checked })
                  }
                  checked={this.state.customHashTag}
                  className="float-right"
                />
                {this.state.customHashTag && (
                  <Input type="textarea" className="mt-3" />
                )}
              </ListGroupItem>
              <ListGroupItem>
                Tweet(s)*
                {this.state.tweets.map((tweet, index) => (
                  <div
                    className="d-flex flex-row align-items-center"
                    key={index}
                  >
                    <Input
                      type="textarea"
                      className="mt-3 mr-2"
                      value={tweet.tweet}
                      onChange={e =>
                        this._handleTweetChange(index, e.target.value)
                      }
                    />
                    {this.state.tweets.length > 1 && (
                      <Button
                        className="utility-btn"
                        color="danger"
                        onClick={() => this._deleteTweet(index)}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  className="utility-btn mt-2"
                  color="success"
                  onClick={this._addNewTweet}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </ListGroupItem>
            </ListGroup>

            <Button>Apply</Button>
          </Card>
        </Col>
        <Col xs={12} md={5} className="mb-3">
          <Card body>
            <CardTitle>
              <Select
                value={this.state.project}
                onChange={project => this.setState({ project })}
                options={projects}
                placeholder="Select Campaign"
                isClearable
                className="mb-2"
              />
              Status: <strong>{this.state.mad ? "MAD" : "IDLE"}</strong>
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color={this.state.mad ? "primary" : "danger"}
              onClick={this._handleMadnessButton}
            >
              {this.state.mad ? "Stop this madness" : "Start Madness"}
            </Button>
          </Card>
        </Col>
      </Row>
    );
  }
}
