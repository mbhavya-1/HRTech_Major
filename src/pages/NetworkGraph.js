import React, { useEffect, useRef } from 'react';
import { networkData } from '../data/mockData';
import * as d3 from 'd3';

const NetworkGraph = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    const width = 900;
    const height = 600;
    
    svg.attr('viewBox', `0 0 ${width} ${height}`);
    
    // Clear previous graph
    svg.selectAll('*').remove();
    
    // Define color scale for departments
    const departments = [...new Set(networkData.nodes.map(node => node.department))];
    const colorScale = d3.scaleOrdinal()
      .domain(departments)
      .range(['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b']);
    
    // Create tooltip
    const tooltip = d3.select(tooltipRef.current);

    // Create force simulation
    const simulation = d3.forceSimulation(networkData.nodes)
      .force('link', d3.forceLink(networkData.links)
        .id(d => d.id)
        .distance(d => 200 * (1 - d.strength))
      )
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2));
    
    // Create links
    const link = svg.append('g')
      .selectAll('line')
      .data(networkData.links)
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', d => 0.2 + d.strength * 0.8)
      .attr('stroke-width', d => 1 + d.strength * 3);
    
    // Create nodes
    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(networkData.nodes)
      .join('circle')
      .attr('r', d => 5 + (d.trust / 10))
      .attr('fill', d => colorScale(d.department))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .on('mouseover', (event, d) => {
        tooltip.style('opacity', 0.9)
          .html(`
            <strong>${d.name}</strong><br/>
            Department: ${d.department}<br/>
            Trust Score: ${d.trust}
          `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', () => {
        tooltip.style('opacity', 0);
      })
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
    
    // Add node labels
    const labels = svg.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(networkData.nodes)
      .join('text')
      .attr('dx', 12)
      .attr('dy', '.35em')
      .text(d => d.name)
      .style('font-size', '10px');
    
    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
      
      labels
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    });
    
    // Drag functions
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return () => {
      simulation.stop();
    };
  }, []);
  
  return (
    <div>
      <h2 className="dashboard-title text-2xl">Trust Network Graph</h2>
      
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Team Collaboration Network</h3>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded px-3 py-1 bg-white">
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
              <option value="customer-support">Customer Support</option>
            </select>
            <button className="btn btn-primary text-sm">Reset View</button>
          </div>
        </div>
        
        <div className="network-graph-container border border-gray-200 rounded-lg">
          <svg ref={svgRef} className="w-full" style={{ height: '600px' }}></svg>
          <div 
            ref={tooltipRef}
            className="absolute bg-white p-2 rounded shadow-lg border border-gray-200"
            style={{ 
              opacity: 0, 
              pointerEvents: 'none',
              transition: 'opacity 0.2s'
            }}
          ></div>
        </div>
        
        <div className="mt-4">
          <div className="text-sm text-gray-500">
            <strong>How to use:</strong> Drag nodes to reposition. Hover over nodes for details.
            Thicker lines indicate stronger collaboration.
          </div>
          <div className="flex items-center mt-2 space-x-4">
            {['Engineering', 'Marketing', 'Product', 'Customer Support', 'Sales', 'HR'].map(dept => (
              <div key={dept} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b'][
                    ['Engineering', 'Marketing', 'Product', 'Customer Support', 'Sales', 'HR'].indexOf(dept)
                  ] }}
                ></div>
                <span className="text-xs">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkGraph;