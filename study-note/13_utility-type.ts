interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// (1) 상품 목록을 받아오기 위한 API 함수
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
// (2) 상품 상세 정보 함수
function displayProductDetail(shoppingItem: ShoppingItem) {}


// 모든 타입이 옵셔널이고 싶다. === Partial 타입 동일함.
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
}

type UpdateProduct = Partial<Product>;
// (3) 특정 상품 정보를 업데이트(갱신)하는 함수
// function updateProductItem(productItem: UpdateProduct) {}
function updateProductItem(productItem: Partial<Product>) {}


// (4) 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 (Mapped Type), (Indexed signature?)
// in 이 마치 자바스크립트의 for...in... 처럼 key를 검사해줄 것...
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']? : UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile

// #3 
type UserProfileUpdate = {
  [p in keyof UserProfile]? : UserProfile[p]
}

// #4
type SubSet<T> = {
  [p in keyof T]? : T[p]
}