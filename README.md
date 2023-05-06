# Pure-react-login-public-private-page


## 1. Package install 

```
npx create-react-app .

npm i react-router-dom 

```
## 2. Main Component Structure

```
/src/index.js

/src/app/App.js

/src/contexts/AuthContext.jsx
/src/hooks/userAuth.js

/src/pages/HomePage.jsx
/src/pages/LoginPage.jsx
/src/pages/RegisterPage.jsx
/src/pages/DashBoardPage.jsx
/src/pages/ProfilePage.jsx

/src/routes/router.jsx
/src/routes/privateRouter.js
/src/routes/publicRouter.js



```

## 3. Main Service ที่ใช้เกี่ยวเนื่องกัน

### /src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import AuthContextProvider from './contexts/AuthContext';
```
### /src/app/App.js

```
import './App.scss';
import Router from '../routes/Router';
import { useAuth } from '../hooks/useAuth';
```

### /src/contexts/AuthContext.jsx
```
import { createContext, useState } from 'react';
```
### /src/hooks/userAuth.js

```
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
```
### /src/pages/HomePage.jsx
```
import { useState } from 'react';
import { Link } from 'react-router-dom';
```
### /src/pages/LoginPage.jsx
```
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
```

### /src/pages/RegisterPage.jsx
```
import { Link } from 'react-router-dom';
```
### /src/pages/DashBoardPage.jsx
```
import React from 'react';
import TodoContextProvider from '../contexts/TodoContext';
```

### /src/pages/ProfilePage.jsx
```
import React from 'react';
import TodoContextProvider from '../contexts/TodoContext';
```

### /src/routes/router.jsx

```
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';
```
### /src/routes/privateRouter.js
```
import { Navigate } from 'react-router-dom';
import TodoPage from '../pages/DashBoardPage';
import ProfilePage from '../pages/ProfilePage';
```
### /src/routes/publicRouter.js

```
import { Navigate } from 'react-router-dom';
import LoginPage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

```


## 4. Work flow diagram
## 5. Setup Design 
ไฟลล์ที่จะต้องทำ design
```

/src/pages/HomePage.jsx
/src/pages/LoginPage.jsx
/src/pages/RegisterPage.jsx
/src/pages/DashBoardPage.jsx
/src/pages/ProfilePage.jsx

```
<a href="https://github.com/issarapong/react-login-public-private-page/tree/setup_design">Setup Design branch </a>

## 6. Setup Logic

### 6.1 Setup Router

```
/src/routes/router.jsx
/src/routes/privateRouter.js
/src/routes/publicRouter.js


-----Controll----
/src/pages/HomePage.jsx
/src/pages/LoginPage.jsx
/src/pages/RegisterPage.jsx
/src/pages/DashBoardPage.jsx
/src/pages/ProfilePage.jsx
```


## 7. Test 
