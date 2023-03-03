import React , {Component} from "react";
import './App.css';


class Login extends Component {
  state = {
    field: {
      name: '',
      email: '',
      password: ''
    },
    errors: {
      name: '',
      email: '',
      password: ''
    }
  }

  handleFormOnValidate = (name, value) => {
    if (!value) {
      return 'Mohon isi karakter'
    }

    if (name === 'name' && value.length < 3) {
      return 'Nama minimal 3 karakter'
    }

    if (name === 'email' && !value.includes('@')) {
      return 'Format email tidak sesuai'
    }

    if (name === 'password' && value.length < 8) {
      return 'Password terlalu pendek'
    }

    return false
  }

  handleFormOnChange = (event) => {
    const { field, errors } = this.state
    const { value, name } = event.target
    const error = this.handleFormOnValidate(name, value)
    this.setState({
      field: {
        ...field,
        [name]: value
      },
      errors: {
        ...errors,
        [name]: error
      }
    })
  }

  handleFormOnSubmit = (event) => {
    event.preventDefault()
    const { field } = this.state
    console.log(field)
  }

  render() {
    const { field, errors } = this.state
    return (

        <div>
          <form onSubmit={this.handleFormOnSubmit} className="Form">
          <div>
            <h2 className="judul">Username</h2>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="masukan nama"
              value={field.name}
              onChange={this.handleFormOnChange}
            />
            <p className="eror">{errors.name}</p>
          </div>
        
            <div className="email">
                <h2 className="judul">Email</h2>
                <input 
                type="text"
                name= "email"
                id= "email" 
                placeholder="masukan email"
                value={field.email}
                onChange={this.handleFormOnChange}/>
                <p className="eror">{errors.email}</p>
           </div>
            <div>
                <h2 className="judul">Password</h2>
                <input
                type= "Password"
                name= "Password"
                id= "Password" 
                placeholder="masukan pasword"
                value={field.Password}
                onChange={this.handleFormOnChange}
                />
                <p className="eror">{errors.password}</p>
            </div>
            <div>
                <button type = "submit">Login</button>
            </div>
          </form>
          </div>

      )
    }

  }

export default Login;
