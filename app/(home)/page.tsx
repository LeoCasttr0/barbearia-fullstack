import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import Booking from "../_components/booking-item";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  // chamar prisma e pegar barbearias
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      {/* cabeçalho */}
      <Header />
      {/* ola usuario e o dia de hoje */}
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Leo!</h2>
        {/* data de hoje, importamos o formart do date fns, usamos a data de hj como para 1, e como segundo parametro o formato dessa data */}
        <p className="capitalize text-sm">
          {" "}
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      {/* div do input de Pesquisar uma barbearia */}
      <div className="px-5 mt-6">
        <Search />
      </div>
      {/* div Agendamentos */}
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">
          Recomendados
        </h2>

        {/* Div que renderiza as barbearias  */}
        {/* overflow-x-auto: rolagem horizontal */}
        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      {/* populares */}
      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">
          populares
        </h2>

        {/* Div que renderiza as barbearias  */}
        {/* overflow-x-auto: rolagem horizontal */}
        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
