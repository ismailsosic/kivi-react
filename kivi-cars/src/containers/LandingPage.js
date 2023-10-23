import logo  from '../assets/logo.png'
import TitleBtn from '../components/Button/TitleBtn';
import Header from '../components/Header/Header';
import './css/LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage() {

    const naslov = 'KIVI - CARS';
    var naziv = 'KUPI';
  
    return (
      <div className="landing-page">
        <div className='logo-img'>
            <img className='logo' alt='Logo-img' src={logo}/>
        </div>

        <Header className='header' header={naslov}/>
        <div className='paragraph'>
            <h2> Sva motorna vozila dostupna u oglasima </h2>
            <h2> Na Vaš email </h2>
            <h2 id='besplatno'> BESPLATNO </h2>
            
        </div>
        <Link to='/category'>
          <TitleBtn title={naziv}/>
        </Link>
        
        
      </div>
    );
  }
  
  export default LandingPage;