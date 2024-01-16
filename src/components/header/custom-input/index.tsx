import { SearchIcon } from "./search-icon";
import { SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface ICustomSearchInput {
  input: string;
  setInput: (value: SetStateAction<string>) => void;
}

export function CustomInput({ input, setInput }: ICustomSearchInput) {
  const router = useRouter();
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      router.push("/search/" + input, { scroll: false });
      setInput("");
    }
  };
  return (
    <div className="flex flex-1 items-center gap-2 rounded-2xl bg-grayscale-white py-2 pl-3 pr-4 shadow-inner2dp">
      <SearchIcon />
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
