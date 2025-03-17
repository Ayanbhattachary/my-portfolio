import { useEffect } from 'react';
import './App.css';
import Profile from './componenets/Profile';

function App() {
 
  useEffect(() => {
    // Check for stored theme preference
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <div>
       <Profile />
    </div>
  );
}

export default App;
