import React, { useEffect, useState } from "react";

function ApiRender() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Malumot olishda xatolik roy berdi", error)
      );
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => <h1 key={item.id}>{item.name}</h1>)
      ) : (
        <h1>Loadingg.........</h1>
      )}
    </div>
  );
}

export default ApiRender;
