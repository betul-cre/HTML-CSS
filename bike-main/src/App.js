
import './App.css';
import bike from "./image/bike.png";
import wheel from "./image/teker.png";
import balons from "./image/blons.png"

function App() {
  return (
    
     
      <div>
        <div className='bike'>
        <img src={bike} alt=""></img>
        </div>
        <div className='wheel'>
        <img src={wheel} className="front"></img>
        <img src={wheel} className="back"></img>
        </div>
        <div className='balons'>
        <img src={balons} className="one"></img>
        <img src={balons} className="two"></img>
        <img src={balons} className="three"></img>
        </div>
      </div>
     
    
  );
}

export default App;
