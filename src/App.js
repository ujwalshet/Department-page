import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="navbar items-start bg-base-300 rounded-box">
   <div className="flex-1 px-2 lg:flex-none">
    <a className="text-lg bg:blue-500 font-bold">SYNC</a>
    
   </div> 
  
   
  <div className="flex items-start justify-end flex-1 px-2">
    <div className="flex items-stretch">
      <a className="btn btn-ghost font-bold  rounded-btn"></a>
      <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>


      <div className="dropdown dropdown-left  dropdown-hover">
  <label tabIndex={0} className="btn btn-primary m-1">HOME</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-base-100 rounded-box w-52">
    <li><a>MENU</a></li>
    <li><a>QUIT</a></li>
  </ul>
</div>
      
      {/*<div className="dropdown dropdown-bottom   dropdown-hover">
      <label tabIndex={0} className="btn btn-primary m-1">BRANCH</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>ECE</a></li>
      <li><a>CSE</a></li>
      <li><a>EEE</a></li>
      </ul>
  </div>*/}
      
    </div>
    
    
  </div>
  
  
</div>

<div className="hero bg-base-200">
<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">III</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

    
      
      <li><a href="http://localhost:3000/AttendanceMarkingSystem"> ATTENDANCE</a></li>
      <li><a>TIMETABLE</a></li>
      <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" checked className="checkbox" />
  </label>
</div>
      
      
    </ul>
    
  </div>
</div>


  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>



</div>
    





    
    /*<div className="text-center">
    <h1 className="text-center text-4x1 text-grey-500">SYNC</h1>
    <br/>
    
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Button
    </button>
    

    </div>*/
   
  );
}


export default App;
