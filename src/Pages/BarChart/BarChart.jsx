import { Chart } from 'react-google-charts';

const BarChart = () => {

    const chartData = [
        ['Article', 'Total'],
        ['Politics', 15],
        ['Health', 10],
        ['Entertainment', 8],
        ['Sports',7],
        ['Environment', 9],
        ['International', 12],
        ['Business', 6],
    ];

    const options = {
        title: 'Total Post Article',
    };

    return (
        <div> 
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={chartData}
                options={options}
            />
        </div>
    );
};

export default BarChart;