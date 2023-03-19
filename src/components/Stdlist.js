import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import studentList from '../json/ca192.json';


function Stdlist() {
  const [list, setList] = useState(studentList);

  const handleCheckboxClick = (index) => {
    const updatedList = [...list];
    updatedList[index].isChecked = !updatedList[index].isChecked;
    setList(updatedList);
  };

  return (
    <div style={{
      fontSize:'30px'
    }}>
      {list.map((student, index) => (
        <ol
          start={index + 1}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '500px',
            margin: 'auto',
            marginTop: '2rem',
          }}
          key={student.id}
        >
          <div>
            <abbr
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              title={student.id}
            >
              <li  onClick={() => handleCheckboxClick(index)}>{student.name}</li>
            </abbr>
          </div>

          <div>
            {student.isChecked ? (
              <FaCheckCircle style={{ color: 'green', fontSize: '1.2rem' }} />
            ) : (
              <div
                style={{
                  borderRadius: '50%',
                  border: '1px solid black',
                  width: '1.2rem',
                  height: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                /* onClick={() => handleCheckboxClick(index)} */
              />
            )}
          </div>
        </ol>
      ))}

      <div style={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:'1rem',
        marginBottom:'2rem',

        
        /* padding:'4px', */
        
      }}>
      <button style={{
        padding:'5px 10px',
        fontSize:'1rem',
        border:'none',
        background:'#000',
        color:'#fff',
        cursor:'pointer',
        borderRadius:'6px'
      }}>Reset</button>
      <button style={{
        padding:'5px 10px',
        fontSize:'1rem',
        border:'none',
        background:'green',
        color:'#fff',
        cursor:'pointer',
        borderRadius:'6px'
      }}>Save</button>
      </div>
    </div>
    
  );
}

export default Stdlist;
