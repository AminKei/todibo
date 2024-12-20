import { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import { Input } from "../../BaseComponents/Input/Input";
import { Product } from "../../Hooks/products/useProducts";
import { Loading } from "../../Components/Loading/Loading";

export interface Data {
  data: Product;
}

const SearchBar: React.FC<{ data: Product[] }> = ({ data }): JSX.Element => {
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [wordEntered, setWordEntered] = useState<string>("");

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  window.addEventListener("load", () => inputRef.current?.focus());

  const handleFilter = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase();
    setWordEntered(searchWord);

    const newFilter: Product[] = data.filter(({ name, image }): boolean =>
      name.toLowerCase().includes(searchWord)
    );

    if (!searchWord) return setFilteredData([]);
    setFilteredData(newFilter);
  };

  return (
    <div style={{ display: "grid" }}>
      <div id="search-and-icon">
        <Input
          heigth={60}
          width={300}
          className="inputSearch"
          placeholder="Enter a Book Name..."
          value={wordEntered}
          onChange={handleFilter}
          autoFocus={true}
        />
      </div>
      {filteredData.length !== 0 ? (
        <div>
          {filteredData.length !== 0 && (
            <div className="root-Searchbar">
              <div style={{ width: "100%", display: "grid" }}>
                {filteredData.map(({ name, id }, key) => (
                  <div className="div-item">
                    <p
                      style={{ fontSize: "15px", padding: "10px" }}
                      onClick={() =>
                        (document.location = `/ProductPage?id=${id}`)
                      }
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export { SearchBar };
