import { useState } from 'react';
import type { FormEvent } from 'react';
import { LockKeyhole } from 'lucide-react';
import { api } from '../services/api';
import { Feedback } from './UI';

export default function AcessoGestao({ onAuthenticated }: { onAuthenticated: (token: string) => void }) {
  const [chave, setChave] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function entrar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!chave.trim() || busy) return;
    setBusy(true); setError('');
    const token = chave.trim();
    try {
      await api.autenticarGestao(token);
      setChave('');
      onAuthenticated(token);
    } catch (error) {
      setError((error as Error).message);
    } finally { setBusy(false); }
  }

  return <section className="rounded-2xl border border-stone-200 bg-white p-6">
    <h2 className="flex items-center gap-2 text-sm font-semibold"><LockKeyhole size={16}/> Acesso da equipe</h2>
    <p className="mt-3 text-xs leading-5 text-stone-600">Alterações de situação e exclusões são restritas à equipe responsável.</p>
    <details className="mt-4">
      <summary className="cursor-pointer text-xs font-medium text-emerald-900">Entrar na gestão</summary>
      <form onSubmit={entrar} className="mt-4 space-y-4">
        {error && <Feedback message={error}/>}
        <label className="block text-xs font-medium">Chave de gestão
          <input type="password" autoComplete="off" required value={chave} onChange={event => setChave(event.target.value)} className="field mt-2"/>
        </label>
        <button type="submit" disabled={busy} className="btn-secondary w-full text-xs">{busy ? 'Verificando…' : 'Acessar gestão'}</button>
      </form>
    </details>
  </section>;
}
