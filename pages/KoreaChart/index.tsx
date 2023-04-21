import React from "react";

import { NextPage } from "next";

import KoreaChart from "./KoreaChart";
import data from "./ko.json";

const KoreaChartPage: NextPage = () => {
  return <KoreaChart data={data} />;
};

export default KoreaChartPage;
