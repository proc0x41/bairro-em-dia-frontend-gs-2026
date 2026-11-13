import { AlertCircle, ArrowUpRight, CircleCheck, Clock3, Construction, LampDesk, LoaderCircle, MapPin, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { Categoria, Ocorrencia, Status } from '../types';
import { statusNomes } from '../types';
export function PageHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="mb-9 max-w-3xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>{children && <p className="mt-4 leading-7 text-stone-600">{children}</p>}</div>;
}
export function Feedback({ message, retry }: { message: string; retry?: () => void }) {
  return <div role="alert" className="rounded-2xl border border-orange-200 bg-orange-50 p-5 text-orange-950"><div className="flex gap-3"><AlertCircle className="mt-0.5 shrink-0" size={20}/><p>{message}</p></div>{retry && <button className="mt-3 underline underline-offset-4" onClick={retry}>Tentar novamente</button>}</div>;
}
export function Loading() { return <div role="status" className="flex items-center justify-center gap-3 py-14 text-stone-600"><LoaderCircle className="animate-spin" size={22}/> Carregando informações…</div>; }
export function Empty({ message = 'Seu bairro ainda não tem registros por aqui.' }: { message?: string }) {
  return <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center"><MapPin className="mx-auto mb-3 text-emerald-800"/><h3 className="font-semibold">{message}</h3><p className="mt-2 text-sm text-stone-600">Cada registro é um primeiro passo para uma cidade melhor.</p><Link to="/registrar" className="btn-primary mt-5">Registrar um problema <ArrowUpRight size={17}/></Link></div>;
}
export function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = { ABERTA: 'bg-sky-50 text-sky-800', EM_ANALISE: 'bg-amber-50 text-amber-800', EM_ANDAMENTO: 'bg-violet-50 text-violet-800', RESOLVIDA: 'bg-emerald-50 text-emerald-800' };
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}><span className="h-1.5 w-1.5 rounded-full bg-current"/>{statusNomes[status]}</span>;
}
export function CategoryIcon({ name, size = 23 }: { name: string; size?: number }) { const Icon = /luz|ilumina/i.test(name) ? LampDesk : /lixo|descarte/i.test(name) ? Trash2 : Construction; return <Icon size={size}/>; }
export function OcorrenciaCard({ item, categorias }: { item: Ocorrencia; categorias: Categoria[] }) {
  const categoria = categorias.find(c => c.id === item.categoriaId);
  return <Link to={`/ocorrencias/${item.id}`} className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-700 hover:shadow-md"><div className="flex items-center justify-between gap-2"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1f3e8] text-emerald-900"><CategoryIcon name={categoria?.nome || ''}/></span><StatusBadge status={item.status}/></div><p className="mt-5 text-xs text-stone-500">{categoria?.nome || 'Ocorrência urbana'} <span className="px-1">·</span> #{String(item.id).padStart(4, '0')}</p><h3 className="mt-2 text-lg leading-snug font-semibold group-hover:text-emerald-800">{item.titulo}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">{item.descricao}</p><div className="mt-5 flex items-center gap-1.5 text-xs text-stone-600"><MapPin size={14}/><span className="truncate">{item.bairro}</span></div><div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-500"><span className="flex items-center gap-1.5"><Clock3 size={13}/>{new Date(item.criadoEm).toLocaleDateString('pt-BR')}</span><span className="flex items-center gap-1 text-emerald-900">Acompanhar <ArrowUpRight size={15}/></span></div></Link>;
}
export function Success({ children }: { children: ReactNode }) { return <div role="status" className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-900"><CircleCheck size={20} className="shrink-0"/>{children}</div>; }
