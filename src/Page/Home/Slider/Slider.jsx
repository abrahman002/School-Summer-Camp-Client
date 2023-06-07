

const Slider = () => {
    return (
        <div className='container mx-auto '>
            
            <div className="carousel w-full md:h-[300px] lg:h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXAIeal_h-IA7ot-75uJg0Zkik-GQU3BpaZhm6uj_GQVIsiwAQBOUMr91IqWmGLxDoC0&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvp8488l6lMh0-NUzBXr-pLXltUrbN9pLdcw&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrEGQ8XEKc3voEkZjMa7Adj-vpL70_Z34_A&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXe07DzFOy0wOszbGRaiIsnyRQvOjdWSCHPYFjXx7bGf10LG8UeMlD4-tMH1LNRZKakc4&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Slider;