export default function AboutMeCard({
  title,
  firstLine,
  secondLine,
}: {
  title: string;
  firstLine: string;
  secondLine: string;
}) {
  return (
    <div className="flex flex-col text-center p-10 m-4 max-w-80 lg:w-80 border border-dark dark:border-light rounded-3xl">
      <h1 className="text-2xl font-bold py-2">{title}</h1>
      <p className="text-nowrap text-gray-500">{firstLine}</p>
      <p className="text-nowrap text-gray-500">{secondLine}</p>
    </div>
  );
}