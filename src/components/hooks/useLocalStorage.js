import React, { useEffect, useState } from 'react'


const PREFIX = 'codepencil-';


function useLocalStorage(key, initialvalue) {
    //get this once
    const prefixedKey = PREFIX + key;
    
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }

        if (typeof initialvalue === 'funtion') {
            return initialvalue()
        } else {
            return initialvalue
        }
    });

    //everytime value is changed

    useEffect(()=>{
        localStorage.setItem(prefixedKey,JSON.stringify(value))
    },[prefixedKey,value])

    // const prefixedKey = PREFIX + key;

    return [value,setValue]

}

export default useLocalStorage