# i18n Configuration

Thư mục này chứa cấu hình đa ngôn ngữ cho ứng dụng React với cấu trúc phân tầng (namespacing).

## Cấu trúc

```
i18n/
├── index.js          # Cấu hình i18next
├── locales/          # Các file ngôn ngữ
│   ├── en.json       # Tiếng Anh
│   └── vi.json       # Tiếng Việt
└── README.md         # Tài liệu này
```

## Cấu trúc phân tầng (Namespacing)

Các key dịch thuật được tổ chức theo module/chức năng với chữ in hoa:

- **COMMON**: Các từ chung dùng trong toàn bộ ứng dụng
  - `COMMON.WELCOME`, `COMMON.EDIT`, `COMMON.ADD`, `COMMON.DELETE`, etc.

- **APP**: Các từ liên quan đến ứng dụng
  - `APP.TITLE`, `APP.DESCRIPTION`

- **LANGUAGE**: Các từ liên quan đến ngôn ngữ
  - `LANGUAGE.LANGUAGE`, `LANGUAGE.ENGLISH`, `LANGUAGE.VIETNAMESE`

- **USER**: Các từ liên quan đến người dùng
  - `USER.ADD`, `USER.EDIT`, `USER.DELETE`, `USER.LIST`, etc.

## Cách sử dụng

### Trong component React:

```javascript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('COMMON.WELCOME')}</h1>
      <button>{t('USER.ADD')}</button>
      <button>{t('COMMON.DELETE')}</button>
    </div>
  );
}
```

### Ví dụ với phân tầng:

```javascript
// Thay vì: t('add')
// Sử dụng: t('USER.ADD') hoặc t('COMMON.ADD')

// Thay vì: t('edit')
// Sử dụng: t('COMMON.EDIT') hoặc t('USER.EDIT')

// Thay vì: t('language')
// Sử dụng: t('LANGUAGE.LANGUAGE')
```

### Chuyển đổi ngôn ngữ:

```javascript
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 'en' hoặc 'vi'
  };
  
  return (
    <button onClick={() => changeLanguage('vi')}>
      {t('LANGUAGE.VIETNAMESE')}
    </button>
  );
}
```

## Thêm module phân tầng mới

Ví dụ: Thêm module `PRODUCT`

**en.json:**
```json
{
  "PRODUCT": {
    "ADD": "Add Product",
    "EDIT": "Edit Product",
    "DELETE": "Delete Product",
    "LIST": "Product List",
    "NAME": "Product Name",
    "PRICE": "Price"
  }
}
```

**vi.json:**
```json
{
  "PRODUCT": {
    "ADD": "Thêm sản phẩm",
    "EDIT": "Chỉnh sửa sản phẩm",
    "DELETE": "Xóa sản phẩm",
    "LIST": "Danh sách sản phẩm",
    "NAME": "Tên sản phẩm",
    "PRICE": "Giá"
  }
}
```

Sử dụng: `t('PRODUCT.ADD')`, `t('PRODUCT.EDIT')`, etc.

## Thêm key dịch mới vào module có sẵn

Thêm key vào tất cả các file trong `locales/`:

**en.json:**
```json
{
  "USER": {
    "ADD": "Add User",
    "EDIT": "Edit User",
    "NEW_KEY": "New Value"  // ← Thêm key mới
  }
}
```

**vi.json:**
```json
{
  "USER": {
    "ADD": "Thêm người dùng",
    "EDIT": "Chỉnh sửa người dùng",
    "NEW_KEY": "Giá trị mới"  // ← Thêm key mới
  }
}
```

Sử dụng: `t('USER.NEW_KEY')`

## Quy tắc đặt tên

1. **Tên module**: Chữ in hoa, mô tả chức năng (COMMON, USER, PRODUCT, etc.)
2. **Tên key**: Chữ in hoa, mô tả hành động/thuộc tính (ADD, EDIT, DELETE, NAME, etc.)
3. **Cấu trúc**: `MODULE.KEY` (ví dụ: `USER.ADD`, `COMMON.DELETE`)

## Thêm ngôn ngữ mới

1. Tạo file mới trong `locales/` (ví dụ: `fr.json`)
2. Copy cấu trúc từ `en.json` hoặc `vi.json`
3. Thêm vào `index.js`:
   ```javascript
   import translationFR from './locales/fr.json';
   
   const resources = {
     // ... existing
     fr: {
       translation: translationFR
     }
   };
   ```

## Cấu hình

- **fallbackLng**: `'vi'` - Ngôn ngữ mặc định khi không tìm thấy
- **detection**: Tự động phát hiện ngôn ngữ từ localStorage, navigator, hoặc htmlTag
- **caches**: Lưu lựa chọn ngôn ngữ vào localStorage
