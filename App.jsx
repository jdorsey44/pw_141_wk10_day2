import './App.css'; // App.css

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "John"
  });

  const handleLogin = () => {
    setCurrentUser({
      id: 1,
      name: "John Dorsey" // Example username, replace it with the actual username
    });
  };

  return (
    <div className="App">
      <Header />
      <LandingPage currentUser={currentUser} onLogin={handleLogin} />
      <Footer />
    </div>
  );
}

export default App;