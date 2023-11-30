import { Chart } from 'react-google-charts';

const LineChart = () => {

    const chartData = [
        ['Year',  'Percentage'],
        ['2018', 700],
        ['2019', 600],
        ['2020', 660],
        ['2021', 730],
        ['2022', 930],
    ];

    const options = {
        title: 'percentage og articles published per year',
    };

    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={chartData}
                options={options}
            />
        </div>
    );
};

export default LineChart;