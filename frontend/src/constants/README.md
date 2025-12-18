# Constants & Enums Guide

Hướng dẫn sử dụng constants và enums trong dự án React + TypeScript.

## 📁 Cấu trúc

```
constants/
├── enum.ts          # Tất cả enums và constants chính
├── routes.ts        # Route constants và helpers
├── index.ts         # Barrel export (import từ đây)
└── README.md        # File này
```

## 🎯 Cách sử dụng

### 1. Import từ barrel export (Khuyến nghị)

```tsx
import { RoutePath, LanguageCode, ButtonVariant, ROUTES } from '@/constants';
// hoặc
import { RoutePath, LanguageCode, ButtonVariant, ROUTES } from '../constants';
```

### 2. Sử dụng Enum trong Components

#### **Route Paths**

```tsx
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/constants';

function MyComponent() {
  const navigate = useNavigate();
  
  // ✅ Tốt: Dùng enum thay vì hardcode string
  const handleLogin = () => {
    navigate(RoutePath.LOGIN);
  };
  
  // ❌ Tránh: Hardcode string
  // navigate('/login');
  
  return <button onClick={handleLogin}>Go to Login</button>;
}
```

#### **Language Codes**

```tsx
import { useTranslation } from 'react-i18next';
import { LanguageCode } from '@/constants';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lang: LanguageCode) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <div>
      <button onClick={() => changeLanguage(LanguageCode.ENGLISH)}>
        English
      </button>
      <button onClick={() => changeLanguage(LanguageCode.VIETNAMESE)}>
        Tiếng Việt
      </button>
    </div>
  );
}
```

#### **Button Variants**

```tsx
import { ButtonVariant } from '@/constants';
import Button from '@/components/ui/Button';

function MyComponent() {
  return (
    <div>
      {/* ✅ Tốt: Dùng enum */}
      <Button variant={ButtonVariant.PRIMARY}>Primary</Button>
      <Button variant={ButtonVariant.SECONDARY}>Secondary</Button>
      <Button variant={ButtonVariant.GHOST}>Ghost</Button>
      
      {/* ❌ Tránh: Hardcode string */}
      {/* <Button variant="primary">Primary</Button> */}
    </div>
  );
}
```

#### **Dynamic Routes**

```tsx
import { useNavigate } from 'react-router-dom';
import { routeHelpers } from '@/constants';

function UserList() {
  const navigate = useNavigate();
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  
  const handleUserClick = (userId: number) => {
    // ✅ Tốt: Dùng helper function
    navigate(routeHelpers.userDetail(userId));
    
    // ❌ Tránh: Hardcode template string
    // navigate(`/app/users/${userId}`);
  };
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => handleUserClick(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

#### **Constants**

```tsx
import { APP_CONSTANTS, STORAGE_KEYS, REGEX_PATTERNS } from '@/constants';

function MyComponent() {
  // ✅ Tốt: Dùng constants
  const appName = APP_CONSTANTS.APP_NAME;
  const maxFileSize = APP_CONSTANTS.MAX_FILE_SIZE;
  
  // Validate email
  const isValidEmail = (email: string) => {
    return REGEX_PATTERNS.EMAIL.test(email);
  };
  
  // Get language from localStorage
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
  
  return <div>{appName}</div>;
}
```

### 3. Sử dụng trong Type Definitions

```tsx
import { LanguageCode, ButtonVariant } from '@/constants';

// Type-safe function parameters
function handleLanguageChange(lang: LanguageCode) {
  // TypeScript sẽ báo lỗi nếu truyền giá trị không hợp lệ
  console.log(lang);
}

// Type-safe props
type MyComponentProps = {
  variant: ButtonVariant;
  language: LanguageCode;
};

function MyComponent({ variant, language }: MyComponentProps) {
  return <div>...</div>;
}
```

### 4. Sử dụng trong Switch/Case

```tsx
import { ActionType } from '@/constants';

function handleAction(action: ActionType) {
  switch (action) {
    case ActionType.CREATE:
      // Handle create
      break;
    case ActionType.UPDATE:
      // Handle update
      break;
    case ActionType.DELETE:
      // Handle delete
      break;
    default:
      // TypeScript sẽ báo lỗi nếu thiếu case
      break;
  }
}
```

## 🔍 Best Practices

### ✅ DO

1. **Luôn import từ `@/constants` hoặc `../constants`**
   ```tsx
   import { RoutePath } from '@/constants';
   ```

2. **Dùng enum cho các giá trị có thể dùng làm type**
   ```tsx
   type MyType = LanguageCode;
   ```

3. **Dùng constants cho các giá trị không cần type safety**
   ```tsx
   const maxSize = APP_CONSTANTS.MAX_FILE_SIZE;
   ```

4. **Tạo helper functions cho dynamic routes**
   ```tsx
   routeHelpers.userDetail(userId)
   ```

### ❌ DON'T

1. **Không hardcode string khi đã có enum/constant**
   ```tsx
   // ❌ Bad
   navigate('/login');
   
   // ✅ Good
   navigate(RoutePath.LOGIN);
   ```

2. **Không import trực tiếp từ file con**
   ```tsx
   // ❌ Bad
   import { RoutePath } from '@/constants/enum';
   
   // ✅ Good
   import { RoutePath } from '@/constants';
   ```

3. **Không tạo enum cho các giá trị chỉ dùng 1 lần**
   ```tsx
   // ❌ Bad: Quá nhiều enum không cần thiết
   enum MyOneTimeValue {
     VALUE = 'value'
   }
   
   // ✅ Good: Dùng const hoặc inline
   const MY_VALUE = 'value';
   ```

## 📝 Thêm Enum/Constant mới

### Bước 1: Thêm vào `enum.ts`

```tsx
// enum.ts
export enum MyNewEnum {
  VALUE1 = 'value1',
  VALUE2 = 'value2',
}
```

### Bước 2: Export từ `index.ts`

```tsx
// index.ts
export { MyNewEnum } from './enum';
```

### Bước 3: Sử dụng trong component

```tsx
import { MyNewEnum } from '@/constants';
```

## 🎨 Ví dụ thực tế

Xem các file sau để tham khảo cách sử dụng:

- `src/components/common/Navbar.tsx` - Sử dụng RoutePath
- `src/components/LanguageSwitcher.tsx` - Sử dụng LanguageCode
- `src/components/ui/Button.tsx` - Sử dụng ButtonVariant
- `src/routers/AppRouter.tsx` - Sử dụng RoutePath

## 🔗 Liên kết

- [TypeScript Enums Documentation](https://www.typescriptlang.org/docs/handbook/enums.html)
- [TypeScript const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

