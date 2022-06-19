import React,{ useState} from 'react'
import './nav.css'

export default function Navbar(){
     const [sideitem, setSideitem] = useState(true)

     const Onsideitem = () =>{
          setSideitem(!sideitem)
     }

     return (
               <div className="navlink">
                    <div className="logo">
                         <a href="0" className="no-underline white">MLRL</a>
                    </div>
                    <div className="itemlink" >
                         <a href="0"><button className="navContent">Home</button></a>
                         <a href="0"><button className="navContent">About</button></a>
                         <a href="0"><button className="navContent">Membership</button></a>
                         <a href="0"><button className="navContent">Contact Us</button></a>                              
                    </div>
                    {
                         sideitem?
                    <div className="menu_bars">
                         <button onClick={Onsideitem} hred="0" className="sidebar">
                              <span className="Bar"></span>
                              <span className="Bar"></span>
                              <span className="Bar"></span>
                         </button>
                    </div>
                    :
                    <div className="slidesidebar">
                         <button onClick={Onsideitem} className="sidebar">
                         <span className="Bar"></span>
                         <span className="Bar"></span>
                         <span className="Bar"></span>
                    </button>
                    <div className="sideitembox">
                       <a href="0" className="no-underline"><button className="sidenavContent ">Home</button></a>
                       <a href="0" className="no-underline"><button className="sidenavContent">About</button></a>
                       <a href="0"className="no-underline"><button className="sidenavContent">Membership</button></a>
                       <a href="0" className="no-underline"><button className="sidenavContent">Contact Us</button></a>                              
                    </div>
               </div>
                    
                    }
               </div>
     )
}