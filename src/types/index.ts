export type Status = 'ABERTA' | 'EM_ANALISE' | 'EM_ANDAMENTO' | 'RESOLVIDA';
export type Prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';
export interface Categoria { id: number; nome: string; descricao: string; prazoDias: number }
export interface Ocorrencia { id: number; titulo: string; descricao: string; endereco: string; bairro: string; categoriaId: number; prioridade: Prioridade; status: Status; criadoEm: string }
export type OcorrenciaEntrada = Omit<Ocorrencia, 'id' | 'criadoEm'>;
export interface Atualizacao { id: number; ocorrenciaId: number; mensagem: string; autor: string; criadoEm: string }
export interface ErroApi { mensagem: string; status: number; campos?: Record<string, string> }
export const statusNomes: Record<Status, string> = { ABERTA: 'Aberta', EM_ANALISE: 'Em análise', EM_ANDAMENTO: 'Em andamento', RESOLVIDA: 'Resolvida' };
export const prioridadeNomes: Record<Prioridade, string> = { BAIXA: 'Baixa', MEDIA: 'Média', ALTA: 'Alta' };
