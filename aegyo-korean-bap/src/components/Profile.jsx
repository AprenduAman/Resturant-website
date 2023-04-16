import React,{useState} from 'react';
import Navbar from './Navbar';
import  './profile.css';

export default function Profile() {
  const [cartItems, setCartItems] = useState([]);
    
  return (
    <div>
      <Navbar countCartItems={cartItems.length}/>

      
      <div id="detail">Hello,
           <name>Aprendu Aman</name>

           <add>Your Address: Lovely Professional University, 144411</add>
           </div>

      
      <h2>𝕆𝕣𝕕𝕖𝕣 ℍ𝕚𝕤𝕥𝕠𝕣𝕪</h2>
      <div id='orders'>
      <div id="history">
      <div>1 x Dak Gangjung </div>

      <div>1 x Ganjang Chicken</div>

      <div>1 x Huraideu-chikin </div>

      <div>2 x Ban-Ban/Half-Half </div>
      <hr></hr>

      <div>Total Price : ₹2220.20</div>
      </div> 
      <div id="history">
      <div>1 x Samgetang </div>

      <div>1 x Cass/Korean beer</div>

      <div>1 x Japchae/Glass noodles </div>

      <div>1 x Cucumber Kimchi</div>
      <hr></hr>

      <div>Total Price : ₹1336.70</div>
      </div> 
      <div id="history">
      <div>1 x Korean spring roll </div>

      <div>1 x Doobu Ganjung</div>

      <div>1 x Bokkum Udon </div>

      <div>1 x Milkis </div>
      <hr></hr>

      <div>Total Price : ₹1160.00</div>
      </div> 
      <div id="history">
      <div>1 x Dried Seaweed </div>

      <div>1 x Galbitang</div>

      <div>2 x Chijeu Paudeo Chikin </div>

      <div>1 x Chijeu Paudeo Chikin </div>
      <hr></hr>

      <div>Total Price : ₹1792.70</div>
      </div> 
      <div id="history">
      <div>1 x Ganjang Chicken </div>

      <div>1 x Doobu Ganjung</div>

      <div>1 x Spicy Galbitang </div>

      <div>1 x Sozu </div>
      <hr></hr>

      <div>Total Price : ₹1878.20</div>
      </div>
      <div id="history">
      <div>1 x Yukgaejang </div>

      <div>1 x Jjambbong</div>

      <div>2 x Cucumber Kimchi </div>

      <div>1 x Flavoured Soju </div>
      <hr></hr>

      <div>Total Price : ₹1690.10</div>
      </div>
      
      </div> 
      
      
    </div>
  )
}
