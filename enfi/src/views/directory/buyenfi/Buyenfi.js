import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { BigNumber } from 'bignumber.js';
import coin from 'src/assets/brand/101-07.png'
import './Buyenfi.scss'
import usdt from 'src/assets/brand/usdt.png'
import swapBG from 'src/assets/brand/swapBG.jpg'
import exc from 'src/assets/brand/exc.png'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

function Buyenfi () {

 
  
  const [packages, setPackages] = useState([]);
  const [enfiAmount, setEnfiAmount] = useState(''); // ENFI amount
  const [usdtAmount, setUsdtAmount] = useState(''); // USDT amount
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [amountUSDT, setAmountUSDT] = useState('');
  const [FK_MemId, setFK_MemId] = useState('');
  const [packageName, setPackageName] = useState('');
  const [priceData, setPriceData] = useState('');
  // console.log(priceData)
  const recipientAddress = '0x2107d9e4c9FaFFAfEa6d0A987BD70E430a7CdbDd';
  


  
  useEffect(() => {
    fetch('http://localhost:5000/user-api/get-enfi-price')
      .then((response) => response.json())
      .then((data) => {
        setPriceData(data);
        // console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

   // Fetch FK_MemId from local storage on component mount
  useEffect(() => {
    const storedFK_MemId = localStorage.getItem('FK_MemId');
    if (storedFK_MemId) {
      setFK_MemId(storedFK_MemId);
    }
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch user data from the Node.js API
    axios.get('http://localhost:5000/user-api/get-package')
      .then((response) => {
        // Check if the response contains the expected properties
        if (response.data && Array.isArray(response.data.data)) {
          setPackages(response.data.data); // Use response.data.data as the array
        } else {
          console.error('Invalid response data:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  
  const handlePackageSelection = (event) => {
    const selectedId = Number(event.target.value);
    setSelectedPackageId(selectedId);

    const selectedPackage = packages.find((pkg) => pkg.PK_PackageId === selectedId);
    if (selectedPackage) {
      const enfiAmount = selectedPackage.MinQty;
      setEnfiAmount(enfiAmount);
      setPackageName(selectedPackage.PackageName); // Set PackageName when a package is selected

        
   const usdtEquivalent = new BigNumber(enfiAmount)
   .dividedBy(priceData.data[0].USDTPrice) // Divide by the ENFI to USDT conversion rate
   .multipliedBy(priceData.data[0].EnfiPrice) // Multiply by the USDT value
   
   .toFixed(2); // Adjust the decimal places as needed
 setUsdtAmount(usdtEquivalent);
    } else {
      setEnfiAmount('');
      setPackageName('');
      setUsdtAmount('');
     
    }
  };
 
  const performTransaction = async () => {
    try {
      // Connect to Binance Smart Chain (BSC) using MetaMask or similar provider
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Ensure a valid numeric enfiAmount is provided
        if (isNaN(enfiAmount) || parseFloat(enfiAmount) <= 0) {
          console.error('Invalid enfiAmount provided.');
          
          return;
        }
        

        // Create a contract instance for the USDT token
        const usdtContractAddress = '0x55d398326f99059ff775485246999027b3197955'; // Replace with the actual USDT contract address
        const usdtContractABI =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

        const usdtContract = new ethers.Contract(usdtContractAddress, usdtContractABI, signer);

        // Convert usdtAmount to 18 decimal places
        const usdtAmountWith18Decimals = ethers.utils.parseUnits(usdtAmount.toString(), 18);
  
        // Check the user's USDT balance
        const userUsdtBalance = await usdtContract.balanceOf(signer.getAddress());
  
        if (userUsdtBalance.lt(usdtAmountWith18Decimals)) {
          console.error('Insufficient USDT balance.');
          alert('Insufficient USDT balance. Please make sure you have enough USDT.');
  
          return;
        }
  
        // Continue with the transfer
        const txResponse = await usdtContract.transfer(recipientAddress, usdtAmountWith18Decimals);
        await txResponse.wait();
  
        console.log('USDT Transaction successful:', txResponse.hash);
  
        // Now, make an API call to your backend
        const apiEndpoint = 'http://localhost:5000/user-api/buy-enfi-token';
        const requestData = {
          FK_MemId: FK_MemId,
          RequestQty: usdtAmount,
          FK_PackageId: selectedPackageId,
         PackageName: packageName, // Include PackageName
          MinQty: enfiAmount,
          ActionType: 'Buy Request',
          USDTEquivalent: usdtAmount,
        };
 
        const apiResponse = await axios.post(apiEndpoint, requestData);
        console.log('API Response:', apiResponse.data);

        setSuccessMessage('Transaction and data storage successful.');
      } else {
        console.log('Ethereum wallet (MetaMask) not available.');
      }
    } catch (error) {
      console.error('Error performing USDT transaction:', error);
      alert('Error performing USDT transaction. Please try again later.');
    }
  };
  const CustomSelect = styled.select`
    ${'' /* box-sizing: border-box; */}
    text-align: left;
    padding: 10px;
    ${'' /* background-color: red; */}
    border: none;
    border-bottom: 3px solid #7f4eb5;
    border-radius: 0;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    min-width: 10vw;
    outline: none;
    cursor: pointer;
    transition: border-bottom 0.3s ease;
    ${'' /* appearance: none; */}
    /* Remove the default dropdown arrow */

    option {
      padding: 10px; /* Add padding to the options */
      background-color: #3c215e;
      color: #fff;
    }
  `

 

  return (
    <div className="d-flex justify-content-center align-items-center h">
      <div
        className=" text-white col-12 col-md-8 buyenfi-main pb-3"
        style={{ backgroundImage: `url(${swapBG})`, backgroundSize: 'cover' }}
      >
        <div
          className="py-2 h1"
          style={{ color: 'white', fontSize: '1.6rem', fontWeight: 'bolder', marginLeft: '1rem' }}
        >
         SWAP
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column ">
          <div className="d-flex justify-content-between w-75 bg align-items-center">
            <div className="d-flex align-items-center justify-content-start">
              <img src={coin} height={33} alt="" />
              <label className="label mx-2" htmlFor="">
               ENFI
              </label>
            </div>
            <div className="">
              {/* <select style={{ color: '#ffc919', fontSize: '1.2rem', fontWeight: '500' }}>
                <option value="" disabled selected>
                  Amount
                </option>
                <option value="Option 1">50</option>
                <option value="Option 2">100</option>
                <option value="Option 3">150</option>
              </select> */}
              {/* <CustomSelectWrapper> */}
              <CustomSelect value={selectedPackageId} onChange={handlePackageSelection}>
              <option value="">Select Package</option>
             {packages.map((pkg) => (
              <option key={pkg.PK_PackageId} value={pkg.PK_PackageId}>
              {pkg.PackageName}
              {/* <p value={enfiAmount} > {enfiAmount} </p> */}
              </option>
              
            ))}
              </CustomSelect>
              {/* <CustomSelectIcon>&#9660;</CustomSelectIcon> */}
              {/* </CustomSelectWrapper> */}
            </div>
          </div>
          <img className="my-1" src={exc} alt="" height={60} loading="lazy" />
          <div className="d-flex justify-content-between bg w-75 align-items-center">
            <div className="d-flex align-items-center justify-content-start">
              <img src={usdt} height={28} alt="" />
              <label className="label mx-2" htmlFor="">
            USDT
              </label>
            </div>
            <div className="">
              {/* <CustomSelectWrapper> */}
              <CustomSelect disabled>
              <option value={usdtAmount} > {usdtAmount} </option>
              </CustomSelect>
               {/* </CustomSelectWrapper> */}
            </div>
          </div>
        </div>

        <button disabled={!selectedPackageId || !enfiAmount} onClick={performTransaction} 
        className="button-87 mx-auto mt-5" role="button">
          Confirm Swap
        </button> 
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  )
}

export default Buyenfi
