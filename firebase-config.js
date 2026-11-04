// Cấu hình Firebase của dự án "tapsan"
// (khoá apiKey của ứng dụng web không phải bí mật; việc bảo vệ dữ liệu nằm ở Security Rules)
export const firebaseConfig = {
  apiKey: "AIzaSyAPwSRl_B0YLoj-HitpydOwh8TQZBwS0ds",
  authDomain: "tapsan.firebaseapp.com",
  projectId: "tapsan",
  storageBucket: "tapsan.firebasestorage.app",
  messagingSenderId: "169651856084",
  appId: "1:169651856084:web:bb2df2da56edc725d69141",
  measurementId: "G-WBY4VZ9FMC"
};
export const configured = !firebaseConfig.apiKey.startsWith("YOUR_");
