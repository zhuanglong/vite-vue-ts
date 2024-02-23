import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.glob('./**/*.ts', { eager: true });

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...(modules as Record<string, any>)[key].default);
});

/**
 * 在生产环境中的使用
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
