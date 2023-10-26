

import React, { useState, useEffect } from 'react';
import { CRow, CCol } from '@coreui/react'
import { TbUsersGroup } from 'react-icons/tb'
import { GiTeamIdea } from 'react-icons/gi'
import { AiOutlineTrophy, AiOutlineUsergroupAdd } from 'react-icons/ai'
import 'src/scss/_custom.scss'
// import { fetchDataForMember } from './apiService';


function MyComponent() {

  
 
  return (
    <div>
          <h4  style={{
      borderRadius: '5px',
      minHeight: '20px', // Increase the minHeight for a larger div
      color: '#fbd426',
      margin:'25px'
    }}>Decoding the Crypto World!</h4>

   
    <CRow  style={{ margin:'8px', }} >
  
    <CCol sm={6} lg={3}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
    //   padding:'20px',
      background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div style={{ padding: '0px',  background: 'rgb(192 20 2)', borderRadius: '0 0 8px 8px', }} >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>


<CCol sm={6} lg={3}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3}  style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
    //   padding:'30px',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
        
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>

<CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>
  <CCol sm={6} lg={3} style={{padding:"15px"}}>
  <div
    className="primary p-3 mb-3 hover-class"
    style={{
      borderRadius: '8px',
      minHeight: '30vh', // Increase the minHeight for a larger div
      color: 'white',
     background: 'rgb(76 28 103)',
      boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <iframe
      width="100%"
      height="60%" // Decreased the height of the iframe to allocate more space for content
      src="https://www.youtube.com/embed/yubzJw0uiE4?si=Z0RHj7xpscrSn2OJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></iframe>
    <div
      style={{
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      
    </div>
    <p style={{ color: '#fff' }}>
        Additional content below the video goes here.
      </p>
  </div>
</CCol>

  
    </CRow>
    </div>
    );

}

export default MyComponent
