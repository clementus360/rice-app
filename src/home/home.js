import '../assets/fonts/Sofia Pro/Sofia Pro Black Az.otf'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'

import './home.scss'

function Home() {
    return (
      <div className="homePage">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  