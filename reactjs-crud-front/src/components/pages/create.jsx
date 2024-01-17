import { useState, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const createCustomer = async (customerData) => {
    return axios.post(`http://127.0.0.1:8000/api/customers`, customerData)
        .then(response => response.data)
        .catch(error => Promise.reject('There was an error creating the customer: ' + error.message));
}

const CreateCustomer = () => {
    // toast.configure();
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState('');

    const handleChange = useCallback((e) => {
        setCustomer(prevCustomer => ({ ...prevCustomer, [e.target.name]: e.target.value }));
        setError('');
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!customer.name || !customer.email || !customer.phone) {
            setError('Please fill in all fields');
            return;
        }

        createCustomer(customer)
            .then(data => {
                console.log(data);
                toast.success('Customer created successfully!');
            })
            .catch(error => setError(error));
    }, [customer]);

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
                Name:
                <input type="text" className="form-control" name="name" value={customer.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" className="form-control" name="email" value={customer.email} onChange={handleChange} required />
            </label>
            <label>
                Phone:
                <input type="text" className="form-control" name="phone" value={customer.phone} onChange={handleChange} required />
            </label>
            <button type="submit" className="btn btn-outline-secondary">Create Customer</button>
        </form>
    );
}

export default CreateCustomer;