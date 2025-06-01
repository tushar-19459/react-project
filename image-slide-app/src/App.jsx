import ImageSlider from './Components/ImageSlider';

function App() {
    return (
        <div>
            {/* <h1>Image Slider</h1> */}
            <ImageSlider url="https://picsum.photos/v2/list" page={1} limit={4} />
        </div>
    );
}

export default App;
