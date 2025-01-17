import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Col, Row, Typography } from 'antd';

const { Title: AntdTitle } = Typography;

// Register components
Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0072bd',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false, // Start y-axis from the lowest value of the dataset
                suggestedMin: Math.min(...coinPrice) * 0.85, // Set a bit lower than the minimum value
                suggestedMax: Math.max(...coinPrice) * 1.15, // Set a bit higher than the maximum value
            },

        },
    };

    return (
        <>
            <Row className='chart-header'>
                <AntdTitle level={2} className='chart-title'>{coinName} Price Chart</AntdTitle>
                <Col className='price-container'>
                    <AntdTitle level={5} className='price-change'>{coinHistory?.data?.change}%</AntdTitle>
                    <AntdTitle level={5} className='current-price'>Current {coinName} Price: ${currentPrice}</AntdTitle>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    );
}

export default LineChart;
