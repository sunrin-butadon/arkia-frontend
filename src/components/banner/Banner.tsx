import styles from './banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content_wrapper}>

        <div className={styles.title_container}>

          <svg width="95" height="17" viewBox="0 0 95 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.8 10.2V16.5H0.5V0.749999H19.4V16.5H13.1V10.2H6.8ZM6.8 3.9V7.05H13.1V3.9H6.8ZM28.7992 10.2V16.5H22.4992V0.749999H38.2492V3.9H41.3992V7.05H38.2492V10.2H41.3992V16.5H35.0992V10.2H28.7992ZM28.7992 3.9V7.05H35.0992V3.9H28.7992ZM50.7984 10.2V16.5H44.4984V0.749999H50.7984V7.05H53.9484V3.9H57.0984V0.749999H63.3984V3.9H60.2484V7.05H57.0984V10.2H60.2484V13.35H63.3984V16.5H57.0984V13.35H53.9484V10.2H50.7984ZM66.4976 16.5V0.749999H72.7976V16.5H66.4976ZM75.864 3.9V0.749999H94.764V16.5H75.864V7.05H88.464V3.9H75.864ZM88.464 13.35V10.2H82.164V13.35H88.464Z" fill="#FF477E"/>
          </svg>

          <h1 className={styles.title}>
            최신 개정 법령 데이터셋으로<br/>
            나만의 변호사를 만드세요!
          </h1>

        </div>

        <div className={styles.button_group}>
          <a className={styles.lets_go_making_rag_button} href=''>
            직접 RAG 만들러가기
          </a>
          <a className={styles.lets_go_using_rag_button} href=''>
            완성된 RAG 쓰러가기
          </a>
        </div>

      </div>
    </div>
  );
}