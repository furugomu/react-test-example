# TypeScript + Jest + react testing library

## ひつようなもの

```sh
# jest
npm install --save-dev jest @babel/core @babel/preset-react @babel/preset-typescript jest-environment-jsdom
# TypeScript
npm install --save-dev typescript @types/jest @types/react
# testing library
npm install --save-dev @testing-library/react @testing-library/react-hooks @testing-library/jest-dom
```

## babel の設定

```js
module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        // react 17 の新しい jsx transform を使うため runtime: "automatic" を指定する
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
      ],
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    };
  }
  return { presets: ["next/babel"] };
};
```

## テストの例

- [Counter.test.tsx](./components/Counter.test.tsx) - コンポーネントのテスト
- [useCounter.test.tsx](hooks/useCounter.test.tsx) - hook のテスト
