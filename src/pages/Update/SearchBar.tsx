interface SearchBarProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

export const SearchBar = ({placeholder, value, onChange, onSearch}: SearchBarProps) => {
    return (
        <div className="flex gap-4">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1"
            />
            <button
                onClick={onSearch}
                className="search-button"
            >
                Search
            </button>
        </div>
    );
};