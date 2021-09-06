import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const ContactTable = ({ contacts, onSort, sortByItem, order }) => {
  return (
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 ">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader onSort={onSort} sortByItem={sortByItem} order={order} />
          <TableBody contacts={contacts} />
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
