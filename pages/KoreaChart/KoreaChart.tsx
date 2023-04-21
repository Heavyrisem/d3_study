import React, { useEffect, useRef } from "react";

import * as d3 from "d3";
import tw from "twin.macro";

const KoreaChart: React.FC<any> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // GeoJSON을 D3의 geoPath() 함수로 변환
    const path = d3
      .geoPath()
      .projection(d3.geoMercator().center([129.5, 35.9]).scale(4000));

    // GeoJSON 데이터 로딩
    // 경계선을 그리기 위한 path 요소 추가
    svg
      .append("path")
      .datum(data)
      .attr("d", path as any)
      .attr("stroke", "black")
      .attr("fill", "none");
  }, [data]);

  return <svg ref={svgRef} width={500} height={500} />;
};

export default KoreaChart;
