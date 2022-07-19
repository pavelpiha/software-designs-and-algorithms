import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.scss";
import { Row } from "../Table";

interface FiltersProps {
  store?: any;
  updateStore?: (val) => void;
}

const OPTIONS = [
  {
    title: "Without posts",
  },
  {
    title: "More than 100 posts",
  },
];

export const doFilter = (filters: string[], data: Row[]) => {
  const initialData = [...data];
  if (filters.length && filters.length === 2) {
    const filteredRows = filterByPostsNumberMoreThan(100)(initialData).concat(
      filterByPostsNumber(0)(initialData)
    );
    return filteredRows;
  } else if (filters.length && filters[0] === OPTIONS[0].title) {
    const filteredRows = filterByPostsNumber(0)(initialData);
    return filteredRows;
  } else if (filters.length && filters[0] === OPTIONS[1].title) {
    const filteredRows = filterByPostsNumberMoreThan(100)(initialData);
    return filteredRows;
  } else {
    return [];
  }
};

export const filterByPostsNumber = (params: number) => {
  return (rows: Row[]) => {
    return rows.filter((row) => row.posts === params);
  };
};

export const filterByPostsNumberMoreThan = (params: number) => {
  return (rows: Row[]) => rows.filter((row) => row.posts >= params);
};

export function Filters(props: FiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const { updateStore } = { ...props };

  const onChange = ({ title }) => {
    let filters: string[] = [];
    if (selectedFilter.find((filter) => filter === title)) {
      filters = selectedFilter.filter((filter) => filter !== title);
    } else {
      filters = [...selectedFilter, title];
    }
    setSelectedFilter(filters);
    updateStore(filters);
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={
                !!selectedFilter.find((filter) => filter === option.title)
              }
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{" "}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
