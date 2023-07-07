import { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  //data è il valore corrente, setdata è il nuovo valore che sovrascriverà i valori precedenti. Dentro useState() ci mettiamo i dati che vogliamo salvare

  const handleInputChange = (event) => {
    const { name, checked, value, type } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  console.log(data);

  return (
    <form>
      <input
        value={data.username}
        name="username"
        onChange={handleInputChange}
      />
      <input
        value={data.password}
        name="password"
        type="password"
        onChange={handleInputChange}
      />
      <input
        checked={data.remember}
        type="checkbox"
        name="remember"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default LoginForm;
