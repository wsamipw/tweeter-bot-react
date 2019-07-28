import {
  GET_TRENDING_LOCATION,
  GET_TRENDING_TOPICS,
  POST_TWEET,
  SEARCH_TWEET
} from "./API";

export const getTrendingLocation = () => {
  var trendingLocation = fetch(GET_TRENDING_LOCATION, {
    method: "GET",
    mode: "cors" // no-cors, cors, *same-origin
    // cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached
  }).then(response => {
    return response.json();
  });
  console.log("trending location in server call::", trendingLocation);
  return trendingLocation;
};

export const getTrendingTopic = woeid => {
  var trendingTopics = fetch(`${GET_TRENDING_TOPICS}?id=${woeid}`, {
    method: "GET",
    mode: "cors" // no-cors, cors, *same-origin
  }).then(response => {
    return response.json();
  });
  return trendingTopics;
};

export const postTweet = status => {
  var body = {
    status: status
  };
  var postTweet = fetch(POST_TWEET, {
    method: "POST",
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return postTweet;
};
export const searchTweet = (term, count) => {
  var body = {
    term: term,
    count: count
  };
  var searchTweet = fetch(SEARCH_TWEET, {
    method: "POST",
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      // "Content-Type": "text/plain"
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return searchTweet;
};
