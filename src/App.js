import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const inputRef = useRef(null);
  const greetRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
    setName(user);
  })
  function setName(n) {
    navigator.mozL10n.localize(
        greetRef.current,
        'greet',
        {'username': n}
    );
  }
  return (
    <div>
      <div data-l10n-id="header"></div>
      <span data-l10n-id="question"></span>
      <input
        id="name-input"
        ref={inputRef}
        type="text"
        value={user}
        onChange={e => {
          setUser(e.target.value);
          setName(user);
        }}
      />
      <div ref={greetRef} data-l10n-id="greet"></div>
      <div data-l10n-id="content"></div>
      <div data-l10n-id="footer"></div>
    </div>
  );
}

export default App;
