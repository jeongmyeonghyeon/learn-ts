interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API함수
function fetchProducts(): Promise<Product[]> {
  // ...
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 기존에 정의된 타입을 유틸리티 타입을 통해서 충분히 변환해서 사용할 수 있다.
// (advanced 타입, 유틸리티 타입, 커뮤니티 상에서는 제네릭 타입이라고 불림.)
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
// 상품 상세 정보
function displayProductDetail(shoppingItem: ShoppingItem) {}
