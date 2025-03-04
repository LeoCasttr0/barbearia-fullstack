// tela de serviços

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemprops {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemprops) => {
  return (
    <Card>
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              className="rounded-lg "
              alt={service.description}
              src={service.imageUrl!}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="font-bold ">{service.name}</h2>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex items-center justify-between mt-3">
            <p className="text-primary font-bold text-sm">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary">Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
