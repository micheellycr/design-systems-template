import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      {users.map((user, i) => {
        if(i < 25){
        return(
          <Card 
          key={user.id}
          user={user}
          />
        )}
      })}
    </ChakraProvider>
  );
}
