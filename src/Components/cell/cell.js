import { React } from 'react';
import './cell.css';

const Cell = (props) => {
    return (
        <div className={props.className} onClick={props.onClick}>
        {props.text}
        </div>
        )
    };
    export default Cell;