import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ExchangeRates = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2025, 0, i + 1),
      value: 1.25 + Math.random() * 0.1
    }));

    const width = 300;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([1.2, 1.4])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">My Currencies</h2>
        <select className="border rounded-lg px-2 py-1">
          <option>GBP/USD</option>
          <option>EUR/USD</option>
          <option>SGD/USD</option>
        </select>
      </div>
      
      <div ref={chartRef}></div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">GBP Limit</span>
          <span className="text-sm font-semibold">900.00 GBP / 5,000.00 GBP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '18%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
