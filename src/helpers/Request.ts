import type { DiscoverResponseInterface } from "@/Interfaces";

const KEY: string = import.meta.env.VITE_API_KEY ?? ''
const DISCORVER_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&language=fr`

export async function fetchDiscover(): Promise<DiscoverResponseInterface> {
    var data = await fetch(`${DISCORVER_URL}`)
    var json: DiscoverResponseInterface  = await data.json()
    return json
}