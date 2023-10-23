import Header from '../components/Header/Header';
import ButtonsToolbar from '../components/ButtonsToolbar/ButtonsToolbar';
import CategoryBtns from '../components/CategoryBtns/categorybtns'
import './css/CategoryPage.css'

function CategoryPage(props) {

  const {data, setData} = props.data

  const naslov = 'IZABERITE KATEGORIJU'
  return (
    <div className="category">
        <Header header={naslov}/>
        <ButtonsToolbar routes={props.routes}/>
        <div className='category-buttons'>
          <CategoryBtns data={{data, setData}}/>
        </div>
    </div>
  );
}

export default CategoryPage;