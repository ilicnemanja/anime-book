export interface EnvironmentInterface {
  production: boolean;
  apiUrl: string;
}

export const environment: EnvironmentInterface = {
  production: true,
  apiUrl: 'https://api.jikan.moe/v4',
};
