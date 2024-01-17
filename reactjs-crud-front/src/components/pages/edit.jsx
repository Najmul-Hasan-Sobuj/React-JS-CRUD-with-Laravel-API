// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const editCustomer = async (customerId, customerData) => {
//     return await axios.put(`/api/customers/${customerId}`, customerData);
// }

// const getCustomer = async (customerId) => {
//     const response = await axios.get(`/api/customers/${customerId}`);
//     return response.data;
// }

// const EditCustomer = ({ match }) => {
//     const [customer, setCustomer] = useState({
//         name: '',
//         email: '',
//         phone: ''
//     });
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchCustomer = async () => {
//             const customerData = await getCustomer(match.params.id);
//             setCustomer(customerData);
//         }
//         fetchCustomer();
//     }, [match.params.id]);

//     const handleChange = (e) => {
//         setCustomer({ ...customer, [e.target.name]: e.target.value });
//         setError('');
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!customer.name || !customer.email || !customer.phone) {
//             setError('Please fill in all fields');
//             return;
//         }

//         try {
//             const response = await editCustomer(match.params.id, customer);
//             console.log(response.data);
//         } catch (error) {
//             setError('There was an error updating the customer: ' + error.message);
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <label>
//                 Name:
//                 <input type="text" name="name" value={customer.name} onChange={handleChange} required />
//             </label>
//             <label>
//                 Email:
//                 <input type="email" name="email" value={customer.email} onChange={handleChange} required />
//             </label>
//             <label>
//                 Phone:
//                 <input type="text" name="phone" value={customer.phone} onChange={handleChange} required />
//             </label>
//             <button type="submit">Update Customer</button>
//         </form>
//     );
// }

// export default EditCustomer;