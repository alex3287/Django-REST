import React from "react";
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': []
    }
  }
  componentDidMount() {
    const users = [
         {
        "url": "http://127.0.0.1:8000/api/user/1/",
        "username": "alex",
        "firstname": "alex",
        "lastname": "li",
        "email": "alex@mail.ru"
        },
        {
        "url": "http://127.0.0.1:8000/api/user/2/",
        "username": "al",
        "firstname": "Max",
        "lastname": "Petrov",
        "email": "petrov@mail.ru"
        },
    ]
      this.setState(
          {
              'users': users
          }
      )
  }

  render() {
    return (
        <div>
          <UserList users={this.state.users} />
        </div>
    )
  }
}

export default App;
