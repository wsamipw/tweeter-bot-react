import React, { Component } from "react";
import Select from "react-select";
import { Row, Col } from "reactstrap";
import { getTrendingLocation, getTrendingTopic } from "../config/serverCall";
import CustomModal from "../components/CustomModal";
import TweetFeed from "./TweetFeed";
export default class Trending extends Component {
  state = {
    trendingLocation: [],
    selectedLocation: {
      label: `(World) - Worldwide`,
      value: 1
    },
    trendingTopics: [],
    isOpen: false,
    selectedTerm: ""
  };
  componentDidMount = () => {
    getTrendingLocation().then(data =>
      this.setState({
        trendingLocation: data.map(t => ({
          label: `${t.country}(${t.countryCode || "World"}) - ${t.name}`,
          value: t.woeid
        }))
      })
    );
    getTrendingTopic(this.state.selectedLocation.value).then(trendingTopics => {
      this.setState({ trendingTopics });
    });
  };
  handleChange = selectedLocation => {
    this.setState({ selectedLocation }, () => {
      if (selectedLocation) {
        getTrendingTopic(selectedLocation.value).then(trendingTopics => {
          this.setState({ trendingTopics });
        });
      }
    });
  };

  handleTrendingTopicClick = selectedTerm => {
    this.setState({ selectedTerm }, () => {
      this.toggle();
    });
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { trendingLocation, selectedLocation, trendingTopics } = this.state;
    return (
      <div>
        {trendingLocation && (
          <Select
            value={selectedLocation}
            onChange={this.handleChange}
            options={trendingLocation}
            placeholder="Trending Locations"
            isClearable
          />
        )}
        <Row className="mt-5 trending-topic__wrapper">
          <Col>
            {selectedLocation && trendingTopics
              ? trendingTopics.map(topic => (
                  <div>
                    <h5>Trending in {selectedLocation.label}</h5>
                    <small className="mb-3">
                      {new Date(topic.as_of).toDateString()}
                    </small>
                    <br />
                    <Row>
                      {topic.trends.map(trend => {
                        return (
                          <Col xs={3} md={2} className="mb-1">
                            <span
                              className="mr-3 hash-trend wordwrap"
                              onClick={() =>
                                this.handleTrendingTopicClick(trend.name)
                              }
                            >
                              {trend.name}
                            </span>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                ))
              : "Please Select a Location."}
          </Col>
        </Row>
        <CustomModal isOpen={this.state.isOpen} toggle={this.toggle} title="">
          <TweetFeed selectedTerm={this.state.selectedTerm} />
        </CustomModal>
      </div>
    );
  }
}
