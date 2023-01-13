import React, { useState } from "react";
import { Chart } from "react-google-charts";
import styles from "../SelectedGraphic/styles.module.scss";
import { Values } from "../../types/Values";
import { UniqueValue } from "../../types/UniqueValue";
interface Form {
  csv: {
    header: [];
    data: [[]];
  };
}

const SelectedGraphic = ({ csv }: Form) => {
  if (!csv) {
    return null;
  }
  const [search, setSearch] = useState<string>("");

  const allPay: string[][] = [];
  const allOpen: string[][] = [];

  const filteredPay: number[] = [];
  const filteredOpen: number[] = [];

  //separa os items entre pagos e abertos
  csv.data.map((items: any) => {
    items.find((item: string[]) => {
      if (item.includes("pago" || "pago\r")) {
        allPay.push(items);
      }
      if (item.includes("aberto" || "aberto\r")) {
        allOpen.push(items);
      }
    });
  });
  //

  //filtra os pagos por mes
  allPay.find((items: string[]) => {
    items.find((item: string) => {
      if (search == "janeiro") {
        if (item.includes("-01")) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "fevereiro") {
        if (item.includes("-01") || item.includes("-02")) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "marco") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "abril") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "maio") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-05")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "junho") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "julho") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06") ||
          item.includes("-07")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "agosto") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06") ||
          item.includes("-07") ||
          item.includes("-08")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "setembro") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06") ||
          item.includes("-07") ||
          item.includes("-08") ||
          item.includes("-09")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "outubro") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06") ||
          item.includes("-07") ||
          item.includes("-08") ||
          item.includes("-09") ||
          item.includes("-10")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "novembro") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06") ||
          item.includes("-07") ||
          item.includes("-08") ||
          item.includes("-09") ||
          item.includes("-10") ||
          item.includes("-11")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
      if (search == "dezembro") {
        if (
          item.includes("-01") ||
          item.includes("-02") ||
          item.includes("-03") ||
          item.includes("-04") ||
          item.includes("-06") ||
          item.includes("-07") ||
          item.includes("-08") ||
          item.includes("-09") ||
          item.includes("-10") ||
          item.includes("-11") ||
          item.includes("-12")
        ) {
          items.filter((value: string) => {
            if (value.includes(".")) {
              filteredPay.push(parseInt(value));
            }
          });
        }
      }
    });
  });
  //
    //filtra os abertos por mes
    allOpen.find((items: string[]) => {
      items.find((item: string) => {
        if (search == "janeiro") {
          if (item.includes("-01")) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "fevereiro") {
          if (item.includes("-01") || item.includes("-02")) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "marco") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "abril") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "maio") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-05")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "junho") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "julho") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06") ||
            item.includes("-07")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "agosto") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06") ||
            item.includes("-07") ||
            item.includes("-08")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "setembro") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06") ||
            item.includes("-07") ||
            item.includes("-08") ||
            item.includes("-09")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "outubro") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06") ||
            item.includes("-07") ||
            item.includes("-08") ||
            item.includes("-09") ||
            item.includes("-10")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "novembro") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06") ||
            item.includes("-07") ||
            item.includes("-08") ||
            item.includes("-09") ||
            item.includes("-10") ||
            item.includes("-11")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
        if (search == "dezembro") {
          if (
            item.includes("-01") ||
            item.includes("-02") ||
            item.includes("-03") ||
            item.includes("-04") ||
            item.includes("-06") ||
            item.includes("-07") ||
            item.includes("-08") ||
            item.includes("-09") ||
            item.includes("-10") ||
            item.includes("-11") ||
            item.includes("-12")
          ) {
            items.filter((value: string) => {
              if (value.includes(".")) {
                filteredOpen.push(parseInt(value));
              }
            });
          }
        }
      });
    });
    //
let payedValue = 0;
    for(let i = 0; i< filteredPay.length;i++){
      payedValue += filteredPay[i]
    }
    const payed = payedValue;

    let openValue = 0;
    for(let i = 0; i< filteredOpen.length;i++){
      openValue += filteredOpen[i]
    }
    const open = openValue;

    const inadimplence = open / (open + payed);

    const data = [
      ["Element", "Valor", { role: "style" }],
      ["Inadimplência do mês", inadimplence, "rgb(51, 102, 204)"],
    ];
    const options = {
      title: "Valor total",
    };
  return (
    <>
      <section className={styles.container}>
        <h1>selecione um mês para consultar</h1>
        <select
          name="select"
          id="select"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        >
          <option defaultValue=""></option>
          <option value="janeiro">janeiro</option>
          <option value="fevereiro">fevereiro</option>
          <option value="marco">março</option>
          <option value="abril">abril</option>
          <option value="maio">maio</option>
          <option value="junho">junho</option>
          <option value="julho">julho</option>
          <option value="agosto">agosto</option>
          <option value="setembro">setembro</option>
          <option value="outubro">outubro</option>
          <option value="novembro">novembro</option>
          <option value="dezembro">dezembro</option>
        </select>
       <div className={styles.content}>
       <Chart
            chartType="ColumnChart"
            data={data}
            options={options}
            width="100%"
            height="350px"
          />
       </div>
      </section>
    
    </>
  );
};

export default SelectedGraphic;
