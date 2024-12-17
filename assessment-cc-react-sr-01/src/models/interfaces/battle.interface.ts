import { Monster } from './monster.interface';

export interface Battle {
  winner: Monster;
  tie: boolean;
}

export interface Players {
  monster1Id?: string | undefined;
  monster2Id?: string | undefined;
}
