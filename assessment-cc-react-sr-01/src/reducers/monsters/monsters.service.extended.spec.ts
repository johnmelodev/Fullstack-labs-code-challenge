import { MonsterServiceExtended } from './monsters.service.extended'; // Importa o serviço de monstros

global.fetch = jest.fn(); // Mock da função fetch global
global.fetch = jest.fn(); // Mock da função fetch global

beforeEach(() => {
  jest.clearAllMocks(); // Limpa os mocks antes de cada teste
});

it('should get the winner of the battle of monsters', async () => {
  // Mock da resposta da batalha
  const battleResponse = {
    winner: {
      id: '1',
      name: 'Monster A',
      hp: 100,
      attack: 50,
      defense: 30,
      speed: 20,
      imageUrl: '',
      type: 'Type',
    },
    tie: false,
  };

  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true, // Mock da resposta bem-sucedida
    json: async () => battleResponse, // Mock da função json
  });

  const players = { monster1Id: 'monster1', monster2Id: 'monster2' };
  const result = await MonsterServiceExtended.battle(players);

  expect(result).toEqual(battleResponse);
});
