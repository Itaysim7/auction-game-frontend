import React from 'react';
import './training/training.css';


function Matrix(props)
 {

  return (
    <table> 
        <thead>      
            <tr style= {{width: `${props.size}px`,height: `${props.size}px`}}>
                <th style= {{width: `${props.size}px`,height: `${props.size}px`}}> <h6>value/
                    <br/> type</h6></th>
                { [...Array(props.x)].map( (ex,ix) => {
                    return <th key={ix} style= {{width: `${props.size}px`,height: `${props.size}px`}}>v{ix+1}</th>
                })}
            </tr>
        </thead> 
        <tbody >
            { [...Array(props.y)].map( (ey,iy) => {
            return (
                <tr key={iy} style= {{width: `${props.size}px`,height: `${props.size}px`}}>
                    <td style={{backgroundColor : 'orange',width: `${props.size}px`,height: `${props.size}px`}}>t{iy+1}</td>
                    { [...Array(props.x)].map((ex, ix) => {
                    return (<td key={ix} style= {{width: `${props.size}px`,height: `${props.size}px`}}>{props.table[iy][ix]}$</td>)
                    })}
                </tr>
            )
            })} 
        </tbody>               
    </table>
  );
}

export default Matrix;



