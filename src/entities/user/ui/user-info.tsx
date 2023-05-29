import { FC } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { IUser } from 'types/user';
import image from 'assets/placeholder.jpg';

interface IUserInfo {
  user: IUser;
}

const UserInfo: FC<IUserInfo> = ({ user }) => (
  <Card className='mt-4'>
    <Card.Img src={image} className='w-25 mx-auto'/>
    <Card.Header className='fs-3'>{user?.name}</Card.Header>
    <ListGroup variant='primary' className='fs-4'>
      <ListGroup.Item><Card.Text as='span' className='fw-bold'>Username: </Card.Text>{user.username}</ListGroup.Item>
      <ListGroup.Item><Card.Text as='span' className='fw-bold'>Email: </Card.Text>{user.email}</ListGroup.Item>
      <ListGroup.Item><Card.Text as='span' className='fw-bold'>Website: </Card.Text>{user.website}</ListGroup.Item>
      <ListGroup.Item><Card.Text as='span' className='fw-bold'>Phone: </Card.Text>{user.phone}</ListGroup.Item>
      <ListGroup.Item><Card.Text as='span' className='fw-bold'>Company: </Card.Text>{user.company.name}</ListGroup.Item>
      <ListGroup.Item><Card.Text as='span' className='fw-bold'>Address: </Card.Text>
        {`${user?.address.zipcode}, ${user?.address.city}, ${user?.address.street}, ${user.address.suite}`}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default UserInfo;
