import { useState, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import {
  Table,
  Filters,
  Sort,
  Search,
  TableProps,
  doSearch,
  sortDataByPayments,
  doFilter,
} from "./components";
import { getImages, getUsers, getAccounts } from "./mocks/api";

import styles from "./App.module.scss";

import type { Row } from "./components";
import type { Image, User, Account, Payment } from "../types";

function App() {
  const [data, setData] = useState<Row[]>([]);
  const [filteredData, setFilteredData] = useState<Row[]>([]);
  const [filterValue, seFilterValue] = useState<Array<string>>([]);
  const [sortValue, setSortValue] = useState<string>();
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        console.log(images, users, accounts);
        const convertedData = dataConverter(users, accounts, images).rows;
        setData(convertedData);
        setFilteredData(convertedData);
      }
    );
  }, []);

  const dataConverter = (
    users: User[],
    accounts: Account[],
    images: Image[]
  ): TableProps => {
    const rowsData: Row[] = users.map((user, index) => {
      const currentRow: Row = {
        ...user,
        posts: { ...accounts[index] }.posts,
        lastPayments: findPayment(
          [...accounts[index].payments],
          getByLatestDate
        ).totalSum,
        avatar: { ...images[index] }.url,
      };
      return currentRow;
    }, []);
    return { rows: rowsData };
  };

  type PaymentSearchCallback = (payments: Payment[]) => Payment;

  /**
   *
   * @param payments array of Payments
   * @param callback a function to search Payment
   * @returns a found Payment or a new Payment object with totalSum=0 and date=""
   */
  const findPayment = (
    payments: Payment[],
    callback: PaymentSearchCallback
  ): Payment => {
    if (payments && payments.length) {
      return callback(payments);
    } else
      return {
        totalSum: 0,
        date: "",
      };
  };

  /**
   *
   * @param payments array of Payments
   * @returns a Payment with latest date
   */
  const getByLatestDate = (payments: Payment[]): Payment => {
    return payments.reduce((a, b, index) => {
      return new Date(a.date) > new Date(b.date) && index ? a : b;
    }, payments[0]);
  };

  const updateSearch = (val) => {
    setSearchValue(val);
  };
  const updateSort = (val) => {
    setSortValue(val);
  };

  const updateFilter = (val) => {
    seFilterValue(val);
  };

  useEffect(() => {
    const updateFilteredData = (): void => {
      const allFilteredAllData: Set<Row> = new Set();
      const filteredByPosts = doFilter(filterValue, data);
      const searchedByColumns = doSearch(searchValue, data);
      let result: Row[] = [];
      if (filteredByPosts.length || searchedByColumns.length) {
        searchedByColumns.forEach((item) => allFilteredAllData.add(item));
        filteredByPosts.forEach((item) => allFilteredAllData.add(item));
        result = Array.from(allFilteredAllData);
      } else {
        result = data;
      }
      sortDataByPayments(sortValue, result, setFilteredData);
    };
    updateFilteredData();
  }, [data, sortValue, searchValue, filterValue]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateStore={updateFilter} />
            <Sort updateStore={updateSort} />
          </div>
          <Search updateStore={updateSearch} />
        </div>
        <Table rows={filteredData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
