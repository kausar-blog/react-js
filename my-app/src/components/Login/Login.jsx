import { useState } from 'react';
import Greetings from './Greeting';

function Login() {
  const [IsLoggedIn, SetLoggedIn] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => SetLoggedIn(!IsLoggedIn)}
          className="border-2 bg-amber-600"
        >
          {IsLoggedIn ? 'Log Out' : 'Log In'};
        </button>
      </div>
      <Greetings IsLogin={IsLoggedIn} />
    </>
  );
}

export default Login;
