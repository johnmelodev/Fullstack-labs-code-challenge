import { createReducer } from "@reduxjs/toolkit";
import { Battle } from "../../models/interfaces/battle.interface";
import { Monster } from "../../models/interfaces/monster.interface";
import { setRandomMonster, postBattle } from "./monsters.actions.extended";

interface MonsterState {
  selectRandomMonster: Monster | null;
  winner: Monster | null;
  tie: boolean;
  error: string | null;
}

const initialState: MonsterState = {
  selectRandomMonster: null,
  winner: null,
  tie: false,
  error: null,
};

export const monstersReducerExtended = createReducer(
  initialState,
  (builder) => {
    // Manipula a ação de selecionar monstro aleatório
    builder.addCase(setRandomMonster, (state, action) => {
      state.selectRandomMonster = action.payload;
    });

    // Manipula sucesso da batalha
    builder.addCase(postBattle.fulfilled, (state, action) => {
      const { winner, tie } = action.payload as Battle;
      state.winner = winner;
      state.tie = tie;
      state.error = null;
    });

    // Manipula erro na batalha
    builder.addCase(postBattle.rejected, (state, action) => {
      state.error = action.error.message || "Erro ao processar a batalha";
    });

    // Manipula outros estados de carregamento e erro, se necessário
  }
);
