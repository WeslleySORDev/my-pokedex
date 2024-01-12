"use client"
import { Pagination } from "@/components/Pagination";
import { PokemonLogo } from "@/components/PokemonLogo";
import Link from "next/link";

export default function Search({ params }: { params: { name: string } }) {
  return (
    <main className="mx-auto flex max-w-[640px] flex-col items-center justify-between gap-4 bg-identity-primary p-1">
      <div className="flex w-full flex-col gap-2 px-3 pt-3">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-16">
          <PokemonLogo />
        </div>
        <Pagination
          pages={1}
          handleCurrentPage={() => { }}
          currentPage={1}
        />
      </div>
      <div className="flex w-full items-center justify-center gap-4 text-grayscale-dark">
        <div className="flex items-center gap-4">
          <span className="subtitle-1 text-grayscale-white">Filtro: </span>
          <span className="body-1 max-w-52 truncate rounded bg-grayscale-white px-4 py-2">
            Nenhum parametro
          </span>
        </div>
        <Link
          href="/"
          className="rounded-md bg-[#7b8795] px-4 py-2 text-grayscale-white hover:brightness-95 body-1"
        >
          Go Home
        </Link>
      </div>
      <div className="flex max-h-[calc(100lvh-180px)] min-h-[calc(100lvh-180px)] w-full items-center justify-center gap-2 overflow-auto rounded-lg bg-grayscale-white px-3 py-6 shadow-inner2dp sm:max-h-[calc(100lvh-184px)] sm:min-h-[calc(100lvh-184px)]">
        <h1 className="headline text-center">Volte à página inicial e busque por algo...</h1>
      </div>
    </main>
  )
}