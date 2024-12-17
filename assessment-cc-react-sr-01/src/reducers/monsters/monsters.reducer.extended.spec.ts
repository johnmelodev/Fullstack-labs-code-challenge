import { postBattle, setRandomMonster } from './monsters.actions.extended'; // Importa ações do Redux
import { monstersReducerExtended } from './monsters.reducer.extended'; // Importa o reducer a ser testado
import { Monster } from '../../models/interfaces/monster.interface'; // Importa a interface do monstro

// Descrição do conjunto de testes para o reducer Monsters
describe('Monsters Reducer', () => {
  // Testa se o winner e tie são atualizados quando a ação é fulfilled
  it('should update the winner and tie on action fulfilled', () => {
    const initialState = {
      // Estado inicial do reducer
      selectRandomMonster: null, // Monstro aleatório selecionado
      winner: null, // Vencedor da batalha
      tie: false, // Indica se houve empate
      error: null, // Erro, se houver
    };

    // Mock do monstro vencedor
    const winnerMonster: Monster = {
      id: '1', // ID do monstro
      name: 'Monster A', // Nome do monstro
      hp: 100, // HP do monstro
      attack: 50, // Ataque do monstro
      defense: 30, // Defesa do monstro
      speed: 20, // Velocidade do monstro
      imageUrl: '', // URL da imagem do monstro
      type: '', // Tipo do monstro
    };

    // Ação que simula o sucesso da batalha
    const fulfilledAction = {
      type: postBattle.fulfilled.type, // Tipo da ação
      payload: { winner: winnerMonster, tie: false }, // Payload da ação
    };

    const updatedState = monstersReducerExtended(initialState, fulfilledAction); // Atualiza o estado com a ação

    // Verifica se o estado foi atualizado corretamente
    expect(updatedState.winner).toEqual(winnerMonster); // Parte 4
    expect(updatedState.tie).toBe(false); // Parte 4
    expect(updatedState.error).toBeNull(); // Parte 4
  });

  // Testa se o monstro aleatório é adicionado ao estado
  it('should add the random monster to the state', () => {
    const initialState = {
      // Estado inicial do reducer
      selectRandomMonster: null, // Monstro aleatório selecionado
      winner: null, // Vencedor da batalha
      tie: false, // Indica se houve empate
      error: null, // Erro, se houver
    };

    // Mock do monstro aleatório
    const randomMonster: Monster = {
      id: '2', // ID do monstro
      name: 'Monster B', // Nome do monstro
      hp: 90, // HP do monstro
      attack: 40, // Ataque do monstro
      defense: 35, // Defesa do monstro
      speed: 25, // Velocidade do monstro
      imageUrl: '', // URL da imagem do monstro
      type: 'Water', // Tipo do monstro
    };

    // Ação que adiciona o monstro aleatório
    const action = {
      type: setRandomMonster.type, // Tipo da ação
      payload: randomMonster, // Payload da ação
    };

    const updatedState = monstersReducerExtended(initialState, action); // Atualiza o estado com a ação

    // Verifica se o estado foi atualizado corretamente
    expect(updatedState.selectRandomMonster).toEqual(randomMonster); // Parte 4
  });

  // Testa se o vencedor é adicionado ao estado
  it('should add the winner to the state', () => {
    const initialState = {
      // Estado inicial do reducer
      selectRandomMonster: null, // Monstro aleatório selecionado
      winner: null, // Vencedor da batalha
      tie: false, // Indica se houve empate
      error: null, // Erro, se houver
    };

    // Mock do monstro vencedor
    const winnerMonster: Monster = {
      id: '1', // ID do monstro
      name: 'Monster A', // Nome do monstro
      hp: 100, // HP do monstro
      attack: 50, // Ataque do monstro
      defense: 30, // Defesa do monstro
      speed: 20, // Velocidade do monstro
      imageUrl: '', // URL da imagem do monstro
      type: '', // Tipo do monstro
    };

    // Ação que simula o sucesso da batalha
    const fulfilledAction = {
      type: postBattle.fulfilled.type, // Tipo da ação
      payload: { winner: winnerMonster, tie: false }, // Payload da ação
    };

    const updatedState = monstersReducerExtended(initialState, fulfilledAction); // Atualiza o estado com a ação

    // Verifica se o estado foi atualizado corretamente
    expect(updatedState.winner).toEqual(winnerMonster); // Parte 4
  });
});
