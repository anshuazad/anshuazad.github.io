export interface Achievement {
  title: string;
  result: string;
  year: string;
  note?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Adobe Analytics Challenge',
    result: 'Top 20 globally',
    year: '2022',
    note: '3,000+ teams',
  },
  {
    title: 'FedEx India COE Talent Hub',
    result: 'Top 0.5%',
    year: '2022',
    note: '100,000+ applicants · pre-placement interview offered',
  },
  {
    title: 'ZS Campus Beats',
    result: 'Top 150',
    year: '2022',
    note: '3,500+ teams · pre-placement offer',
  },
  {
    title: 'Inter IIT Tech Meet 11.0',
    result: 'Bronze medal',
    year: '2023',
    note: 'QuantInsti Trading Challenge · team lead',
  },
];
