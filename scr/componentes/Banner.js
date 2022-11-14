import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgCal/horario calis.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>HORARIOS</h3>
        
        </Carousel.Caption>
      

      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;