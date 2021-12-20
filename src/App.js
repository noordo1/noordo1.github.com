import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='navbar nav-left' align="left">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
          </ul> 
        </div>
        <div className='navbar nav-right'>
          <ul>
            <li><a href="#">About me</a></li>
            <li><a href="#">Contact</a></li>
          </ul> 
        </div>
        <div className='main-content'>
          <div className='carosel'>
            <div className='title'>
              Latest Projects!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
