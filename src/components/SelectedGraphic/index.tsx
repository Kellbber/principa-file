import React, { useState } from "react";
import { Chart } from "react-google-charts";
import styles from "../SelectedGraphic/styles.module.scss";
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


  return (
    <>
      <section className={styles.container}>
        <h1>selecione um mês para consultar</h1>
        <select
          name="select"
          id="select"
          onChange={(e) => setSearch(e.target.value)}
        >
          <option defaultValue=""></option>
          <option value="-01">janeiro</option>
          <option value="-02">fevereiro</option>
          <option value="-03">março</option>
          <option value="-04">abril</option>
          <option value="-05">maio</option>
          <option value="-06">junho</option>
          <option value="-07">julho</option>
          <option value="-08">agosto</option>
          <option value="-09">setembro</option>
          <option value="-10">outubro</option>
          <option value="-11">novembro</option>
          <option value="-12">dezembro</option>
        </select>
      </section>
    </>
  );
};

export default SelectedGraphic;
