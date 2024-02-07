import React, { useState } from 'react';

// Komponen Counter
const Counter = (props) => {
  // State lokal untuk menyimpan nilai hitungan
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah nilai hitungan
  const increment = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangkan nilai hitungan
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* Menampilkan nilai hitungan dari state lokal */}
      <p>Count: {count}</p>

      {/* Menerima prop dan menampilkannya */}
      <p>{props.message}</p>

      {/* Memanggil fungsi increment saat tombol ditekan */}
      <button onClick={increment}>Increment</button>

      {/* Memanggil fungsi decrement saat tombol ditekan */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Komponen induk yang menggunakan Counter
const Yang = () => {
  return (
    <div>
      {/* Menggunakan Counter komponen dengan prop message */}
      <Counter message="Ini adalah pesan dari prop" />
    </div>
  );
};

export default Yang;
