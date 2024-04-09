// import logo from './logo.svg';
// import './App.css';
// import Home from './Components/Home';
// import { Route, Routes } from 'react-router-dom';


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       {/* <Route path='login' element={<LoginRoute />} />
//       <Route path='register' element={<RegisterRoute />} />
//       <Route path='profile' element={<Profile/>}/>
//       <Route path='xxxx' element={<DashboardRoute />} />
//       <Route path='otp' element={<OtpRoute/>} />
//       <Route path='forgotpassword' element={<FpForm/>}/>
//       <Route path='poster' element={<Poster />} />
//       <Route path='dashboard' element= {<DashboardRoute />}/>
//       <Route path='payment' element={<PaymentRoute/>}/>
//       <Route path='player' element={<Video/>}/> */}
//     </Routes>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About/About.jsx';
import Event from './Components/Events/Event.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Team from './Components/Team/Team.jsx';
// import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Event/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    </Router>
  );
};

export default App;