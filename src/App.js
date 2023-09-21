import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
    <h1>Login</h1>
    <LoginButton/>
    <LogoutButton/>
    <h2>Profile </h2>
    <Profile/>
    </div>
  );
}

export default App;
