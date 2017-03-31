import React   from 'react';
import css     from 'next/css';
import axios   from 'axios';
import Link    from 'next/link';
import Headers from '../components/headers';
import Detail  from '../components/detail'

let div = css({
  textAlign: 'left',
});

export default class extends React.Component {
  static async getInitialProps () {
    const res = await axios.get('https://api.npmjs.org/downloads/point/last-week/next');
    return {nextNpmDownloads: res.data.downloads};
  }
  render () {
    return <div {...div}>
      <Headers title="About Some 🐊🐊🐊" />
      <Detail caption="About Me" />
      <p>{`${this.props.url.query.story || 'Well, let\'s see...'} Did you know Next has had 
        ${this.props.nextNpmDownloads} on npm in the last month?`}
      </p>
      <Link href='/'>Back to the Gators</Link>
    </div>
  }
}
