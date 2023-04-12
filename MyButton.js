import React, {useState} from 'react';

const MyButton = () => {
  
    const [ukuran, SetUkuran] = useState ('lowerCase')

    const ubahUkuran = () =>{
      SetUkuran('upperCase');
    }
    
    return (
    <>
    
    <h1   style={{textTransform: ukuran}}>Miftah Kamiliyah</h1>
    <button onClick = {ubahUkuran}  >capital</button>
    </>
  )
    }


export default MyButton;