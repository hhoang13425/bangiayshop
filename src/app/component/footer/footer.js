import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.bannerBottom}>
        Shop BanGiay.Com
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          
          <div className={styles.footerColumn}>
            <h4>Tổng Đài Hỗ Trợ</h4>
            <ul>
              <li>Gọi Mua: <strong>1900 232 461</strong></li>
              <li>Khiếu Nại: <strong>1800 1063</strong></li>
              <li>Bảo Hành: <strong>1900 232 465</strong></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Về Công Ty</h4>
            <ul>
              <li>Giới Thiệu</li>
              <li>Tuyển Dụng</li>
              <li>Góp Ý</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Thông tin khác</h4>
            <ul>
              <li>Lịch Sử Mua Hàng</li>
              <li>Chính Sách Đổi Trang</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Website</h4>
            <ul>
              <li>Thế Giới Giày Thể Thao</li>
              <li>TopZone</li>
            </ul>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 Shop BanGiay.Com</p>
        </div>
      </footer>
    </>
  );
}
