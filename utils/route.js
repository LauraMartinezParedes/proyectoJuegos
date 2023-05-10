import { printTemplate as pokeapi} from "../pages/PokeApi/pokeapi";
import { printTemplate as login} from "../pages/login/login";
import { printTemplate as dashboard} from "../pages/Dashboard/dashboard";
import { printTemplate as whakatopo } from "../pages/Whakatopo/whakatopo";
import { getPokemon } from "../services/pokeapi.service";
import { Loading as loading} from "../components/loading/loading";
//import { printTemplate as quiz } from "../pages/quiz/quiz";
import { printTemplate  as memorygame} from "../pages/memorygame/memorygame";

export const initControler = (route) => {
    switch (route) {
      case undefined:
            localStorage.getItem("user") ? dashboard() : login();
        break;
      case "pokeapi":
            pokeapi();
        break;
      case "whakatopo":
          whakatopo();
      break;
      case "memorygame":
            memorygame();
        break;
      case "login":
            login();
        break;
      // case "quiz":
      //       quiz();
      // break;
      case "dashboard":
            dashboard();
        break;
      case "loading":
          loading();
        break;
    }
  };