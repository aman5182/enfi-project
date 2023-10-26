// // RequestList.js
// import './styles.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ethers } from 'ethers'; // Import the ethers.js library
// import ENFI_TOKEN_ABI from './ENFI_TOKEN_ABI.json'; // Import the ABI for the ENFI token contract

// function RequestList() {
//   const [allRequests, setAllRequests] = useState([]);
//   const [filteredRequests, setFilteredRequests] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);
//   const [walletAddress, setWalletAddress] = useState(null);

//   // Function to connect the wallet
//   const connectWallet = async () => {
//     try {
//       if (window.ethereum) {
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });

//         if (accounts.length > 0) {
//           const walletAddress = accounts[0];
//           setWalletAddress(walletAddress);
//           alert(`Connected to wallet: ${walletAddress}`);
//         } else {
//           alert('No Ethereum accounts found in MetaMask.');
//         }
//       } else {
//         alert('MetaMask is not installed or not accessible.');
//       }
//     } catch (error) {
//       console.error('Error connecting to wallet:', error);
//       alert('Error connecting to wallet. Please try again.');
//     }
//   };

//   // Function to send ENFI tokens
//   const sendENFITokens = async (recipientAddress, amount, request) => {
//     try {
//       if (!walletAddress) {
//         alert('Please connect your wallet before approving.');
//         return;
//       }

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const enfiTokenContract = new ethers.Contract(
//         '0x7565498C629a443833DC6904D11bD0788E60479a', // ENFI token contract address
//         ENFI_TOKEN_ABI, // ABI for ENFI token
//         signer
//       );

//       // Convert the decimal amount to BigNumber with proper precision (e.g., 18 decimal places)
//       const amountToSend = ethers.utils.parseUnits(amount.toString(), 18);

//       const tx = await enfiTokenContract.transfer(recipientAddress, amountToSend);
//       await tx.wait(); // Wait for the transaction to be mined
//       alert(`Sent ${amount} ENFI tokens to ${recipientAddress}`);

//       // After sending tokens, make an HTTP POST request to update the request status
//       const response = await axios.post('http://localhost:5000/admin-api/admin-approve-request', {
//         PK_RequestId: request.PK_RequestId,
//         ActionType: 'Update Request',
//         RequestStatus: 'Approved',
//       });

//       if (response.status === 200) {
//         alert(`Sent ${amount} ENFI tokens to ${recipientAddress} for request ${request.PK_RequestId}. Request approved.`);
        
//         // You may also want to update the request's status in your UI here if applicable.
//       } else {
//         alert('Error updating request status. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending ENFI tokens:', error);
//       alert('Error sending ENFI tokens. Please try again.');
//     }
//   };

//   useEffect(() => {
//     axios.get('http://localhost:5000/admin-api/all-requests')
//       .then((response) => {
//         setAllRequests(response.data);
//         setFilteredRequests(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching all requests:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedType) {
//       const filtered = allRequests.filter((request) => request.RequestType === selectedType);
   
//       setFilteredRequests(filtered);
//     } else {
//       setFilteredRequests(allRequests);
//     }
//   }, [selectedType, allRequests]);

//   return (
//     <div>
//       <h1>Admin Requests</h1>
//       <button onClick={connectWallet}>Connect Wallet</button>
//       <div>
//         <button
//           className={selectedType === null ? 'active-button' : 'inactive-button'}
//           onClick={() => setSelectedType(null)}
//         >
//           Show All Requests
//         </button>
//         <button
//           className={selectedType === 'Buy Request' ? 'active-button' : 'inactive-button'}
//           onClick={() => setSelectedType('Buy Request')}
//         >
//           Buy Request
//         </button>
//         <button
//           className={selectedType === 'Withdrawl Request' ? 'active-button' : 'inactive-button'} 
//           onClick={() => setSelectedType('Withdrawl Request')}
//         >
//           Withdrawl Request
//         </button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>PK_RequestId</th>
//             <th>RequestStatus</th>
//             <th>Member Name</th>
//             <th>Wallet Address</th>
//             <th>Request Type</th>
//             <th>Request Quantity</th>
//             <th>Enfi Quantity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredRequests.map((request, index) => (
//             <tr key={index}>
//               <td>{request.PK_RequestId}</td>
//               <td>{request.RequestStatus}</td>
//               <td>{request.MemberName}</td>
//               <td>{request.WalletAddress}</td>
//               <td>{request.RequestType}</td>
//               <td>{request.RequestQty}</td>
//               <td>{request.EnfiQty}</td>
//               <td>
//                 {selectedType && request.RequestStatus !== 'Approved' && (
//                   <button
//                     className="approve-button"
//                     onClick={() => sendENFITokens(request.WalletAddress, request.EnfiQty, request)}
//                   >
//                     Approve & Send ENFI
//                   </button>
//                 )}
//                 {request.RequestStatus === 'Approved' && (
//                   <span>Request Approved</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default RequestList;


// multiple transaction 

// BuyRequest.js
// import './styles.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ethers } from 'ethers'; // Import the ethers.js library
// import ENFI_TOKEN_ABI from './ENFI_TOKEN_ABI.json'; // Import the ABI for the ENFI token contract

// function RequestList() {
//   const [allRequests, setAllRequests] = useState([]);
//   const [filteredRequests, setFilteredRequests] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [selectedTransactions, setSelectedTransactions] = useState([]);


//   // Function to connect the wallet
//   const connectWallet = async () => {
//     try {
//       if (window.ethereum) {
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });

