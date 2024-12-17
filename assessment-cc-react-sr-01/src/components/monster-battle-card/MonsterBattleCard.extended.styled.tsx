import styled from '@emotion/styled';
import { Card, LinearProgress, linearProgressClasses, Typography } from '@mui/material';
import { colors } from '../../constants/colors';

// Card container style
export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

// Monster image style
export const BattleMonsterImage = styled.img({
  width: '283px',
  height: '178px',
  borderRadius: '7px',
  // Adicionado para centralizar a imagem dentro do card
  display: 'block', // Para garantir que a imagem seja um bloco
  marginBottom: '10px',
});

// Monster title style
export const BattleMonsterTitle = styled(Typography)({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px', // aqui esta correto
  color: colors.black,
  justifyContent: 'start', // aqui esta correto
  marginBottom: '5px', // dizer que no documento figma esta 10px mas parece que ja esta aplicado um margin bottom entao 5 vai ficar mais realista com a imagem o template do figma
});

// Divider line style
export const DividerBar = styled.div({
  background: '#000000',
  opacity: 0.1,
  height: '1px',
  marginBottom: '10px',
});

// Progress bar container
export const ProgressBar = styled(LinearProgress)(() => ({
  width: '283px',
  height: 8,
  borderRadius: 15,
  marginBottom: '13px', // fiz os calculos no FIGMA
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground, // cor de fundo da barra
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,  // cor da parte preenchida
  },
}));

// Status label (HP, Attack, Defense, Speed)
export const StatusLabel = styled(Typography)({
  fontFamily: 'Roboto',
  fontSize: '16px',
  lineHeight: '18px',
  color: colors.black,
  marginBottom: '5px', // Espaçamento entre o rótulo e a barra
});
