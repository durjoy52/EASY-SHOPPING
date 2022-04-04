import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useRevenue from '../../hooks/useRevenue';

const Dashboard = () => {
    const [revenue] = useRevenue() 
    return (
        <div className='grid grid-cols-2 justify-items-center gap-2'>
           <div>
               <h3 className='text-center text-sky-600 font-bold mb-2 text-xl'>MONTH WISE SELL</h3>
               <LineChart width={500} height={300} data={revenue}>
                   <Line type="monotone" dataKey="sell" stroke="#8884d8" ></Line>
                   <XAxis dataKey="month" />
                   <YAxis dataKey="sell"></YAxis>
                   <Tooltip/>
                   <Legend></Legend>
               </LineChart>
           </div>
           <div>
           <h3 className='text-center font-bold text-xl text-sky-600 mb-2'>Investment VS Revenue</h3>
        <AreaChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Area type="monotone" dataKey="investment" stackId="1"stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip />
        </AreaChart>
           </div>
           <div>
           <h3 className='text-center font-bold text-xl text-sky-600 mb-2'>Investment VS Revenue</h3>
           <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
           </div>
           <div>
           <h3 className='text-center font-bold text-xl text-sky-600 '>Investment VS Revenue</h3>
           <PieChart width={500} height={300} >
           <Pie data={revenue} dataKey="investment" stackId="1" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label/>
          <Pie data={revenue} dataKey="revenue" stackId="1" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip></Tooltip>
        </PieChart>
           </div>
        </div>
    );
};

export default Dashboard;