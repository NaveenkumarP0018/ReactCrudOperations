import React, { useState } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset, addData, deleteData } from '../actions';
import { v4 as uuidv4 } from 'uuid';
const Counteradd = (props) => {
    console.log("propsData=>", props);
    const { counter, increment, decrement, reset, addData } = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const handleSubmit = () => {
        let data = {
            id: uuidv4(),
            name: name,
            age: age
        }
        addData(data);
        setName('');
        setAge('')
        console.log('name=>', name, age);
    }
    const handleEdit = (id) => {
        let ind = counter.addedData.findIndex((x) => x.id === id);
        if (ind !== -1) {
            setName(counter.addedData[ind].name);
            setAge(counter.addedData[ind].age)
        }
    }
    const handleDelete = (id) => {
        alert("namammam")
        deleteData(id);
    }
    console.log("addedData", counter)
    return (
        <div className="App">
            {/* <div>{counter}</div>
            <div>
               <button onClick = {()=>increment()}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {()=>decrement()}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button> */}
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input id='age' value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={() => handleSubmit()}>submit</button>
            {counter?.addedData?.length > 0 && <div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>actions</th>
                    </tr>
                    <tbody>
                        {
                            counter.addedData.map((x, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.age}</td>
                                        <td>
                                            <button onClick={() => handleEdit(x.id)}>edit</button>
                                            <button onClick={() => handleDelete(x.id)}>delete</button>
                                            <button>details</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
        addData: (data) => dispatch(addData(data)),
        deleteData: (data) => dispatch(deleteData(data))
    };
};
const mapStateToProps = (state) => {
    return {
        counter: state
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counteradd);