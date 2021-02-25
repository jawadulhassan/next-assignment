import axios from "axios";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

const SongsPage = ({ list }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {list.map((item, index) => (
          <div className={styles.grid} style={{ width: 800 }} key={index}>
            <div className={styles.card}>
              <img
                src={item.artworkUrl100}
                alt="pictures"
                style={{
                  width: 80,
                  height: 100,
                }}
              />
              <h3>{item?.trackName}</h3>
              <p>
                {item.artistName} - {item.collectionName}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { name } = context.query;
  const response = await axios.get(
    `https://itunes.apple.com/search?term=${name}`,
    {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const list = response?.data?.results;
  return { props: { list } };
}

export default SongsPage;
