import Header from '../components/Header/Header';
import TitleBtn from '../components/Button/TitleBtn';
import './css/CongratsPage.css'
import { Link } from 'react-router-dom';

function CongratsPage() {

  const naslov = 'ČESTITAMO!'
  const btnTitle = 'NOVA PRETRAGA'

  return (
    <div className="congrats-page">
      <Header header={naslov}/>
      <div className='paragh-div'>
          <div className='first-paragh'>
              <h2 className='h2'>ČESTITAMO! Potvrđeni email je poslat na vašu email adresu.</h2>
          </div>
          <div className='second-paragh'>
              <h2 className='h2'>Svi rezultati će u najkraćem roku biti poslani na vašu adresu.</h2>
          </div>
          <div className='third-paragh'>
              <h1 className='h1'>Ako želite novu pretragu idete na</h1>
          </div>
          
          <Link to='/'>
            <TitleBtn title={btnTitle}/>
          </Link>
          
      </div>
    </div>
  );
}

export default CongratsPage;