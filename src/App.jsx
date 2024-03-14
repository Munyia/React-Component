import './App.css'; // Importing custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import Button from 'react-bootstrap/Button'; // Importing Button component from react-bootstrap library
import Card from 'react-bootstrap/Card'; // Importing Card component from react-bootstrap library
import Name from './Name'; // Importing Name component
import Description from './Description'; // Importing Description component
import Price from './Price'; // Importing Price component
import Image from './Image'; // Importing Image component

function App() {
  let name = "Munyia"; // Define name variable

  return (
    <div id='comp'> {/* Main container with ID 'comp' */}
      <Card style={{ width: '18rem' }}> {/* Bootstrap Card component */}
        <Image /> {/* Image component */}
        <Card.Body> {/* Card body */}
          <Card.Title><Name /></Card.Title> {/* Display Name component */}
          <Card.Text> {/* Card text */}
            <Description /> {/* Display Description component */}
          </Card.Text>
          <Button variant="primary"><Price /></Button> {/* Display Price component inside Button */}
        </Card.Body>
      </Card>
      <h1>Hello {name ? name : "there" }</h1> {/* Conditional rendering of greeting */}
      {name && <img id='pet' src='https://previews.123rf.com/images/isselee/isselee2210/isselee221000210/192897090-tabby-striped-mixed-breed-cat-and-rottweiler-dog-looking-at-camera-isolated-on-white.jpg' alt="Pet" />} {/* Conditional rendering of image */}
    </div>
  );
}

export default App;
