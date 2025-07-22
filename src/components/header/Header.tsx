import styles from './header.module.scss';
import DarkLogo from '../../assets/icon/darklogo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.search_container}>
        <DarkLogo width={96} height={16} className={styles.logo} /> 
        <div className={styles.input_container}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="RAG 파이프라인, 데이터셋 검색 "
          />
        </div>
        </div>
        <div className={styles.user_container}>
          <a className={styles.login_button} href=''>로그인</a>
          <a className={styles.signup_button} href=''>회원가입</a>
        </div>
      </div>
    </header>
  );
}
