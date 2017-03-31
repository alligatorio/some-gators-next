import React   from 'react';
import Link    from 'next/link';
import css     from 'next/css';
import Headers from '../components/headers';
import Detail  from '../components/detail';
import assets  from '../static/assets';

let div = css({
  textAlign: 'center',
});

let img = css({
  borderRadius: 12,
  cursor: 'pointer'
});

let slider = css({
  width: 100,
  cursor: 'pointer'
});

export default class extends React.Component {
  constructor () {
    super ();
    this.state = {
      slides: assets.slides,
      captions: assets.captions,
      currentSlide: 0,
      imageWidth: 410
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      imageWidth: event.target.value
    });
  }

  handleClick() {
    let currentSlide = this.state.currentSlide;
    let length = this.state.slides.length;
    this.setState({
      currentSlide: currentSlide + 1 < length ? currentSlide + 1 : 0
    });
  }

  render() {
    return (
      <div className="App" {...div}>
        <Headers title="The Some Gators Collection" />
        <Detail caption={this.state.captions[this.state.currentSlide]} />
        <p>
          <input
            type="range"
            min="100"
            max="720"
            step="5"
            {...slider}
            value={this.state.imageWidth}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <img
            src={this.state.slides[this.state.currentSlide]}
            alt={this.state.captions[this.state.currentSlide]}
            {...img}
            width={this.state.imageWidth}
            onClick={this.handleClick}
          />
        </p>
        <Link href={`about?story=${assets.story}`}>About This Site</Link>
      </div>
    );
  }
}
