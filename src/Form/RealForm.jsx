import React, { useState } from 'react'

const RealForm = () => {
    const [student, setStudent] = useState([{id:'', name:'', mail:''}])
  return (
    <div>
            <input type="text"
            name='id'
            value={student.id}
             />
    </div>
  )
}

export default RealForm