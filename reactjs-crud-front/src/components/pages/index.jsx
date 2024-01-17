// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const getCustomers = async () => {
//     const response = await axios.get(`/api/customers`);
//     return response.data;
// }

// const deleteCustomer = async (customerId) => {
//     return await axios.delete(`/api/customers/${customerId}`);
// }

// const IndexCustomer = () => {
//     const [customers, setCustomers] = useState([]);

//     useEffect(() => {
//         const fetchCustomers = async () => {
//             const customersData = await getCustomers();
//             setCustomers(customersData);
//         }
//         fetchCustomers();
//     }, []);

//     const handleDelete = async (customerId) => {
//         await deleteCustomer(customerId);
//         const newCustomers = customers.filter(customer => customer.id !== customerId);
//         setCustomers(newCustomers);
//     }

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {customers.map((customer) => (
//                     <tr key={customer.id}>
//                         <td>{customer.name}</td>
//                         <td>{customer.email}</td>
//                         <td>{customer.phone}</td>
//                         <td>
//                             <Link to={`/edit-customer/${customer.id}`}>Edit</Link>
//                             <button onClick={() => handleDelete(customer.id)}>Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// export default IndexCustomer;