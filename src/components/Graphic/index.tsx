import { Chart } from "react-google-charts";
import styles from "../Graphic/styles.module.scss";
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
  csv.data.map((items: string[]) => {
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
  csv.data.map((items: string[]) => {
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

  let total = open / (open + sumPayed);
  total.toFixed(6);

  const dataAll = [
    ["Task", "Hours per Day"],
    ["Pago", sumPayed],
    ["Aberto", open],
  ];
  const optionsAll = {
    title: "Valores abertos e pagos",
    colors: ["green", "red"],
  };

  const data = [
    ["Element", "Valor", { role: "style" }],
    ["Inadimplência do ano", total, "rgb(51, 102, 204)"],
  ];
  const options = {
    title: "Valor total",
  };
  return (
    <section className={styles.container}>
      <h1>Valores anuais</h1>
      <div className={styles.content}>
        <div className={styles.secondgraphic}>
          <Chart
            chartType="PieChart"
            data={dataAll}
            options={optionsAll}
            width="100%"
            height="300px"
          />
        </div>
        <div className={styles.firstgraphic}>
          <Chart
            chartType="ColumnChart"
            data={data}
            options={options}
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </section>
  );
};

export default Graphic;
