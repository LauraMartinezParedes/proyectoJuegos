import { axiosUtil } from "../utils/axios";

export const getPokemon = async (id) => {
    const optionsRequest = {
        method : "get",
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    };
    return await axiosUtil(optionsRequest);
}
