//adicionar isso sempre que a tela tiver alguma interatividade
"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  // importando
  const router = useRouter();

  // direcioinar o usuario para outra pagina do id da nossa barbearia
  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    // classname:minimo e maximo largura para o card nunca ultrapassar esse tamanho, e borda de 17px
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      {/* container */}
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          {/* estrelas de avaliação */}
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="bg-opacity-90 gap-1 flex items-center top-3 left-3 "
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>

          {/* renderizando a Imagem da barbearia*/}
          <Image
            src={barbershop.imageUrl}
            alt="foto da barbearia"
            height={0}
            width={0}
            sizes="100vm"
            className="h-[159px] w-full rounded-2xl"
          />
        </div>

        {/* padding horizontal, padding bottom */}
        <div className="px-3 pb-3">
          {/* Nome da barbearia */}
          {/* nome em apenas uma linha */}
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          {/* Endereço */}
          {/* não quebra a linha,nao vai scrolar para o lado, tres pontos */}
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          {/* botaão de reserva, cor cinza */}
          <Button
            variant="secondary"
            className="w-full mt-3"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
