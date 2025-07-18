"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Search, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import { useQueryState } from "nuqs";

interface SearchInputProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  isSearching?: boolean;
  disabled?: boolean;
}

export function SearchInput({
  placeholder = "Search...",
  defaultValue = "",
  className,
  isSearching = false,
  disabled = false,
}: SearchInputProps) {
  const [query, setQuery] = useQueryState("search");
  const [searchTerm, setSearchTerm] = useState(query || undefined);
  const debouncedValue = useDebounce(searchTerm, 600);
  //* Testing Loading State
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (!debouncedValue) {
      setQuery(null);
      return;
    }

    setIsPending(true);

    const timer = setTimeout(() => {
      setQuery(debouncedValue);
      setIsPending(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup if debouncedValue changes
  }, [debouncedValue]);

  return (
    <div className="relative">
      <div
        className={`absolute  left-3
         top-1/2 transform -translate-y-1/2 text-gray-500`}
      >
        {isSearching || isPending ? (
          <Loader className={cn("h-4 w-4 text-primary animate-spin")} />
        ) : (
          <Search className="h-4 w-4" />
        )}
      </div>
      <Input
        type="search"
        placeholder={placeholder}
        value={searchTerm || defaultValue}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`pl-10 ${className}`}
        disabled={disabled}
      />
    </div>
  );
}
