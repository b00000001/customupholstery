export default function Carousel() {
  return (
    <div className="w-full flex justify-center z-0">
      <div className="carousel w-1/2 py-16 rounded">
        <div
          id="slide1"
          className="carousel-item relative w-full flex justify-center"
        >
          <img
            src="https://i.imgur.com/GOXZIS0.jpeg"
            className="rounded"
            style={{height: '500px;', width: '500px;'}}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-center"
        >
          <img
            src="https://i.imgur.com/0vpetf6.jpeg"
            className="rounded"
            style={{height: '600px;', width: '500px;'}}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full flex justify-center"
        >
          <img
            src="https://i.imgur.com/uMu0ya0.jpeg"
            className="rounded"
            style={{height: '600px;', width: '500px;'}}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
