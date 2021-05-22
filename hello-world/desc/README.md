# React Chapter01

## React 와 ReactDOM 을 통한 render

```js
return React.createElement(
  "button",
  { onClick: () => this.setState({ liked: true }) },
  text
);
```

- JSX syntax 를 쓰지 않는 다면 위와 같이 사용해야 한다.

## Conver to JSX syntext with babel

```js
return <button onClick={() => this.setState({ liked: true })}>text</button>;
```

- babel 을 사용하면 위와 같이 사용가능하며, out-dir 에 js 파일로 컴파일 된다.

### Babel Script

```shell
npx babel --watch src --out-dir . --presets @babel/pre
```
