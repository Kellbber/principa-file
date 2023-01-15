import React, { useEffect, useState } from "react";
import styles from "../ViewCsv/style.module.scss";

interface Form {
  csv: {
    header: [];
    data: [];
  };
}
interface Data {
  headers: string[];
  data: string[][];
}
const ViewCsv = ({ csv }: Form) => {
  if (!csv) {
    return null;
  }
  const selectedCsv: {
    header: string[];
    data: any;
  } = csv;
  
  return (
    <section className={styles.container}>
      <h5>Seu arquivo CSV </h5>
      <div className={styles.thead}>
        <div className={styles.tr}>
          {selectedCsv.header.map((item: string, index) => (
            <div className={styles.inputHeader} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tBody}>
        {selectedCsv.data.map((row: string[], index: number) => (
          <div className={styles.tr} key={index}>
            {row.map((col, line) => (
              <div
                className={styles.input}
                key={line}
              >{col}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewCsv;
