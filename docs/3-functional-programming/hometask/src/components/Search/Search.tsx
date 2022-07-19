import { SetStateAction, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Search.module.scss";
import { Row } from "../Table";

interface SearchProps {
  store?: {};
  updateStore?: (val) => void;
}

export const fieldsToSearch = [
  "username",
  "country",
  "name",
  "lastPayments",
  "posts",
];

export const doSearch = (searchValue: SetStateAction<string>, data: Row[]) => {
  if (searchValue) {
    const filteredRows = [...data].filter((row) => {
      return Object.keys(row).some((field) => {
        if (fieldsToSearch.some((fieldToSearch) => fieldToSearch === field)) {
          return row[field]
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase());
        }
        return false;
      });
    });
    return filteredRows;
  } else {
    return [];
  }
};

export function Search(props: SearchProps) {
  const [searchedValue, setSearchedValue] = useState<string>("");
  const { updateStore } = { ...props };

  const onChange = (value: SetStateAction<string>) => {
    setSearchedValue(value);
    updateStore(value);
  };

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
