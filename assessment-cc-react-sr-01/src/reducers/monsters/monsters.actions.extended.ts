import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { MonsterServiceExtended } from "./monsters.service.extended";
import { Players } from "../../models/interfaces/battle.interface";

// Ação assíncrona para iniciar uma batalha
export const postBattle = createAsyncThunk(
  "monsters/postBattle",
  async ({ monster1Id, monster2Id }: Players, { rejectWithValue }) => {
    try {
      const response = await MonsterServiceExtended.battle({
        monster1Id,
        monster2Id,
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Erro ao iniciar a batalha");
    }
  }
);

// Ação para selecionar um monstro aleatório (exclui o monstro selecionado)
export const setRandomMonster = createAction(
  "monsters/setRandomMonster",
  (payload) => ({
    payload, // Retorna o monstro aleatório
  })
);
