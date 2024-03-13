import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';

function App() {
let name= "Munyia"
  return (
    <div id='comp'>
    <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    <h1>Hello {name? name:"there" }</h1>
    {
      name && <img id='pet' src= 'https://previews.123rf.com/images/isselee/isselee2210/isselee221000210/192897090-tabby-striped-mixed-breed-cat-and-rottweiler-dog-looking-at-camera-isolated-on-white.jpg'></img>
    }
    </div>
  )
}

export default App
