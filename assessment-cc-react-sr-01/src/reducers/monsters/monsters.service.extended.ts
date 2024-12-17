import { API_URL } from "../../constants/env";
import { Battle, Players } from "../../models/interfaces/battle.interface";
import { Monster } from "../../models/interfaces/monster.interface";

// Método para buscar todos os monstros e verificar a resposta
const fetchData = async (url: string, options?: RequestInit): Promise<any> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Erro ao acessar ${url}: ${response.statusText}`);
  }
  return response.json();
};

// Método para buscar todos os monstros
const getAll = (): Promise<Monster[]> => fetchData(`${API_URL}/monsters`);

// Método para realizar a batalha
const battle = (players: Players): Promise<Battle> =>
  fetchData(`${API_URL}/battle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(players),
  });

// Exportação do serviço
export const MonsterServiceExtended = {
  getAll,
  battle,
};