//         if (accounts.length > 0) {
//           const walletAddress = accounts[0];
//           setWalletAddress(walletAddress);
//           alert(`Connected to wallet: ${walletAddress}`);
//         } else {
//           alert('No Ethereum accounts found in MetaMask.');
//         }
//       } else {
//         alert('MetaMask is not installed or not accessible.');
//       }
//     } catch (error) {
//       console.error('Error connecting to wallet:', error);
//       alert('Error connecting to wallet. Please try again.');
//     }
//   };

//    // Function to send BNB tokens
//    const sendBNBToken = async (recipientAddress, amount, request) => {
//     try {
//       if (!walletAddress) {
//         alert('Please connect your wallet before approving.');
//         return;
//       }

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();

//       // Send BNB tokens (replace 'YOUR_BNB_TOKEN_ADDRESS' with the actual BNB token contract address)
//       const tx = await signer.sendTransaction({
//         to: recipientAddress,
//         value: ethers.utils.parseEther(amount.toString()), // Convert amount to wei
//       });

//       await tx.wait(); // Wait for the transaction to be mined
//       alert(`Sent ${amount} BNB tokens to ${recipientAddress}`);

//       // After sending tokens, make an HTTP POST request to update the request status
//       const response = await axios.post('http://localhost:5000/admin-api/admin-approve-request', {
//         PK_RequestId: request.PK_RequestId,
//         ActionType: 'Update Request',
//         RequestStatus: 'Approved',
//       });

//       if (response.status === 200) {
//         alert(`Sent ${amount} BNB tokens to ${recipientAddress} for request ${request.PK_RequestId}. Request approved.`);
        
//         // You may also want to update the request's status in your UI here if applicable.
//       } else {
//         alert('Error updating request status. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending BNB tokens:', error);
//       alert('Error sending BNB tokens. Please try again.');
//     }
//   };

