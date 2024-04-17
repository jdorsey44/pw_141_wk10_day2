const LandingPage = ({ currentUser, onLogin }) => {
  return (
    <div className="landingpage">
      <h1>Welcome to my React!</h1>
      {currentUser.name !== "Guest" ? (
        <p>Hello, {John.Dorsey}!</p>
      ) : (
        <p>Please log in to access more features.</p>
      )}
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LandingPage; 