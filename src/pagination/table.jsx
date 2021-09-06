/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { getContacts } from "../services/contact";
import Paginate from "./pagination";
import { paginate } from "./paginate";
import ContactTable from "./contactsTable";
import Filter from "./filterGroup";
import _ from "lodash";

class Table extends Component {
  state = {
    contacts: [...getContacts()],
    currentPage: 1,
    pageSize: 8,
    filterBy: "all",
    sort: { sortBy: "name", order: "asc" },
  };

  onSort = (selector) => {
    this.setState({
      ...this.state,
      sort: {
        sortBy: selector,
        order: this.state.sort.order === "asc" ? "desc" : "asc",
      },
    });
  };

  handlePageChange = (p) => {
    this.setState({ ...this.state, currentPage: p });
  };

  handlePrevPageChange = () => {
    this.setState({ ...this.state, currentPage: this.state.currentPage - 1 });
  };

  handleNextPageChange = () => {
    this.setState({ ...this.state, currentPage: this.state.currentPage + 1 });
  };

  filterBy = (selector) => {
    this.setState({ ...this.state, filterBy: selector });
  };

  cmpFn = (a, b) => {
    const first = a.firstName.toLowerCase();
    const second = b.firstName.toLowerCase();
    console.log(first, second);

    if (first < second) {
      return -1;
    }

    if (first > second) {
      return 1;
    }

    return 0;
  };

  render() {
    const jobDescriptor = [
      ...new Set([...this.state.contacts.map((c) => c.jobDescriptor)]),
    ].sort();

    const { contacts: allContacts, currentPage, pageSize } = this.state;

    const filteredContacts = allContacts.filter((c) => {
      if (this.state.filterBy === "all") {
        return true;
      } else {
        return c.jobDescriptor === this.state.filterBy;
      }
    });

    const sortedAsc = _.sortBy(filteredContacts, [
      this.state.sort.sortBy,
    ]).reverse();

    const sorted =
      this.state.sort.order !== "asc" ? sortedAsc : sortedAsc.reverse();

    const paginated = paginate(sorted, currentPage, pageSize);

    return (
      <div className="bg-gray-100 flex flex-row pl-4 py-2">
        <div className="flex flex-col w-2/12 mt-2">
          <Filter
            descriptors={jobDescriptor}
            selected={this.state.filterBy}
            filterBy={this.filterBy}
          />
        </div>

        <div className="flex flex-col w-10/12">
          <ContactTable
            contacts={paginated}
            onSort={this.onSort}
            sortByItem={this.state.sort.sortBy}
            order={this.state.sort.order}
          />

          <Paginate
            count={filteredContacts.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            selected={paginated.length}
            onPageChange={this.handlePageChange}
            onPrevPage={this.handlePrevPageChange}
            onNextPage={this.handleNextPageChange}
          />
        </div>
      </div>
    );
  }
}

export default Table;
