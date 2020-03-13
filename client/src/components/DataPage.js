import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Table from './Table';
import '../App.css';

function DataPage(){
    const response = useFetch('http://localhost:5000/api/players', null);
    let formattedData = [];

    if(response){
        formattedData = response.filter(woman => {
            return woman.searches > 5;
        })
    }

    return (
        <div className='dataPage'>
            <h3>Women with searches above 5</h3>
            {response && (
                <div data-testid='graph' className='chart'>
                    <LineChart width={1000} height={300} data={formattedData}>
                        <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name"/>
                        <YAxis/>
                    </LineChart>
                </div>
            )}
            <table data-testid='table'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Searches</th>
                    </tr>
                    {response && response.map(woman => {
                        return <Table data-testid='data' woman={woman} key={woman.id}/>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DataPage;
