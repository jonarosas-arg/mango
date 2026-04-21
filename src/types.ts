export type InvestmentProfile = 'Conservador' | 'Moderado' | 'Dinámico';

export interface PortfolioPosition {
  id: string;
  name: string;
  category: string;
  allocation: number; // Percent
  valueUsd: number;
  performance: number; // Percent
  type: 'FCI' | 'CEDEAR' | 'Bono' | 'ON';
}

export interface Goal {
  id: string;
  name: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  currency: 'USD' | 'ARS';
  deadline?: string;
}

export type NotificationType = 'info' | 'success' | 'warning' | 'alert' | 'luca';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

export interface User {
  id: string;
  name: string;
  profile?: InvestmentProfile;
  kycStatus: 'NUEVO' | 'PROCESO' | 'APROBADO' | 'RECHAZADO';
  balanceUsd: number;
  availableBalanceArs: number;
  availableBalanceUsd: number;
  goals: Goal[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  metadata?: any;
}
