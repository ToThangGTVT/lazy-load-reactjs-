import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardInfo from './component/Card';
import LazyLoad from 'react-lazyload'
import Infinite from 'react-infinite'
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { post: [] }
  }
  data = {}
  loadMore = true
  i = 0
  callApi = async () => {
    this.i++
    const getPost = axios.get('https://jsonplaceholder.typicode.com/posts/' + this.i).then((res) => this.data = res.data)
    await getPost
    this.setState({
      post: [...this.state.post, this.data]
    })
  }

  componentDidMount() {
    this.callApi()
  }

  render() {
    console.log("App -> render -> this.state", this.state)
    return (
      <React.Fragment>
        <div style={{ height: "100%", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.callApi}
            hasMore={true}
            threshold={900}
            useWindow={true}
            loader={<div className="loader" key={0}>Loading ...</div>}>
            {this.state.post.map((el, i) =>
              <CardInfo data={el} key={i}></CardInfo>
            )}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    )
  }
}

