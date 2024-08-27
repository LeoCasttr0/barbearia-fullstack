// tela de cabeçalho, onde tem a logo e menu

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Icon, MenuIcon } from "lucide-react";

const Header = () => {
  return (
    // componente card
    <Card>
        {/* padding, space-between, display flex, flex-direction row itens centralizados */}
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image alt="Logo da Empresa" src="/Logo.png" height={22} width={120} />
        {/* botao do menu */}
        <Button variant="outline" size="icon" >
            {/* icone */}
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
