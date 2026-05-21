import Image from "next/image";
import styles from "./header.module.css"; 

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li>Khuyến mãi</li>
          <li>Liên hệ</li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={120} 
          height={32} 
          priority 
        />
      </div>
    </header>
  );
}
