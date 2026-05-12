import type { Leader } from "../lib/leadership";

export function LeadershipGrid({ items }: { items: Leader[] }) {
  return (
    <div className="team-grid" data-reveal>
      {items.map((leader) => (
        <div className="team-card" key={leader.name}>
          <img src={leader.image} alt={leader.name} />
          <div className="team-card-body">
            <h3>{leader.name}</h3>
            <p>{leader.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
