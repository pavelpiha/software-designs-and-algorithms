import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "./Sort.module.scss";
import { Row } from "../Table";

interface SortProps {
  store?: {};
  updateStore?: (val) => void;
}

export const sortDataByPayments = (
  value: string,
  data: Row[],
  updateStore: (val: any) => void
) => {
  if (value === "desc") {
    updateStore(
      [...data].sort((a, b) => (a.lastPayments < b.lastPayments ? 1 : -1))
    );
  } else if (value === "asc") {
    updateStore(
      [...data].sort((a, b) => (a.lastPayments > b.lastPayments ? 1 : -1))
    );
  } else {
    updateStore(data);
  }
};

export function Sort(props: SortProps) {
  const { updateStore } = { ...props };

  const handleChange = (value) => {
    updateStore(value);
  };

  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>Sort by payments</FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel value="desc" control={<Radio />} label="desc" />
        <FormControlLabel value="asc" control={<Radio />} label="asc" />
      </RadioGroup>
    </FormControl>
  );
}
