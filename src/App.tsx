import React, { useContext, useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { InputValueContext } from "./context/InputValueContext";

interface AppProps {
  headerText: string;
  optionalText?: string; // this is optional because of the ?
}

interface Address {
  address: string,
  city: string,
  state: string,
  zip: string
}

interface User {
  name: string,
  email: string,
  address: Address
}

function App({headerText}:AppProps) {
  // let { state, dispatch } = useContext(InputValueContext);
  let [user, setUser] = useState<User | null>(null);
  let [formData, setFormData] = useState({ username: '', email: ''})

  useEffect(() => {
    fetchUser();
  }, [])

  let fetchUser = () => {
    setUser({
      name: 'Cody Daig',
      email: 'cody@daig.me',
      address: {
        address: '514 Americas Way #16433',
        city:"Box Elder",
        state: 'SD',
        zip: '57719'
      }
    });
  };

  let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username:'',
      email: ''
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{headerText}</h1>
        {user ? <p>{user.name}</p> : ''}
      </header>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" onChange={onChange} value={formData.username} /> <br />
        <input type="text" name="email" onChange={onChange} value={formData.email} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
