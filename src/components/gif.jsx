import React, { Component} from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.click
  }
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200.gif`
    return (

      <img src={src} alt="" className="gif"
      onClick={this.props.click}/>
      )
  }
}

export default Gif;

