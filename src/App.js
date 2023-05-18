
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.log('error:', error);
      })
  };
  const googleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        console.log('error:', error);
      })
  }
  const githubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error:', error);
      })



  }




  return (
    <div className="App">
      {
        user.uid ?
          <button onClick={googleSingOut}>Sing Out </button>

          :
          <>
            <button onClick={googleSingIn}>Sing In With Google</button>
            <br />
            <button onClick={githubSingIn}>Sing In With Github</button>
          </>
      }
      {
        user.uid && <div>
          <h1>User Name:{user.displayName}</h1>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
