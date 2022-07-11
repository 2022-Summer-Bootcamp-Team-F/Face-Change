import Header from './component/Header';
import Comment from './component/Comment';
import PicturePageBtn from './component/PicturePageBtn';
import ExamplePictures from './component/ExamplePictures';
import Slide from './component/Slide';
import Gallery from './component/Gallery';

function App() {
  return (
   <>
    <Header />
    <div className="container">
      <Comment />
      <PicturePageBtn />
      <ExamplePictures />
      <Slide />
      <Gallery />
    </div>
   </>
  );
}

export default App;
