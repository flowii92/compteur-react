type UserCardProps = {
  name: string
  lastname: string
  age: number
  job: string
  best: number
  onReset: () => void
}

export function UserCard({
  name,
  age,
  job,
  best,
  lastname,
  onReset,
}: UserCardProps) {
  return (
    <div className="text-center border border-white rounded-2xl p-4 mt-4 mb-2">
      <p>{name} {lastname}</p>
      <p>{job}</p>
      <p>{age} ans</p>
      <p className="text-emerald-300 font-semibold">
        Meilleur score : {best}
      </p>


      <button
        className="mt-2 px-3 py-1 bg-pink-500/70 hover:bg-pink-500/90 text-white rounded"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

