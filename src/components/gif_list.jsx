import React, { Component} from 'react';
import Gif from './gif.jsx'

class GifList extends Component {
  handleClick = (gif) => {
    console.log("gif")
  }
  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id}
      click={this.handleClick}/>
    })
  }
  render() {
    return (
      <div className="gif-list">
      {this.renderList()}
      </div>
      )
  }
}

export default GifList;