//   // Function to send ENFI tokens
//   const sendENFIToken = async (recipientAddress, amount, request) => {
//     try {
//       if (!walletAddress) {
//         alert('Please connect your wallet before approving.');
//         return;
//       }

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const enfiTokenContract = new ethers.Contract(
//         '0x7565498C629a443833DC6904D11bD0788E60479a', // ENFI token contract address
//         ENFI_TOKEN_ABI, // ABI for ENFI token
//         signer
//       );

//       // Convert the decimal amount to BigNumber with proper precision (e.g., 18 decimal places)
//       const amountToSend = ethers.utils.parseUnits(amount.toString(), 18);

//       const tx = await enfiTokenContract.transfer(recipientAddress, amountToSend);
//       await tx.wait(); // Wait for the transaction to be mined
//       alert(`Sent ${amount} ENFI tokens to ${recipientAddress}`);

//       // After sending tokens, make an HTTP POST request to update the request status
//       const response = await axios.post('http://localhost:5000/admin-api/admin-approve-request', {
//         PK_RequestId: request.PK_RequestId,
//         ActionType: 'Update Request',
//         RequestStatus: 'Approved',
//       });

//       if (response.status === 200) {
//         alert(`Sent ${amount} ENFI tokens to ${recipientAddress} for request ${request.PK_RequestId}. Request approved.`);
        
//         // You may also want to update the request's status in your UI here if applicable.
//       } else {
//         alert('Error updating request status. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending ENFI tokens:', error);
//       alert('Error sending ENFI tokens. Please try again.');
//     }
//   };

//   useEffect(() => {
//     axios.get('http://localhost:5000/admin-api/all-requests')
//       .then((response) => {
//         setAllRequests(response.data);
//         setFilteredRequests(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching all requests:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // console.log("Selected Type:", selectedType);
//     // console.log("All Requests:", allRequests);
  
//     if (selectedType) {
//       const filtered = allRequests.filter((request) => request.RequestType === selectedType);
//       // console.log("Filtered Requests:", filtered);
//       setFilteredRequests(filtered);
//     } else {
//       setFilteredRequests(allRequests);
//     }
//   }, [selectedType, allRequests]);


//     const toggleTransactionSelection = (requestId) => {
//     setSelectedTransactions((prevSelected) =>
//       prevSelected.includes(requestId)
//         ? prevSelected.filter((id) => id !== requestId)
//         : [...prevSelected, requestId]
//     );
//   };

//   const isSelected = (requestId) => {
//     return selectedTransactions.includes(requestId);
//   };

//   const performSelectedActions = () => {
//     selectedTransactions.forEach((requestId) => {
//       const request = allRequests.find((r) => r.PK_RequestId === requestId);
//       if (selectedType === 'Buy Request') {
//         sendENFIToken(request.WalletAddress, request.EnfiQty, request);
//       } else if (selectedType === 'Withdrawl Request') {
//         sendBNBToken(request.WalletAddress, request.BNBQty, request);
//       }
//     });
//   };

//   return (
//     <div>
//       <h1>Admin Requests</h1>
//       <button onClick={connectWallet}>Connect Wallet</button>
//       <div>
//         <button
//           className={selectedType === null ? 'active-button' : 'inactive-button'}
//           onClick={() => setSelectedType(null)}
//         >
//           Show All Requests
//         </button>
//         <button
//           className={selectedType === 'Buy Request' ? 'active-button' : 'inactive-button'}
//           onClick={() => setSelectedType('Buy Request')}
//         >
//           Buy Request
//         </button>
//         <button
//           className={selectedType === 'Withdrawl Request' ? 'active-button' : 'inactive-button'}
//           onClick={() => setSelectedType('Withdrawl Request')}
//         >
//           Withdrawl Request
//         </button>
//       </div>
//       {selectedType && (
//         <div>
//           <button onClick={performSelectedActions}>Perform multiple Transaction</button>
//         </div>
//       )}
//       <table>
//         <thead>
//           <tr>
//             <th>PK_RequestId</th>
//             <th>RequestStatus</th>
//             <th>Member Name</th>
//             <th>Wallet Address</th>
//             <th>Request Type</th>
//             <th>Request Quantity</th>
//             <th>Quantity</th>
//             <th>Select</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredRequests.map((request, index) => (
//             <tr key={index}>
//               <td>{request.PK_RequestId}</td>
//               <td>{request.RequestStatus}</td>
//               <td>{request.MemberName}</td>
//               <td>{request.WalletAddress}</td>
//               <td>{request.RequestType}</td>
//               <td>{request.RequestQty}</td>
//               <td>
//                 {request.RequestType === 'Buy Request' ? `${request.EnfiQty} ENFI` : `${request.BNBQty} BNB`}
//               </td>
//               <td>
//                 {selectedType && (
//                   <input
//                     type="checkbox"
//                     onChange={() => toggleTransactionSelection(request.PK_RequestId)}
//                     checked={isSelected(request.PK_RequestId)}
//                   />
//                 )}
//               </td>
//               <td>
//                 {selectedType === 'Buy Request' && request.RequestStatus !== 'Approved' && (
//                   <button
//                     className="approve-button"
//                     onClick={() => sendENFIToken(request.WalletAddress, request.EnfiQty, request)}
//                   >
//                     Approve & Send ENFI
//                   </button>
//                 )}
//                 {selectedType === 'Withdrawl Request' && request.RequestStatus !== 'Approved' && (
//                   <button
//                     className="approve-button"
//                     onClick={() => sendBNBToken(request.WalletAddress, request.BNBQty, request)}
//                   >
//                     Approve & Send BNB
//                   </button>
//                 )}
//                 {request.RequestStatus === 'Approved' && (
//                   <span>Request Approved</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default RequestList;

