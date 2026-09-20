export interface Achievement {
  title: string;
  result: string;
  year: string;
  note?: string;
  /**
   * Brand logo in its own colours, under public/. Rendered inside a uniform
   * plate: aspect ratios here run from 0.51 (Inter IIT, tall) to 3.64
   * (FedEx, wide), so the plate — not the logo — is what stays the same size.
   */
  logo?: string;
  /** Initials shown when there is no logo. */
  short?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Adobe Analytics Challenge',
    result: 'Top 20 globally',
    year: '2022',
    note: '3,000+ teams',
    logo: '/logos/adobe.svg',
    short: 'ADO',
  },
  {
    title: 'FedEx India COE Talent Hub',
    result: 'Top 0.5%',
    year: '2022',
    note: '100,000+ applicants · pre-placement interview offered',
    logo: '/logos/fedex.svg',
    short: 'FDX',
  },
  {
    title: 'ZS Campus Beats',
    result: 'Top 150',
    year: '2022',
    note: '3,500+ teams · pre-placement offer',
    logo: '/logos/zs.svg',
    short: 'ZS',
  },
  {
    title: 'Inter IIT Tech Meet 11.0',
    result: 'Bronze medal',
    year: '2023',
    note: 'QuantInsti Trading Challenge · team lead',
    logo: '/logos/interiit-color.png',
    short: 'IIT',
  },
];
