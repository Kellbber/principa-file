import Head from "next/head";
import styles from "../styles/file.module.scss";
import Icon from "../public/icons/file-icon.svg";
import Image from "next/image";
import { useState } from "react";
import Graphic from "../src/components/Graphic";
import SelectedGraphic from "../src/components/SelectedGraphic";
export default function File() {
  const [csvFile, setCsvFile] = useState<any>();

  const [array, setArray] = useState<any>();

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
      reader.readAsText(file);
    reader.onload = function (e: any) {
      const text = e.target.result;
      const result: any = {
        header: [],
        data: [],
      };
      const [header, ...content] = text.split("\n");
      result.header = header.split(",");

      content.forEach((item: string) => {
        result.data.push(item.split(","));
      });
      setArray(result);
    };
  };
  return (
    <>
      <Head>
        <title>Princípia</title>
        <meta
          name="description"
          content="conversor de arquivo CSV em matriz para leitura de dados em gráfico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.container}>
          <div className={styles.title}>
            <h1>Descomplicando sua vida de forma</h1>
            <span>rápida</span>
            <strong>!</strong>
          </div>
          <div className={styles.input}>
            <Image
              src={Icon}
              width={25}
              alt="file-icon"
              style={{ objectFit: "cover" }}
            />
            <label htmlFor="arquivo">Escolher arquivo</label>
            <input
              type="file"
              name="arquivo"
              id="arquivo"
              accept=".csv"
              onChange={(e: any) => {
                setCsvFile(e.target.files[0]);
              }}
            />
            {csvFile ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (csvFile) submit();
                }}
              >
                Gerar gráficos{" "}
              </button>
            ) : (
              <button disabled={true}> Gerar gráfico</button>
            )}
          </div>
          <Graphic csv={array}/>
          <SelectedGraphic csv={array}/>
        </section>
      </main>
    </>
  );
}