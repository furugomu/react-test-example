import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, increment } = useCounter();
  return (
    <div>
      <p>クッキーが{count}個</p>
      <button onClick={() => increment()}>増やす</button>
    </div>
  );
}
