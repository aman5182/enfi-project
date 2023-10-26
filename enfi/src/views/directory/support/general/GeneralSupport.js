import React, { useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button } from 'reactstrap'
const GeneralSupport = () => {
  return (
    <div className="text-white">
      <h3>Compose Your Message</h3>
      <div className="d-flex flex-column col-12 col-lg-8 ">
        <div className="d-flex flex-column my-2">
          <label className="mb-0" htmlFor="subj">
            Subject
          </label>
          <input
            type="text"
            name="subj"
            id="subj"
            style={{
              padding: '0.5rem',
              outline: 'none',
              backgroundColor: '#e9d4ff',
              border: '1px solid #543279',
              borderRadius: '8px',
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <label className="mb-0">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style={{
              padding: '0.5rem',
              outline: 'none',
              backgroundColor: '#e9d4ff',
              border: '1px solid #543279',
              borderRadius: '8px',
            }}
          ></textarea>
        </div>
        <Button style={{ backgroundColor: '#543279', color: 'white', marginTop: '1rem' }}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default GeneralSupport
