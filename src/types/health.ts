export type AliveStatus = 'ok' | 'ko';

export interface IHealthStatus {
  date: Date;
  status: AliveStatus;
  redis?: AliveStatus;
}

export interface IGetHealthStatusOptions {
  redis: string | boolean;
}
