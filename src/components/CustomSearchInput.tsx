import { SetStateAction } from "react";
import { useRouter } from 'next/navigation'

interface ICustomSearchInput {
  input: string;
  setInput: (value: SetStateAction<string>) => void;
}

export function CustomSearchInput({
  input,
  setInput,
}: ICustomSearchInput) {
  const router = useRouter()
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      router.push('/search/' + input, { scroll: false })
      setInput("")
    }
  };
  return (
    <div className="flex flex-1 items-center gap-2 rounded-2xl bg-grayscale-white py-2 pl-3 pr-4 shadow-inner2dp">
      <div className="relative h-[16px] w-[16px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9 13.6167L8.88333 9.6C8.55 9.88889 8.16111 10.1139 7.71667 10.275C7.27222 10.4361 6.8 10.5167 6.3 10.5167C5.1 10.5167 4.08333 10.1 3.25 9.26667C2.41667 8.43334 2 7.42778 2 6.25C2 5.07223 2.41667 4.06667 3.25 3.23334C4.08333 2.4 5.09444 1.98334 6.28333 1.98334C7.46111 1.98334 8.46389 2.4 9.29167 3.23334C10.1194 4.06667 10.5333 5.07223 10.5333 6.25C10.5333 6.72778 10.4556 7.18889 10.3 7.63334C10.1444 8.07778 9.91111 8.49445 9.6 8.88334L13.65 12.9C13.75 12.9889 13.8 13.1028 13.8 13.2417C13.8 13.3806 13.7444 13.5056 13.6333 13.6167C13.5333 13.7167 13.4111 13.7667 13.2667 13.7667C13.1222 13.7667 13 13.7167 12.9 13.6167ZM6.28333 9.51667C7.18333 9.51667 7.95 9.19723 8.58333 8.55834C9.21667 7.91945 9.53333 7.15 9.53333 6.25C9.53333 5.35 9.21667 4.58056 8.58333 3.94167C7.95 3.30278 7.18333 2.98334 6.28333 2.98334C5.37222 2.98334 4.59722 3.30278 3.95833 3.94167C3.31944 4.58056 3 5.35 3 6.25C3 7.15 3.31944 7.91945 3.95833 8.55834C4.59722 9.19723 5.37222 9.51667 6.28333 9.51667Z"
            fill="#DC0A2D"
          />
        </svg>
      </div>
      <input
        placeholder="Digite e pressione ENTER"
        className="body-3 flex-1 bg-transparent px-1 text-grayscale-medium"
        type="text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        maxLength={24}
      />
    </div>
  );
}