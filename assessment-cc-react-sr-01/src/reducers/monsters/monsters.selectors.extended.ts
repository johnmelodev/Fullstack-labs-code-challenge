import { RootState } from "../../app/store";
import { Monster } from "../../models/interfaces/monster.interface";

// Selector para selecionar o monstro vencedor
export const monsterWins = (state: RootState, monsterId: string) => {
  return (
    state.monsters.monsters.find(
      (monster: Monster) => monster.id === monsterId
    ) || null
  );
};

// Selector para retornar o monstro aleatório, excluindo o selecionado
export const selectRandomMonster = (state: RootState) => {
  const { monsters, selectedMonster } = state.monsters;
  const filteredMonsters = monsters.filter(
    (monster: Monster) => monster.id !== selectedMonster?.id
  );

  if (filteredMonsters.length > 0) {
    return filteredMonsters[
      Math.floor(Math.random() * filteredMonsters.length)
    ];
  }

  return null;
};
