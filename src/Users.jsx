import React from 'react';
import User from "./User"

class Users extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);

    this.state = {
      theAddresses: [],
    };
  }

  componentDidMount() {
    console.log('Mounted');
    fetch('https://randomuser.me/api?results=25')
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        this.setState({
          theAddresses: data.results,
        })
      );
  }

  componentDidUpdate() {
    console.log(this.state.theAddresses);
  }


  render() {
    console.log('In render');
    return (
      <ul className="beers">
        {this.state.theAddresses.map((users, index) => {
         return <User firstname={users.name.first} lastname={users.name.last} photo={users.picture.thumbnail} email={users.email} phone={users.phone} age={users.dob.age} streetNumber={users.location.street.number} streetName={users.location.street.name} city={users.location.city} state={users.location.state} postcode = {users.location.postcode}/>
        })}
      </ul>
    );
  }
}

export default Users
