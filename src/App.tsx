import { UserCard } from "./components/UserCard";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    setBest((b) => (count > b ? count : b));
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const bigIncrement = () => setCount((c) => c + 10);
  const bigbigIncrement = () => setCount((c) => c + 100);
  const decrement = () => setCount((c) => Math.max(0, c - 1));
  const bigDecrement = () => setCount((c) => Math.max(0, c - 10));
  const bigbigDecrement = () => setCount((c) => Math.max(0, c - 100));

  let message: string | null = null;

  if (count >= 10000 && count <= 10100) message = "GOATED score !";
  else if (count >= 1000 && count <= 1100) message = "INCROYABLE score !";
  else if (count >= 100 && count <= 110) message = "Excellent score !";
  else if (count >= 10 && count <= 20) message = "Beau score !";

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-pink-500/80 to-zinc-900/50" />

      {/* ronds colorés */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-orange-600/70 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-red-500/65 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 h-[520px] w-[520px] rounded-full bg-yellow-500/50 blur-3xl" />

      {/* Contenu */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        {/* Panel */}
        <div className="w-full max-w-xl rounded-3xl border border-white/15 bg-black/50 backdrop-blur-xl shadow-2xl">
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="space-y-2">
              <h1
                className="text-2xl sm:text-3xl font-bold tracking-tight text-center
  bg-gradient-to-r from-white via-red-600 to-white
  bg-clip-text text-transparent
  drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]"
              >
                COMPTEUR
              </h1>

              <p className="text-center text-sm sm:text-base text-white/70">
                Clique sur les boutons pour modifier le compteur.
              </p>
            </div>

            {/* Score */}
            <div className="mt-6 text-center items-center justify-between gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-xs text-white/60">Score</p>
                <p className="text-3xl font-semibold tabular-nums">{count}</p>
              </div>

              <div className="pt-4 text-center flex-col items-end gap-2">
                {count === 0 && (
                  <p className="text-sm font-semibold text-red-300">
                    Compteur à 0
                  </p>
                )}

                {message && (
                  <p className="text-sm font-semibold text-emerald-300">
                    {message}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 active:scale-[0.98] transition"
                onClick={decrement}
              >
                -1
              </button>

              <button
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 active:scale-[0.98] transition"
                onClick={bigDecrement}
              >
                -10
              </button>

              <button
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 active:scale-[0.98] transition"
                onClick={bigbigDecrement}
              >
                -100
              </button>

              <button
                className="rounded-xl border border-white/10 bg-red-500/70 px-4 py-2 font-medium text-white hover:bg-red-500/90 active:scale-[0.98] transition"
                onClick={increment}
              >
                +1
              </button>

              <button
                className="rounded-xl border border-white/10 bg-red-500/70 px-4 py-2 font-medium text-white hover:bg-red-500/90 active:scale-[0.98] transition"
                onClick={bigIncrement}
              >
                +10
              </button>
              <button
                className="rounded-xl border border-white/10 bg-red-500/70 px-4 py-2 font-medium text-white hover:bg-red-500/90 active:scale-[0.98] transition"
                onClick={bigbigIncrement}
              >
                +100
              </button>
            </div>

            {/* UserCard inside glass section */}

            <UserCard
              method="Différentes façons de changer votre score"
              goal="Atteignez le score le plus haut"
              best={best}
              onReset={() => setCount(0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
