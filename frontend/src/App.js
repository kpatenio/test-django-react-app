import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const axios = require('axios').default;

function App() {

  const [testData, setTestData] = useState([]);
  const [alerts, setAlerts] = useState([])

  // const test = () => {
  //   axios.get('http://127.0.0.1:8000/')
  //     .then((response) => {
  //       setTestData(response.data);
  //     })
  // }

  return (
    <div className="App">
      {}
      <header className="App-header">
        <h1>Test Django + React App</h1>
      </header>

      <main>
      <Container>
          <div className="buttons">
            <Button variant="primary" onClick={() => console.log("test")}>Alert</Button>{' '}
            <Button variant="secondary">Clear</Button>{' '}
          </div>

          <h2>Users</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              {testData.map(e => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
      </Container>
      </main>
    </div>
  );
}

export default App;
