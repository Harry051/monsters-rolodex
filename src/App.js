import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>Hi {this.state.name.firstName} {this.state.name.lastName}</p>
<button
 onClick={() => {
   this.setState (() => {
     return {
       name: { firstName: 'Lucy', lastName: 'Jones'},
     };
   });
 }}
>
 Change Name</button>
</header> */

// this.state = {
//   monsters: [
//     {
//       name: 'Glaargleschnoot',
//       id: '1'
//     },
//     {
//       name: 'Zaptron',
//       id: '2'
//     },
//     {
//       name: 'Roy',
//       id: '3'
//     },
//     {
//       name: 'DeRoginald',
//       id: '4'
//     }
//   ]
// };
//hardcoded list
