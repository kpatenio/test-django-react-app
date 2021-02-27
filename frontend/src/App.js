import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const axios = require('axios').default;

function App() {

  const [testData, setTestData] = useState([]);

  useEffect(() => {
    getUsers()
  }, [])

  const onSubmit = (e) => {
    // prevent refresh
    e.preventDefault();
    // prevent DOM bubbling (redundant in this example)
    e.stopPropagation();

    // TODO - do not hardcode
    // TODO - location origin
    axios.post('http://[2605:fd00:4:1001:f816:3eff:fe06:dc82]/api/users', {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value
    })
  }

  const getUsers = () => {
    axios.get('http://[2605:fd00:4:1001:f816:3eff:fe06:dc82]/api/users')
      .then((response) => {
        const usersJson = response.data.users;
        const users = Object.entries(usersJson);

        for (const [key, value] of users) {
          let tmpObj = {};
          tmpObj["id"] = key;
          tmpObj["values"] = value;
          setTestData(arr => [...arr, tmpObj]);
        }
      })
  }

  return (
    <div className="App">
      {}
      <header className="App-header">
        <h1>Test Django + React App</h1>
      </header>

      <main>
      <Container>

        <Form onSubmit={onSubmit}>
          <Form.Group>
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <div className="buttons">
            <Button variant="primary" type="submit" className="buttons">
            Submit
            </Button>
          </div>
        </Form>

        <h2>Users</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {testData.map(e => (
              <tr>
                <td>{e.id}</td>
                <td>{e.values.email}</td>
                <td>{e.values.name}</td>
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
