//Default.js
import React, { useState, useEffect } from 'react';
import 'src/scss/_custom.scss'
import logo from 'src/assets/brand/enfilogoCrop.png'
import bnblogo from 'src/assets/brand/logo.png'
import buylogo from 'src/assets/brand/buy.png'
import connectlogo from 'src/assets/brand/connect.png'
import { Link, Router, Route } from 'react-router-dom'
import { ethers } from 'ethers';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setEnfiBalance } from 'src/redux/action/enfiBalanceActions';
import { setAddress } from 'src/redux/action/addressActions'; // Import the setAddress action


import ENFI_TOKEN_ABI from './ENFI_TOKEN_ABI.json';
const enfiTokenAddress = '0x7565498C629a443833DC6904D11bD0788E60479a'; // Replace with the actual address

function Default () {

  // const [address, setAddress] = useState('');
  const [bnbBalance, setBnbBalance] = useState(0);
  // const [enfiBalance, setEnfiBalance] = useState(0);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const [yourLoginIdState, setYourLoginIdState] = useState('');

  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);
  // console.log(userData)
  const enfiBalance = useSelector((state) => state.enfiBalance);
  const address = useSelector((state) => state.address);
  // console.log(address)
  // console.log(enfiBalance)

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);

      window.ethereum.on('accountsChanged', (accounts) => {
        const userAddress = accounts[0];
        setAddress(userAddress);
        fetchENFIBalance(userAddress, web3Provider);
      });

      if (window.ethereum.selectedAddress) {
        const userAddress = window.ethereum.selectedAddress;
        setAddress(userAddress);
        fetchENFIBalance(userAddress, web3Provider);
      }
    } else {
      console.error('Web3 provider not detected. Please install MetaMask.');
    }
  }, []);

  useEffect(() => {
    const storedLoginId = localStorage.getItem('LoginId');

    if (storedLoginId) {
      setYourLoginIdState(storedLoginId);
    }
  }, []);

  // ... (previous code)

  const handleConnectWallet = async () => {
    if (!isConnectingWallet) {
      setIsConnectingWallet(true);

      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = web3Provider.getSigner();
        const userAddress = await signer.getAddress();
          dispatch(setAddress(userAddress)); 

        // Fetch both BNB and ENFI balances concurrently
        const [bnbBalanceEth, enfiBalance] = await Promise.all([
          web3Provider.getBalance(userAddress),
          fetchENFIBalance(userAddress, web3Provider),
        ]);

        setBnbBalance(ethers.utils.formatEther(bnbBalanceEth));
        setEnfiBalance(enfiBalance.toString()); // Convert BigNumber to string
  
        // Delayed API call after connecting the wallet
        setTimeout(async () => {
          try {
            const storedLoginId = localStorage.getItem('LoginId');

            if (storedLoginId) {
              setYourLoginIdState(storedLoginId);

              const walletData = {
                LoginId: storedLoginId,
                WalletAddress: userAddress,
                ENFITokenBal: ethers.utils.formatEther(enfiBalance),
                BNBTokenBal: ethers.utils.formatEther(bnbBalanceEth),
                ActionType: 'UADD', // Replace with the actual action type
              };

              const response = await axios.post('http://localhost:5000/user-api/store-wallet-data', walletData);

              if (response.status === 201) {
                console.log('Wallet data stored successfully on the server.');
              } else {
                console.error('Error storing wallet data on the server.');
              }
            }
          } catch (error) {
            console.error('Error while making API call:', error);
          } finally {
            setIsConnectingWallet(false);
          }
        }, 1000); // Delay the API call by 1 second
      } catch (error) {
        console.error('Error connecting wallet:', error);
        setIsConnectingWallet(false);
      }
    }
  };

  const fetchENFIBalance = async (userAddress, web3Provider) => {
    const enfiTokenContract = new ethers.Contract(enfiTokenAddress, ENFI_TOKEN_ABI, web3Provider);
    try {
      const enfiBalance = await enfiTokenContract.balanceOf(userAddress);
      dispatch(setEnfiBalance(enfiBalance)); // Dispatch action to set enfiBalance in Redux
      // console.log(ethers.utils.formatEther(enfiBalance))
      return enfiBalance;
     
    } catch (error) {
      console.error('Error fetching ENFI balance:', error);
      // return ethers.BigNumber.from(0);
    }
  };



  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 ">
        <div className="strip">
          <span className="price strip-box">
            <span className="d-flex">
              <img src={logo} height={30} alt="" />
              &nbsp;
              <p className="">Enfi Price :</p>
            </span>
            &nbsp;
            <p className="">{userData.EnfiPrice}</p>
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="strip">
          <span className="bnb strip-box">
            {' '}
            <span className="d-flex">
              <img src={bnblogo} height={30} alt="" />
              &nbsp;
              <p className="">BNB Smart Chain</p>
            </span>
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="strip">
          <span className="connect strip-box">
            {' '}
            <span className="d-flex">
              <img src={connectlogo} height={30} alt="" />
              &nbsp;
              <button
                className=""
                style={{
                  backgroundColor: '#261245',
                  border: 'none',
                  padding: '1px',
                  // fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
                onClick={handleConnectWallet} // Add onClick event handler
              >
                <p>Connect wallet</p>  
              </button>
            </span>
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="strip">
          <span className="buyenfi strip-box">
            {' '}
            <span className="d-flex">
              <img src={buylogo} height={30} alt="" />
              &nbsp;
              <Link to="/directory/buyenfi" style={{ textDecoration: 'none', color: 'white' }}>
                <p className=" ">Buy Enfi</p>
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Default
