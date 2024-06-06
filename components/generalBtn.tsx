import Link from "next/link";


export default function GeneralBtn({text, url}: {text: string, url: string}) {
  return (
    <button
      type="button"
      className={`rounded-full py-2 px-4 bg-dark text-light font-semibold 
        dark:text-dark dark:bg-light  ${url.length === 0 ? 'disabled:opacity-50 cursor-not-allowed' : 'hover:dark:brightness-50 hover:brightness-150'}`}
      disabled={url.length === 0}
      // disabled
    >
      <Link href={url} className={`${url.length === 0 ? 'cursor-not-allowed pointer-events-none' : ''}`}>
        {text}
      </Link>

    </button>
  );
}