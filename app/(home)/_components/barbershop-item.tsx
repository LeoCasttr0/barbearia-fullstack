import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => (
  // classname:minimo e maximo largura para o card nunca ultrapassar esse tamanho, e borda de 17px
  <Card className="min-w-[167px} max-w-[167px] rounded-2xl">
    {/* container */}
    <CardContent className="p-0">
      {/* renderizando a Imagem da barbearia*/}
      <Image
        src={barbershop.imageUrl}
        alt="foto da barbearia"
        height={0}
        width={0}
        sizes="100vm"
        className="h-{159px} w-full rounded-2xl"
      />

      {/* padding horizontal, padding bottom */}
      <div className="px-3 pb-3">
        {/* Nome da barbearia */}
        <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
          {barbershop.name}
        </h2>
        {/* Endereço */}
        {/* não quebra a linha,nao vai scrolar para o lado, tres pontos */}
        <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
          {barbershop.address}
        </p>
        {/* botaão de reserva, cor cinza */}
        <Button variant="secondary" className="w-full mt-3 ">
          Reservar
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default BarbershopItem;
