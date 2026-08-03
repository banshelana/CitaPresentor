interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      <p className="mb-3 text-violet-400 font-medium">
        {badge}
      </p>

      <h2 className="text-5xl font-black">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        {description}
      </p>

    </div>
  );
}