import React, {useState} from 'react';

export default function SignUp() {
  const items = ['carter', 'morgan'];
  const [firstName, lastName] = items;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage('Form is not filled out correctly!');
    } else {
      alert(`Hello, ${username}!`);
      setErrorMessage('');
    }
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    const inputType = event.target.name;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'username') {
      setUsername(inputValue);
    } else {
      setPassword(inputValue);
    }
  }

  return (
    <div>
      <form className="form">
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleInputChange}/>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleInputChange}/>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleInputChange}/>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}   
    </div>
    
  )
}