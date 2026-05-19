import Image from "next/image";
import Link from "next/link";
import Header from "./component/header/header.js"
import Footer from "./component/footer/footer.js";
import styles from "./page.module.css"; 
export default function Home() {
  const products = [
    { id: 1, name: "Giày Nike Vomero 18 Nam - Trắng Xanh Đen", image: "/11.jpeg", price: "4.100.000₫", oldPrice: "4.700.000₫", discount: "-7%", remain: "Còn 12/30 suất" },
    { id: 2, name: "Giày Nike Metcon 10 Nam - Xanh Rêu", image: "/12.jpeg", price: "4.590.000₫", oldPrice: "4.900.000₫", discount: "-8%", remain: "Còn 10/30 suất" },
    { id: 3, name: "Giày Nike Pegasus 41 Nam - Trắng Xanh Đen", image: "/13.jpeg", price: "3.790.000₫", oldPrice: "3.990.000₫", discount: "-7%", remain: "Còn 18/30 suất" },
    { id: 4, name: "Giày Nike Winflo 11 Nữ - Trắng Ngà", image: "/14.jpeg", price: "2.890.000₫", oldPrice: "3.200.000₫", discount: "-6%", remain: "Còn 15/30 suất" },
    { id: 5, name: "Giày Nike Downshifter 14 Nữ - Trắng ", image: "/15.jpg", price: "2.200.000₫", oldPrice: "2.880.000₫", discount: "-6%", remain: "Còn 14/30 suất" },
    { id: 6, name: "Giày Nike Downshifter 14 Nữ - Đen", image: "/16.jpg", price: "2.600.000₫", oldPrice: "3.500.000₫", discount: "-6%", remain: "Còn 16/30 suất" },
    { id: 7, name: "Giày Nike Downshifter 14 Nam - Trắng Xanh", image: "/17.jpg", price: "2.500.000₫", oldPrice: "3.000.000₫", discount: "-7%", remain: "Còn 13/30 suất" },
    { id: 8, name: "Giày Nike Flex Train Nam - Xanh Trắng", image: "/18.jpg", price: "2.300.000₫", oldPrice: "3.990.000₫", discount: "-7%", remain: "Còn 17/30 suất" },
  ];

  return (
    <div className={styles.container}>
<Header />

      {/* Main Content */}
      <main className={styles.mainArea}>
        <div className={styles.mainContent}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <div className={styles.mainProduct}>
                <div className={styles.productImage}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
                  <span className={styles.badge}>HOT</span>
                </div>
                <div className={styles.productName}>
                  <h5>{product.name}</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>{product.price}</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>{product.oldPrice}</label>
                    <small className={styles.percent}>{product.discount}</small>
                  </span>
                </div>
                <div className={styles.productRemain}>{product.remain}</div>
              </div>
              <Link href={`/san-pham/${product.id}`} className={styles.buyButton}>Mua ngay</Link>
            </div>
          ))}
        </div>
      </main>

          <Footer/>
    </div>
  );
}