import { Input } from "@/components/ui/input";

export default function InputSearch() {
  return (
    <div className="flex items-center w-full max-w-md">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="search"
          placeholder="Search"
          className="w-[400px] rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-700  focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
        />
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
