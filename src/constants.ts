import { PortfolioPosition } from "./types";

export const PORTFOLIOS: Record<string, PortfolioPosition[]> = {
  Conservador: [
    { id: '1', name: 'FCI Money Market', category: 'Liquidez', allocation: 70, valueUsd: 0, performance: 3.1, type: 'FCI' },
    { id: '2', name: 'Lecaps / CER', category: 'Renta Fija ARS', allocation: 30, valueUsd: 0, performance: 8.2, type: 'Bono' },
  ],
  Moderado: [
    { id: '1', name: 'FCI Money Market', category: 'Liquidez', allocation: 40, valueUsd: 0, performance: 3.1, type: 'FCI' },
    { id: '2', name: 'Vista Energy (VIST)', category: 'Obligac. Negociac.', allocation: 30, valueUsd: 0, performance: 5.4, type: 'ON' },
    { id: '3', name: 'Apple (AAPL)', category: 'CEDEAR', allocation: 20, valueUsd: 0, performance: 22.1, type: 'CEDEAR' },
    { id: '4', name: 'Bonos AL30', category: 'Bono Soberano', allocation: 10, valueUsd: 0, performance: -1.2, type: 'Bono' },
  ],
  Dinámico: [
    { id: '1', name: 'FCI Money Market', category: 'Liquidez', allocation: 15, valueUsd: 0, performance: 3.1, type: 'FCI' },
    { id: '2', name: 'Obligac. Negociac.', category: 'Renta Fija USD', allocation: 10, valueUsd: 0, performance: 5.4, type: 'ON' },
    { id: '3', name: 'CEDEARs Tech (NVDA, TSLA)', category: 'Equity Global', allocation: 35, valueUsd: 0, performance: 28.5, type: 'CEDEAR' },
    { id: '4', name: 'Acciones Argentinas (GAL)', category: 'Equity Local', allocation: 40, valueUsd: 0, performance: 15.2, type: 'Bono' },
  ],
};

export const INITIAL_USER = {
  id: 'user_1',
  name: 'Martín G.',
  profile: 'Moderado',
  kycStatus: 'APROBADO',
  balanceUsd: 8420.50,
  availableBalanceArs: 145000,
  availableBalanceUsd: 250,
  goals: [
    {
      id: 'goal_1',
      name: 'Mi Casa',
      description: 'Para la entrada del depto',
      currentAmount: 6800,
      targetAmount: 10000,
      currency: 'USD',
      deadline: 'Agosto 2026'
    },
    {
      id: 'goal_2',
      name: 'Vacaciones 2027',
      description: 'Viaje a Europa por 15 días',
      currentAmount: 1920,
      targetAmount: 6000,
      currency: 'USD',
      deadline: 'Junio 2027'
    },
    {
      id: 'goal_3',
      name: 'Fondo de Emergencia',
      description: 'Seis meses de gastos básicos',
      currentAmount: 4500,
      targetAmount: 4500,
      currency: 'USD',
      deadline: 'Completada'
    }
  ]
};
