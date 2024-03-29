import {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const submitForm = async (e) =>{
        e.preventDefault();

        const data = {name, email,password};
        // fetching data from the server
        const result = await axios.post('http://localhost:5000/users/register',data)

        console.log(result, 'that was the result');
    }
  return (
    <div className='register'>
        <h1>Register</h1>
        <p>Welcome please create new account</p>

        <Form className='form py-3' onSubmit={submitForm}>
            <Form.Group className="input-group">
                <Form.Control type="text" 
                    placeholder='Name'
                    className="mb-3"
                    name="name"
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="email" 
                    placeholder='Email'
                    className="mb-3"
                    name="email" 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="password" 
                    placeholder='Password'
                    className="mb-3"
                    name="password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="password" 
                    className="mb-3"
                    placeholder='Confirm password'
                    name="password2" 
                    required
                    value={password2}
                    onChange={(e)=>setPassword2(e.target.value)}
                    />
            </Form.Group>
            <Button variant='primary' type='submit' className="my-3 mx-3">Submit</Button>
        </Form>
    </div>
  )
}

export default Register