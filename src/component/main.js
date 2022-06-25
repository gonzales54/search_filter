import { useState } from 'react';

const Main = ({data}) => {
    const [data1, setData] = useState(data);

    const inpus = (e) => {
        const word = e.target.value;
        const result = data.filter((item) => {
            return item.first_name.toLowerCase().includes(word.toLowerCase());
        });
        if(word !== ""){
            setData(result);
        }else{
            setData(data);
        }
    }

    return(
        <>
            <input type="text" placeholder="Search" id="text" onChange={inpus}/>
            <ul>
                {data1.map((value, index) => {
                    return (
                        <li key={index}>{value.first_name} {value.last_name}</li>
                    );
                })}
            </ul>
        </>
    );
}

export default Main;