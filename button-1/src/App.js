import glass from "./search.png";
import './App.css';
import user from "./user.png";
import facebook from "./facebook.png";
import facecircle from "./facecircle.png";
import instagram from "./instagram.png";
import instacircle from "./instacircle.png";
import pinterest from "./pinterest.png";
import pincircle from "./pincircle.png";
import tiktok from "./tik-tok.png";
import ticcircle from "./ticcircle.png";
import twitter from "./twitter.png";
import twitcircle from "./twitcircle.png";
import whatsap from "./whatsap.png";
import whatcircle from "./whatcircle.png";
import youtube from "./youtube.png";
import youcircle from "./youcircle.png";
import arrow from "./arrow.png";




function App() {
  const login = document.getElementById("login");
  const signin = document.getElementById("register");

  function register(){
    login.style.left = "-400px";
    signin.style.left ="-20px"
    
  }

  return (
    
    <div>
      
    <div className='btn1'>
      
      <button>
        <span >click here to</span>
      </button>
    </div>
    <div >
      <button className='search' >
      
        <img src={glass} className="glas"/>
      </button>
    </div>
    <div >
      <button className='login' >
        <span1>email</span1>
      </button>
    </div>
    <div >
      <button className='login' >
        <span1>password</span1>
      </button>
      <div className="progress">
        <h1>Steps</h1>
        <ul>
          <li>
            <button className="button1">
              <span2>step1</span2>
              </button>
            <i className="fa">.</i>
          </li>
          <li>
          <button className="button1">
          <span2>step2</span2>
          </button >
          <i className="fa">.</i>
          </li>
          <li>
          <button className="button1">
          <span2>step3</span2>
          </button>
          <i className="fa">.</i>
          </li>
          <li>
          <button className="button1">
          <span2>step4</span2>
          </button><br/>
          <i className="fa">.</i>
          </li>
          <li>
          <button className="button1">
          <span2>step5</span2>
          </button>
          <i className="fa">.</i>
          </li>
          <li>
          <button className="button1">
          <span2>step6</span2>
          </button>
          <i className="fa">.</i>
          </li>
        </ul>
      </div>
      </div>
      <h1>Login </h1>
      <form>
      <img src={user} className="user"/>
      <input  placeholder="login"></input>
    
      
    
      </form>

      <form>
      <img src={user} className="user"/>
      <input  placeholder="password"></input>
    
      
    
      </form>
      
      <div className="containerso">
        <h2>Social icons</h2>
        <ul>
      <img src={facebook} className="face"/>
      <img src={facecircle} className="face1"/>
      </ul>
      <ul>
      <img src={instagram} className="face"/>
      <img src={instacircle} className="face1"/>
      </ul>
      <ul>
      <img src={whatcircle} className="face"/>
      <img src={whatsap} className="face1"/>
      </ul>
      <ul>
      <img src={pinterest} className="face"/>
      <img src={pincircle} className="face1"/>
      </ul>
      <ul>
      <img src={twitter} className="face"/>
      <img src={twitcircle} className="face1"/>
      </ul>
      <ul>
      <img src={tiktok} className="face"/>
      <img src={ticcircle} className="face1"/>
      </ul>
      <ul>
      <img src={youtube} className="face"/>
      <img src={youcircle} className="face1"/>
      </ul>
      </div>
      <div className="container">
        <h2>Check box</h2>
      <button className="check"></button>
      <button className="square"></button>
      </div>
      <div >
        <div className="hero">
        <form id="login">
      <img src={user} className="user"/>
      <input  placeholder="login"></input>
      <ul></ul>
      <img src={user} className="user"/>
      <input  placeholder="password"></input>
      <button className="slide" onClick={register}>register</button>
      </form>
      <form id="register">
      <img src={user} className="user"/>
      <input  placeholder="name-surname"></input>
      <ul></ul>
      <img src={user} className="user"/>
      <input  placeholder="e-mail"></input>
      <ul></ul>
      <img src={user} className="user"/>
      <input  placeholder="password"></input>
      <ul></ul>
      <img src={user} className="user"/>
      <input  placeholder="password again"></input>
    </form>
      
        </div>
      
      </div>
      <div class="dropdown">
  <button class="dropbtn">Combo box</button>
  <div class="dropdown-content">
    <a href="#">Combo box hover</a>
    <a href="#">Combo box hover</a>
    <a href="#">Combo box hover</a>
    <a href="#">Combo box hover</a>
    <a href="#">Combo box hover</a>
    <a href="#">Combo box hover</a>
  </div>
</div>
     
      
      

    </div>
    
     
     
      
    
    

  );
}

export default App;
