import { Chart } from "react-google-charts";

const PieChart = () => {

    const data = [
        ["Task", "Hours per Day"],
        ["Meghla", 5],
        ["Parvin", 7],
        ["Mawya", 6],
        ["Jannatun", 5],
    ];
    

    const options = {
        title: 'Publisher Article',
    };

    return (
        <div className="max-w-5xl mx-auto">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
};

export default PieChart;