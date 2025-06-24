import React, { useState } from 'react';

const Converter = () => {
    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    const handleCelsius = (e)=>{
        const value = e.target.value
        setCelsius(value)
        if(value===''){
            setFahrenheit('')
            return
        }
        const f= (parseFloat(value)*9)/5+32
        setFahrenheit(f.toFixed(2))
    }
    const handleFahrenheit = (e)=>{
        const value = e.target.value
        setFahrenheit(value)
        if(value===''){
            setCelsius('')
            return
        }
        const c = ((parseFloat(value) - 32) * 5) / 9;
        setCelsius(c.toFixed(2))
    }
    return (
        <div>
            <div>
                <input type="number" value={celsius} onChange={handleCelsius} />
            </div>
            <div>
                <input type="number" value={fahrenheit} onChange={handleFahrenheit} />

            </div>
        </div>
    );
};

export default Converter;