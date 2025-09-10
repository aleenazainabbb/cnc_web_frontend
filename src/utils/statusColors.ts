// src/utils/statuscolors.ts
export type Status =
  | 'pending'
  | 'confirmed'
  | 'postponed'
  | 'completed'
  | 'cancelled';

export const statusColors: Record<Status, string> = {
  pending: '#FF8800',
  confirmed: '#F16BC9',
  postponed: '#1900FF',
  completed: '#0F9918',
  cancelled: '#FF0000',
};

export const getStatusColor = (status: string): string => {
  return statusColors[status.trim().toLowerCase() as Status] || '#000000a2';
};
