import type { Atualizacao, Categoria, ErroApi, Ocorrencia, OcorrenciaEntrada } from '../types';
const base = (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/$/, '');
export class ApiError extends Error { constructor(public status: number, message: string, public campos: Record<string, string> = {}) { super(message); } }
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`${base}${path}`, { ...options, headers: { ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...options.headers }, signal: AbortSignal.timeout(45000) });
    if (!response.ok) {
      const error: ErroApi = await response.json().catch(() => ({ mensagem: 'O serviço não conseguiu concluir a solicitação.' }));
      throw new ApiError(response.status, error.mensagem, error.campos);
    }
    return response.status === 204 ? undefined as T : await response.json() as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(0, 'Não foi possível conectar ao serviço. Confira sua conexão e tente novamente. O servidor pode levar alguns segundos para iniciar.');
  }
}
export const api = {
  categorias: () => request<Categoria[]>('/categorias'),
  ocorrencias: () => request<Ocorrencia[]>('/ocorrencias'),
  ocorrencia: (id: string) => request<Ocorrencia>(`/ocorrencias/${encodeURIComponent(id)}`),
  criar: (data: OcorrenciaEntrada) => request<Ocorrencia>('/ocorrencias', { method: 'POST', body: JSON.stringify(data) }),
  atualizar: (id: number, data: OcorrenciaEntrada) => request<Ocorrencia>(`/ocorrencias/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  remover: (id: number) => request<void>(`/ocorrencias/${id}`, { method: 'DELETE' }),
  historico: (id: string) => request<Atualizacao[]>(`/ocorrencias/${encodeURIComponent(id)}/atualizacoes`),
  comentar: (id: number, autor: string, mensagem: string) => request<Atualizacao>(`/ocorrencias/${id}/atualizacoes`, { method: 'POST', body: JSON.stringify({ autor, mensagem }) }),
};
