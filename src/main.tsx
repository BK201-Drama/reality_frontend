/*
 * @Author: chenyixin@ray003 chenyixin@rayvision.com
 * @Date: 2023-02-12 22:32:06
 * @LastEditors: chenyixin@ray003 chenyixin@rayvision.com
 * @LastEditTime: 2023-02-15 23:58:50
 * @FilePath: \realty_frontend\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { stores, StoresContext } from './core/stores'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoresContext.Provider value={stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoresContext.Provider>,
)
