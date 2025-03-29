export interface EnvironmentInterface {
  production: boolean;
  apiUrl: string;
}

export const environment: EnvironmentInterface = {
  production: false,
  apiUrl: 'https://api.jikan.moe/v4',
};
