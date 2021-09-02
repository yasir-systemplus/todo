/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { getContacts } from "../services/contact";
import Paginate from "./pagination";
import { paginate } from "./paginate";

class Table extends Component {
  state = { contacts: getContacts(), currentPage: 1, pageSize: 8 };

  handlePageChange = (p) => {
    this.setState({ ...this.state, currentPage: p });
  };

  handlePrevPageChange = () => {
    this.setState({ ...this.state, currentPage: this.state.currentPage - 1 });
  };

  handleNextPageChange = () => {
    this.setState({ ...this.state, currentPage: this.state.currentPage + 1 });
  };

  render() {
    const { contacts: allContacts, currentPage, pageSize } = this.state;
    const paginated = paginate(allContacts, currentPage, pageSize);

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginated.map((person) => (
                    <tr key={person.email()}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.avatar()}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.firstName() + " " + person.lastName()}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.title()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.jobDescriptor()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.jobTitle()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Paginate
                count={allContacts.length}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                selected={paginated.length}
                onPageChange={this.handlePageChange}
                onPrevPage={this.handlePrevPageChange}
                onNextPage={this.handleNextPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
