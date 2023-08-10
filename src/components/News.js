import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defaultImage from "./Image_not_available.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps = {
    category: "general",
    pageSize: "15",
  };
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 5,
    };
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&country=in`;
    this.props.setProgress(20);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedData = await data.json();
    this.props.setProgress(80);
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    let category = this.props.category;
    category = category.replace(category[0], category[0].toUpperCase());
    return (
      <>
        <h1 className="text-center my-3">
          <strong>Top Headlines on {category}</strong>
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have reached the end of this page !</b>
            </p>
          }
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description != null
                          ? element.description.slice(0, 120) + "..."
                          : ""
                      }
                      imageUrl={
                        element.urlToImage != null
                          ? element.urlToImage
                          : defaultImage
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedTime={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
