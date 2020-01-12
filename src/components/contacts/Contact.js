import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      showContactInfo: false,
    };

  }

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  onDeleteContact = (id, dispatch) => {
   //// DELETE CONTACT ////
  }
  
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            onClick={this.onDeleteContact.bind(this, id)}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          ></i>
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "poiter",
                float: "right",
                color: "Green",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>
        {showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,

}
export default Contact;