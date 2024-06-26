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
      name: "John Dorsey" 
    });
  };

  return (
    <div className="App">
      <Header />
      <LandingPage currentUser={currentUser} onLogin={John} />
      <Footer />
    </div>
  );
}

export default App;