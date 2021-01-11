import { React, useState } from 'react';
import './field.css';
import Cell from '../cell/cell';

const Field = () => {
    const [data, setData] = useState ([
        {id: 1, text: ''},  {id: 2,  text: ''},  {id: 3,  text: ''},  {id: 4,  text: ''},
        {id: 5,  text: ''}, {id: 6,  text: ''}, {id: 7,  text: ''}, {id: 8,  text: ''},
        {id: 9,  text: ''}, {id: 10,  text: ''}, {id: 11,  text: ''}, {id: 12,  text: ''},
        {id: 13,  text: ''}, {id: 14,  text: ''}, {id: 15,  text: ''}, {id: 16,  text: ''},
        {id: 17,  text: ''}, {id: 18,  text: ''}, {id: 19,  text: ''}, {id: 20,  text: ''},
        {id: 21,  text: ''}, {id: 22,  text: ''}, {id: 23,  text: ''}, {id: 24,  text: ''},
        {id: 25,  text: ''}, {id: 26,  text: ''}, {id: 27,  text: ''}, {id: 28,  text: ''},
        {id: 29,  text: ''}, {id: 30,  text: ''}, {id: 31,  text: ''}, {id: 32,  text: ''},
        {id: 33,  text: ''}, {id: 34,  text: ''}, {id: 35,  text: ''}, {id: 36,  text: ''}
    ]);
    const [count, setCount] = useState(0);
    const [hasItem, setHasItem] = useState(false);
    let classes = ['cell'];
    let changeCount = () => {
        let copyHasItem = hasItem;
        copyHasItem = true;
        setHasItem(copyHasItem);
        classes.join(' ');
        let copyCount = count+1;
        setCount(copyCount);
    };   
    let random =() => {
        return Math.floor(Math.random() * 36) + 1;
    };
    console.log(random());
    if(hasItem) {
        classes.push('active')
    };    
    let addCell = data.map(item => {
        if(random() === item.id) {
            item.text = 'x';
        }
        return <Cell 
        className={classes.join(' ')}
        key={item.id} onClick={changeCount} text={item.text}/>
    });
    let resetCount = () => {
        let copyCount = count;
        copyCount = 0;
        classes.pop();
        setCount(copyCount)
    };
    return (
        <div className='field'>
        <div className='wrapper'>
        {addCell}
        </div>
        <p className='tries'>Tries: <span>{count}</span></p>
        <button className='reset' onClick={resetCount}>Reset</button>
        </div>
        )
    };
    export default Field;