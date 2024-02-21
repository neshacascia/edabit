//
//

function birthdayCakeCandles(candles) {
  let count = 0;
  return candles.sort((a, b) => b - a);
}

console.log(birthdayCakeCandles([4, 4, 1, 3]));

//// REACT:

//bestForwardsData.js file:
export const bestForwards = [
  {
    name: 'Neymar Jr',
    team: 'Brazil',
  },
  {
    name: 'Lionel Messi',
    team: 'Argentina',
  },
  {
    name: 'Cristiano Ronaldo',
    team: 'Portugal',
  },
];

//App.js file:
// import bestForwards from './bestForwardsData';

// export default function App() {
//   const forwardsElements = bestForwards.map(forward => (
//     <Forward name={forward.name} team={forward.team} />
//   ));

//   return <div>{forwardsElements}</div>;
// }

// {
//   props.openSpots === 0 && <div>Will I display?</div>;
// }

// creationsData.js file:
// export default [
//   {
//     img: './creations/one-piece-rps.png',
//     name: 'One Piece RPS',
//     summary: 'Twist of rock, paper, scissors using One Piece sprites',
//     tech: 'HTML, CSS, JavaScript',
//   },
//   {
//     img: './creations/aroma-sushi.png',
//     name: 'Aroma Sushi',
//     summary: 'Multi-page website for a sushi restaurant',
//     tech: 'HTML, CSS, React',
//   },
// ];

//function components:

//App.js file:
import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
  }
  loadUserData() {
    this.setState({ userData: null });
    this.fetchID = fetchUserData(this.props.username, userData => {
      this.setState({ userData });
    });
  }
  render() {
    const isLoading = this.state.userData === null;
    let name;
    let bio;
    let friends;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
      name = 'Loading...';
      bio = 'Loading bio...';
      friends = [];
    } else {
      name = this.state.userData.name;
      bio = this.state.userData.bio;
      friends = this.state.userData.friends;
    }

    return (
      <div className={className}>
        <div className="profile-picture">
          {!isLoading && <img src={this.state.userData.profilePictureUrl} />}
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.loadUserData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }
  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
}
