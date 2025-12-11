Java - SPRING BOOT
1. Naming Convention
- Class: PascalCase → UserService, OrderController
- Method: camelCase → getUserById()
- Biến: camelCase → userName, totalAmount
- Entity/DTO: PascalCase
- Repository: UserRepository
- Database (SQL): snake_case → user_id, created_at

2. Cấu trúc thư mục
- controller/
- service/
- repository/
- dto/
- entity/
- config/
- exception/
- utils/

3. API Convention
- RESTful chuẩn
- Version: /api/v1/...
- Method: GET/POST/PUT/DELETE
- Response format:
    {"status": "success", "data": {}, "message": ""}
- Error:
    {"status": "error", "message": "User not found", "code": 404}

4. Clean Code
- Class ≤ 300 lines
- Function ≤ 30 lines
- Tên biến phải rõ nghĩa
- Không dùng comment thừa
- Không hardcode giá trị → dùng constant

5. SOLID
- S: Mỗi class 1 nhiệm vụ
- O: Dễ mở rộng, tránh sửa code cũ
- L: Override đúng logic cha
- I: Interface nhỏ gọn
- D: Inject interface, không inject class trực tiếp

6. Format & Tool
- 4 spaces
- Dùng Checkstyle hoặc Spotless
- Code phải pass format trước khi commit

7. Git Convention
Branch: feature/..., bugfix/...
Commit:
- feat: add user API
- fix: login error
- PR phải có reviewer

=================================================================================================

 REACT.JS
1. Naming Convention
- Component: PascalCase → UserForm.jsx
- Function: camelCase → handleSubmit()
- Variable: camelCase → userName, totalPrice
- Constant: UPPER_SNAKE → API_URL
- CSS class: kebab-case → login-container

2. Cấu trúc thư mục
src/
  components/
  pages/
  hooks/
  services/
  store/
  utils/
  assets/

3. Clean Code
- Component nhỏ, dễ đọc
- Không để file > 300 dòng
- Không setState trong vòng lặp
- Không gọi API trong render → dùng useEffect
- Không trộn nhiều logic → tách hooks riêng:
✔ useFetchUser, useLogin

4. API convention (Frontend)
- Tất cả API đặt trong services/
- Không gọi API trực tiếp trong component
- Response mapping trong service trước khi gửi về UI

5. SOLID (Ứng dụng trong React)
- S → Mỗi component 1 nhiệm vụ
- O → Component nhận props để mở rộng
- D → Tách logic ra hooks để dễ thay thế

6. Format & Tool
- Bắt buộc dùng ESLint + Prettier
- Lỗi ESLint phải fix trước khi commit
- Format auto khi save file

7. Git Convention
- Branch: feature/login-page, fix/ui-error
Commit:
- feat: create login component
- refactor: optimize form validation