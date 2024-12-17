import React from "react";
import { Monster } from "../../models/interfaces/monster.interface";
import {
  BattleMonsterCard,
  BattleMonsterImage,
  BattleMonsterTitle,
  DividerBar,
  ProgressBar,
  StatusLabel,
} from "./MonsterBattleCard.extended.styled";

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  if (!monster) {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle style={{ fontSize: "36px" }}>
          {title!}
        </BattleMonsterTitle>
      </BattleMonsterCard>
    );
  }

  const CalculateBarWidth = (value: number) => {
    return (value / 100) * 100;
  };
  return (
    <BattleMonsterCard>
      {/* Display monster image */}
      <BattleMonsterImage src={monster.imageUrl} alt={monster.name} />

      {/* Display monster title */}
      <BattleMonsterTitle>{title || monster.name}</BattleMonsterTitle>

      {/* Divider line */}

      <DividerBar />

      {/* Display bars with corresponding labels */}

      <StatusLabel>HP</StatusLabel>
      <ProgressBar
        variant="determinate"
        value={CalculateBarWidth(monster.hp)}
      />

      <StatusLabel>Attack</StatusLabel>
      <ProgressBar
        variant="determinate"
        value={CalculateBarWidth(monster.attack)}
      />

      <StatusLabel>Defense</StatusLabel>
      <ProgressBar
        variant="determinate"
        value={CalculateBarWidth(monster.defense)}
      />

      <StatusLabel>Speed</StatusLabel>
      <ProgressBar
        variant="determinate"
        value={CalculateBarWidth(monster.speed)}
      />
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
