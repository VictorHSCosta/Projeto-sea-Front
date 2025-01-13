import Link from "next/link";

export default function Botao({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl bg-secondary p-2 text-white hover:bg-hover">
      <Link href={href}>
        <p className="text-center font-bold">{title}</p>
      </Link>
    </div>
  );
}
