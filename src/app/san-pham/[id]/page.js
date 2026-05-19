'use client';

import { use } from "react"; // 1. Import thêm hook use
import Image from "next/image";
import styles from "../productDetail.module.css";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

// Giả sử đây là dữ liệu bạn lấy từ data.js hoặc API
const products = [
  { id: "1", name: "Giày Nike Vomero 18 Nam - Trắng Xanh Đen", image: "/11.jpeg", price: "4.100.000₫", oldPrice: "4.700.000₫" },
];

export default function ProductDetail({ params }) {
  // 2. Sử dụng use(params) để lấy dữ liệu id từ Promise
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // 3. Tìm sản phẩm dựa trên id đã lấy được
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Sản phẩm hiện tại hết hàng !</h1>
        <p>ID nhận được: {id}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.productWrapper}>
        <div className={styles.breadcrumb}>
         {product.name}
        </div>

        <div className={styles.detailContainer}>
          {/* Bên trái: Hình ảnh */}
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <Image src={product.image} alt={product.name} width={500} height={500} priority />
            </div>
            <div className={styles.thumbnailList}>
               <Image src={product.image} alt="thumb" width={80} height={80} className={styles.activeThumb} />
            </div>
          </div>

          {/* Bên phải: Thông tin sản phẩm */}
          <div className={styles.infoSection}>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.metaInfo}>
              <span> Mã sản phẩm: <strong> BN06 </strong></span>
              <span> Kiểu gót: Gót nhọn </span>
            </div>

            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>{product.price}</span>
              <span className={styles.oldPrice}>{product.oldPrice}</span>
            </div>

            <div className={styles.description}>
              <ul>
                <li>Thiết kế khoét lỗ quanh cổ chân độc đáo</li>
                <li>Chất liệu thun cao cấp</li>
                <li>Đế cao su chống trượt an toàn</li>
              </ul>
            </div>

            <div className={styles.options}>
              <div className={styles.optionGroup}>
                <label>Chọn Size:</label>
                <div className={styles.sizeList}>
                  {['35', '36', '37', '38', '39'].map(size => (
                    <button key={size} className={styles.sizeBtn}>{size}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <div className={styles.quantityInput}>
                <button>-</button>
                <input type="number" defaultValue="0" min="1" />
                <button>+</button>
              </div>
              <button className={styles.addToCartBtn}>THÊM GIỎ HÀNG</button>
              <button className={styles.buyNowBtn}>MUA NGAY</button>
            </div>

            <div className={styles.policy}>
              <p>🚚 GIAO HÀNG MIỄN PHÍ</p>
              <p>🔄 ĐỔI TRẢ MIỄN PHÍ TRONG 30 NGÀY</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}