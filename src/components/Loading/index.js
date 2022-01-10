import ReactLoading from "react-loading";
import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <ReactLoading
        type={"spinningBubbles"}
        color={"gray"}
        height={"2em"}
        width={"2em"}
      />
    </div>
  );
}

export default Loading;
