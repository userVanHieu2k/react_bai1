import logo from './logo.svg';
import kurumi from './image/kurumi.jpg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <p>React Trainning D6</p>

      <div className="khung">
          <img src={kurumi} className="anh"></img>
          <h3>{props.name}</h3>
          <p>{props.content}</p>
        </div>
    </div>
  );
}

export default App;
