"use client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/router";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}
const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {


  const router = useRouter();
  // função de voltar para pagina inicial
  const handleBack = () => {
    router.back()
  };

  return (
    <div>
      {/* div da foto cabeçalho */}
      <div className="h-[250px] w-full relative">
        {/* Botao de voltar e menu */}
        <Button onClick={handleBack}
          size="icon"
          variant="outline"
          className="z-50 top-4 left-4 absolute bg-indigo-700"
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="z-50 top-4 right-4 absolute bg-indigo-700"
        >
          <MenuIcon />
        </Button>

        {/* imagem */}
        {/* fill: ocupa 100% da largura de altura da sua div pai */}
        <Image
          className="opacity-75"
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Nome , endereço e avaliação*/}
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        {/* padding vertical: py, padding horizontal: 20 */}
        <h1 className="text-xl font-bold ">{barbershop.name}</h1>

        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (800 avalições)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
