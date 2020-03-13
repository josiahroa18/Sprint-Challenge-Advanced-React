import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Table from './Table';

function DataPage(){
    const response = useFetch('http://localhost:5000/api/players', null);
    const formattedData = response.filter(woman => {
        return woman.searches > 5;
    })

    return (
        <div>
            {response && (
                <div data-testid='graph'>
                    <LineChart width={1000} height={300} data={formattedData}>
                        <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name"/>
                        <YAxis/>
                    </LineChart>
                </div>
            )}
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Searches</th>
                    </tr>
                    {response.map(woman => {
                        return <Table woman={woman} key={woman.id}/>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DataPage;
