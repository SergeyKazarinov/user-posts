import { FC } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const AboutMe: FC = () => (
  <Card className='w-75 text-center mx-auto border-0'>
    <Card.Img src='../../../public/about-me.jpg' alt='Card background' style={{ filter: 'blur(200px) contrast(10%)' }}/>
    <Card.ImgOverlay>
      <Card.Body>
        <Card.Title className='text-center text-primary display-2 lead'>Обо мне</Card.Title>
        <Card.Subtitle className='mt-5 display-5'>Привет. Меня зовут Сергей!</Card.Subtitle>
        <Card.Text className='mt-5 display-6 text-start'>Здесь всё просто &#128522;</Card.Text>
        <ListGroup className='text-start mt-4 mb-4 display-6'>
          <ListGroupItem className='bg-secondary'>Информация обо мне</ListGroupItem>
          <ListGroupItem className='bg-secondary'>Информация о моих Hard и Soft-скилах </ListGroupItem>
          <ListGroupItem className='bg-secondary'>Мои проекты</ListGroupItem>
          <ListGroupItem className='bg-secondary'>Ссылка на GitHub</ListGroupItem>
          <ListGroupItem className='bg-secondary'>Мои контакты</ListGroupItem>
        </ListGroup>
        <Card.Text className='mt-5 display-6 text-start'>
          {'Есть на моем '}
          <Card.Link href='https://kazarinov.nomoredomains.club/' className='text-info text-decoration-none' target='_blank'>сайте-портфолио.</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card.ImgOverlay>
  </Card>
);

export default AboutMe;
