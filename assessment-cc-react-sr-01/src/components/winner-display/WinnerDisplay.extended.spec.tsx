import React from 'react'; // Importa a biblioteca React
import '@testing-library/jest-dom'; // Importa as matchers do Jest para testes
import { render, screen } from '@testing-library/react'; // Funções para renderizar e acessar elementos
import { WinnerDisplay } from './WinnerDisplay.extended'; // Importa o componente a ser testado

// Descrição do conjunto de testes para o componente WinnerDisplayExtended
describe('WinnerDisplayExtended', () => {
  // Testa se o texto do vencedor renderiza corretamente
  it('renders the winner text correctly', () => {
    render(<WinnerDisplay text="Monster A" />); // Renderiza o componente com o texto do vencedor
    // Verifica se o texto do vencedor está presente no documento
    expect(screen.getByText('Monster A wins!')).toBeInTheDocument(); // Parte 3
  });
});
