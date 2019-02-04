import React, { Component} from 'react';
import Search from './search.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }
  search = (query) => {
    giphy('Pvw63B6n65rbmi1fbjUayTaHwRx4QD6f').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (gif) => {
    this.setState({
      selectedGifId: gif
    });
  }
  render() {
    return (
      <div className="container">
      <div className="left-scene">
      <Search search={this.search}/>
      <div className="selected-gif">
      <Gif id= {this.state.selectedGifId}/>
      </div>
      </div>
      <div className="right-scene">
      <GifList gifs={this.state.gifs}
      selectGif={this.selectGif}/>
      </div>
      </div>
      )
  }
}

export default App;
