import { useCallback, useEffect, useState } from 'react';
import { api } from './api';
import type { Categoria, Ocorrencia } from '../types';
export function useOcorrencias() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const carregar = useCallback(async () => {
    setLoading(true); setError('');
    try { const [o, c] = await Promise.all([api.ocorrencias(), api.categorias()]); setOcorrencias(o); setCategorias(c); }
    catch (e) { setError(e instanceof Error ? e.message : 'Erro ao carregar.'); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void carregar(); }, [carregar]);
  return { ocorrencias, categorias, loading, error, recarregar: carregar };
}
