import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MonsterBattleCard } from "./MonsterBattleCard.extended";
import { Monster } from "../../models/interfaces/monster.interface";

// pegue algum da api e tire os parenteses para agilizar JSON
const mockMonster: Monster = {
  id: "monster-1",
  name: "Dead Unicorn",
  attack: 60,
  defense: 40,
  hp: 10,
  speed: 80,
  type: "Type",
  imageUrl: "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png"
};

test("renders the monster card with correct values", () => {
  render(<MonsterBattleCard monster={mockMonster} title="Monster Title" />);

  // Verificar se o título e as barras de progresso estão corretos
  expect(screen.getByText("Monster Title")).toBeInTheDocument();

  const progressBars = screen.getAllByRole("progressbar");
  expect(progressBars).toHaveLength(4); // Verifica se existem 4 barras de progresso

  expect(progressBars[0]).toHaveAttribute("aria-valuenow"); // HP
  expect(progressBars[1]).toHaveAttribute("aria-valuenow"); // Attack
  expect(progressBars[2]).toHaveAttribute("aria-valuenow"); // Defense
  expect(progressBars[3]).toHaveAttribute("aria-valuenow"); // Speed
});
