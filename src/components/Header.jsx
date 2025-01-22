import { Button, Heading, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const Header = () => {
  const { logout } = useAuth();
  return (
    <SimpleGrid>
      <Heading>SHOP 22va</Heading>

      <HStack>
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <NavLink as={Link} to="register">
          Registrarme
        </NavLink>{" "}
        <NavLink as={Link} to="login">
          Iniciar sesión
        </NavLink>{" "}
        <NavLink as={Link} to="create">
          Crear tarea
        </NavLink>{" "}
        <NavLink as={Button} onClick={logout}>
          Cerrar sesión
        </NavLink>
      </HStack>
    </SimpleGrid>
  );
};

export default Header;
