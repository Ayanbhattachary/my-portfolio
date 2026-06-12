import { useEffect } from 'react';
import './App.css';
import Profile from './componenets/Profile';

function App() {
 
  useEffect(() => {
    // Check for stored theme preference (default to dark if not set)
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === null || savedTheme === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div>
       <Profile />
    </div>
  );
}

export default App;
