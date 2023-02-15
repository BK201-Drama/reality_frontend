/*
 * @Author: chenyixin@ray003 chenyixin@rayvision.com
 * @Date: 2023-02-13 23:48:46
 * @LastEditors: chenyixin@ray003 chenyixin@rayvision.com
 * @LastEditTime: 2023-02-15 23:37:56
 * @FilePath: \realty_frontend\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
