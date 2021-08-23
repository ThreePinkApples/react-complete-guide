import "./ChartBar.css";

export default function ChartBar(props) {
  const dataPoint = props.dataPoint;
  let barFillHeight = "0%";
  console.log(props.maxValue);
  if (props.maxValue > 0) {
    barFillHeight = Math.round((dataPoint.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{dataPoint.label}</div>
    </div>
  );
}
