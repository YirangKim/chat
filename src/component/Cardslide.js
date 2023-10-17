import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// Link 컴포넌트를 가져옵니다.
import { Link } from 'react-router-dom'; 

function Cardslide() {

  // 외부 웹 페이지 URL
  let shopUrl = 'https://prod.danawa.com/info/?pcode=20239928&cate=112758&adinflow=Y';

  return (
    <Carousel>
      <Carousel.Item>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/laptop01.jpg" />
          <Card.Body>
            <Card.Title>에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)</Card.Title>
            <Card.Text>
              가격 : 1,510,000원 <br></br>
              무게 : 1kg
            </Card.Text>
             {/* 버튼 외부 링크  */}
             <div>
              <Link to={shopUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">제품 보러가기</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/laptop01.jpg" />
          <Card.Body>
            <Card.Title>에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)</Card.Title>
            <Card.Text>
              가격 : 1,510,000원 <br></br>
              무게 : 1kg
            </Card.Text>
            {/* 버튼 외부 링크  */}
            <div>
              <Link to={shopUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">제품 보러가기</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/laptop01.jpg" />
          <Card.Body>
            <Card.Title>에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)</Card.Title>
            <Card.Text>
              가격 : 1,510,000원 <br></br>
              무게 : 1kg
            </Card.Text>
            <Button variant="primary">제품 보러가기</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default Cardslide;