
import "./ImageGallery.css"
const ImageGallery = () => {

  return (
    <div className='container mx-auto my-16'>
      <h4 className="text-3xl font-bold text-center mb-10">Gallery</h4>
      <div class="grid__wrapper">

        <div class="span__two">
          <img src="https://i.ibb.co/F67tBG9/Best-Toy-Fire-Trucks-For-Kids-1.png" alt="" />
        </div>
        <div class="span__one">
          <img src="https://i.ibb.co/3pVbZzF/2.png" alt="" />
        </div>
        <div class="span__two">
          <img src="https://i.ibb.co/BwxxHmm/mini-car.png" alt="" />
        </div>
        <div class="span__two phone_one">
          <img src="https://i.ibb.co/t4vQ0FL/maxresdefault-2.png" alt="" />
        </div>
        <div class="span__one">
          <img src="https://i.ibb.co/X24Sx5C/H09a5d582474a41a0b03429c4af6b8d4-1.png" alt="" />
        </div>
        <div class="span__one">
          <img src="https://i.ibb.co/18cprWh/closeup-child-hand-playing-with.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;