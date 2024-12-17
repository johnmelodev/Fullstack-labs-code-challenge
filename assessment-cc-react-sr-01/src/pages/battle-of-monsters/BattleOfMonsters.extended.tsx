import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard.extended";
import { MonstersList } from "../../components/monsters-list/MonstersList.extended";
import { Title } from "../../components/title/Title";
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions";
import {
  selectMonsters,
  selectSelectedMonster,
} from "../../reducers/monsters/monsters.selectors";
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from "./BattleOfMonsters.extended.styled";
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay.extended";
import monstersData from "../../data/monsters.json";
import { Monster } from "../../models/interfaces/monster.interface";
import { postBattle } from "../../reducers/monsters/monsters.actions.extended";

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();
  const monsters = useSelector(selectMonsters) as Monster[];
  const selectedMonster = useSelector(selectSelectedMonster) as Monster | null;

  const [computerMonster, setComputerMonster] = useState<Monster | null>(null);
  const [winner, setWinner] = useState<Monster | null>(null);
  const [battleTie, setBattleTie] = useState(false);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  useEffect(() => {
    if (selectedMonster) {
      const availableMonsters = monstersData.monsters.filter(
        (monster) => monster.id !== selectedMonster.id
      );

      if (availableMonsters.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableMonsters.length
        );
        setComputerMonster(availableMonsters[randomIndex]);
      }
    } else {
      setComputerMonster(null);
    }
  }, [selectedMonster]);

  const handleStartBattleClick = async () => {
    if (!selectedMonster || !computerMonster) {
      return;
    }

    const response = await dispatch(
      postBattle({
        monster1Id: selectedMonster.id,
        monster2Id: computerMonster.id,
      })
    );

    if (postBattle.fulfilled.match(response)) {
      const battleResult = response.payload;

      if (battleResult.tie) {
        setBattleTie(true);
        setWinner(null);
      } else {
        setWinner(battleResult.winner);
        setBattleTie(false);
      }
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>
      <MonstersList monsters={monsters} />
      {winner && <WinnerDisplay text={winner.name} />}
      {battleTie && <WinnerDisplay text="It's a tie!" />}
      <BattleSection>
        <MonsterBattleCard
          monster={selectedMonster}
          title={selectedMonster?.name || "Player"}
        />
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={!selectedMonster || !computerMonster}
          onClick={handleStartBattleClick}
        >
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          monster={computerMonster}
          title={computerMonster ? computerMonster.name : "Computer"}
        />
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
