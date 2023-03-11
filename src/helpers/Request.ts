import type { DiscoverResponseInterface } from "@/Interfaces";

const KEY: string = import.meta.env.VITE_API_KEY ?? ''
const DISCORVER_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&language=fr`
const DETAIL_URL: string = `https://api.themoviedb.org/3/movie/__REPLACE__?api_key=${KEY}&language=fr-FR`

export async function fetchDiscover(page: number): Promise<DiscoverResponseInterface> {
    var data = await fetch(`${DISCORVER_URL}&page=${page}`)
    var json: DiscoverResponseInterface  = await data.json()
    return json
}

export async function fetchDetail(id: string): Promise<DiscoverResponseInterface> {
    const url: string = DETAIL_URL.replace('__REPLACE__', id);
    var data = await fetch(url)
    var json: any  = await data.json() //@TODO: type it
    return json
}
