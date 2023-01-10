import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Chart } from "react-google-charts";

interface Form {
  csv: {
    header: [];
    data: [[]];
  };
}
const Graphic = ({ csv }: Form) => {
  if (!csv) {
    return null;
  }

  const notPayed: any = [];
  csv.data.map((items: string[], index) => {
    if (items.find((pago) => pago == "aberto\r")) {
      notPayed.push(items);
    }
  });
  const filteredOpen: any = [];
  notPayed.map((item: string[]) => {
    item.map((result) => {
      if (result.includes(".")) {
        filteredOpen.push(parseInt(result));
      }
    });
  });

  let open = 0;

  for (var i = 0; i < filteredOpen.length; i++) {
    open += filteredOpen[i];
  }

  const payed: any = [];
  csv.data.map((items: string[], index) => {
    if (items.find((pago) => pago == "pago\r")) {
      payed.push(items);
    }
  });
  const filteredPayed: any = [];
  payed.map((item: string[]) => {
    item.map((result) => {
      if (result.includes(".")) {
        filteredPayed.push(parseInt(result));
      }
    });
  });

  let sumPayed = 0;

  for (var i = 0; i < filteredPayed.length; i++) {
    sumPayed += filteredPayed[i];
  }

  let total = ((open + sumPayed) / open) * 1000;
  total.toFixed(6);
  console.log(total);

  const data = [
    ["Element", "Valores", { role: "style" }],
    ["Pago", sumPayed, "green"],
    ["Aberto", open, "yellow"],
    ["Inadimplência", total, "red"],
  ];

  return (
    <>
      <h1>Valores anuais</h1>
      <Chart chartType="ColumnChart" data={data} width='100%' height="400px" />
    </>
  );
};

export default Graphic;
