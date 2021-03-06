import './App.css';
import Button from './components/button';
import CheckBox from './components/checkbox';
import Image from './components/image';
import {useDispatch} from 'react-redux';
import {loadImages, setActiveImage} from './Redux/actions/gallery';

function App() {
  const images = ['https://i.picsum.photos/id/804/200/300.jpg?hmac=iNvnrzdzAcNx5ZKyG3JWnH4EIYwl-9Lp_4WqWA4R5mo',
                  'https://i.picsum.photos/id/613/200/300.jpg?hmac=0SxLnCBuV8ozZLRM2aLsgqfaFXvvICJP-8ELG_wt0gE',
                  'https://i.picsum.photos/id/717/200/300.jpg?hmac=OJYQhMLNcYlN5qz8IR345SJ7t6A0vyHzT_RdMxO4dSc'
                ]
  const dispatch = useDispatch()
  dispatch(loadImages(images));
  dispatch(setActiveImage(0));

  return (
    <div className="App">
      <Image />
      <Button label='Image 1' imageIndex={0}/>
      <CheckBox label='Image 2' imageIndex={1}/>
      <CheckBox label='Image 3' imageIndex={2}/>
    </div>
  );
}

export default App;
