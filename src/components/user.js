import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
static defaultProps = {
  name: "Bilgi yok",
  salary : " Bilgi Yok ",
  department : " Bilgi Yok "
}

  render() {
   
    //destructing 

    const {name,department,salary} = this.props;
   
    return (
      <div>
     <ul>
      <li>İsim :{name} <i class="fa fa-trash" aria-hidden="true"></i></li>
      <li>Departman :{department} </li>
      <li>Maaş : {salary} </li>
     </ul>
      </div>
    )
  }
}


User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.isRequired

}
export default User;    