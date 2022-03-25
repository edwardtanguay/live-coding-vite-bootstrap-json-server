import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Button } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Employee Site</h1>
				<Button className="btn-success">Show Info</Button>
				<Button variant="danger">Delete</Button>
			</Container>
		</div>
	)
}

export default App
