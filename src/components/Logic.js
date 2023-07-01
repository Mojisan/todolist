import { useState } from 'react'

function Logic() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [number, setNumber] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTotal = parseInt(num1) + parseInt(num2)
        setNumber([...number, newTotal])

        setNum1(0);
        setNum2(0);
    }

    const deleteData = (index) => {
        const newNumber = number.filter((_,i) => i !== index);
        setNumber(newNumber);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={num1} onChange={(e) => setNum1(e.target.value)}/>
                <input value={num2} onChange={(e) => setNum2(e.target.value)}/>
                <input type='submit'></input>
            </form>
            <div>
                {number.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                        <button onClick={() => deleteData(index)}>Delete</button>
                    </div>
                ))}
                <button onClick={() => setNumber([])}>Delete All</button>
            </div>
        </div>
    );
}

export default Logic;