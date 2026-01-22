type UserCardProps = {
  method: string;
  goal: string;
  best: number;
  onReset: () => void;
};

export function UserCard({
  method,
  goal,
  best,
  onReset,
}: UserCardProps) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-5">
      
      {/* Header */}
      <div className="mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-white/50">
          Informations
        </p>
        <h3 className="text-lg font-semibold text-white">
          Détails du compteur
        </h3>
      </div>

      {/* Infos grid */}
      <div className="text-center grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs text-white/50 mb-1">Méthode</p>
          <p className="text-sm font-medium">{method}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs text-white/50 mb-1">Objectif</p>
          <p className="text-sm font-medium">{goal}</p>
        </div>
      </div>

      {/* Best score */}
      <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-center">
        <p className="text-xs text-emerald-300/70">Meilleur score</p>
        <p className="text-2xl font-bold text-emerald-300 tabular-nums">
          {best}
        </p>
      </div>

      {/* Action */}
      <button
        onClick={onReset}
        className="mt-4 w-full rounded-xl bg-red-500/80 py-2 font-medium text-white hover:bg-red-500 transition active:scale-[0.98]"
      >
        Réinitialiser le compteur
      </button>
    </div>
  );
}
