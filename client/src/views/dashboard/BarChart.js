import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import ReactEcharts from 'echarts-for-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function BarChart() {
    const options = {
        responsive: true,
        plugins: {
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    stacked: true,
                    grid: {
                        display: false
                    }
                }
            },
            legend: {
                position: 'top',
                labels: {
                    color: '#000000',
                    font: {
                        size: 10
                    },
                    align: 'center',
                    padding: 5,
                    usePointStyle: true,
                    boxWidth: 6
                }
            }

            // title: {
            //     display: true,
            //     text: 'Monthly Network Performance'
            // }
        }
    };

    //   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'RAN',
                data: [98, 90, 94, 90, 96, 98],
                backgroundColor: '#8884d8'
            },
            {
                label: 'Transmission',
                data: [97, 90, 98, 96, 98, 99],
                backgroundColor: '#82ca9d'
            },
            {
                label: 'Core(CS)',
                data: [99, 97, 98, 99, 99, 99],
                backgroundColor: '#480ca8'
            },
            {
                label: 'Core(PS)',
                data: [98, 99, 98, 97, 98, 99],
                backgroundColor: '#ffc8dd'
            }
        ]
    };

    return (
        <Card
            style={{
                height: '54vh',
                position: 'relative',
                marginBottom: '1%',
                padding: '1%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffff'
                // justifyContent: 'center',
                // alignItems: 'center'
            }}
        >
            <h3 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590', marginLeft: '1rem' }}>Monthly Network Performance</h3>
            <div
                style={{
                    width: '95%',
                    height: '1.5px',
                    backgroundColor: '#6898ce',
                    marginTop: '10px',
                    marginBottom: '10px',
                    marginLeft: '1rem'
                }}
            />
            <Line options={options} data={data} />
        </Card>
    );
}

export default BarChart;
