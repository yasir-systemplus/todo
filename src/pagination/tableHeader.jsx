import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const TableHeader = ({ onSort, sortByItem, order }) => {
  return (
    <thead className="bg-gray-50">
      <tr className="flex flex-row">
        <th
          onClick={() => onSort("firstName")}
          scope="col"
          className="flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
          <div className="child">
            <ChevronUpIcon
              width="20"
              height="20"
              color={
                sortByItem === "firstName" && order === "asc" ? "black" : ""
              }
            />
            <ChevronDownIcon
              width="20"
              height="20"
              color={
                sortByItem === "firstName" && order === "desc" ? "black" : ""
              }
            />
          </div>
        </th>
        <th
          onClick={() => onSort("title")}
          scope="col"
          className="flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Title
          <div className="child">
            <ChevronUpIcon
              width="20"
              height="20"
              color={sortByItem === "title" && order === "asc" ? "black" : ""}
            />
            <ChevronDownIcon
              width="20"
              height="20"
              color={sortByItem === "title" && order === "desc" ? "black" : ""}
            />
          </div>
        </th>
        <th
          onClick={() => onSort("status")}
          scope="col"
          className="flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Status
          <div className="child">
            <ChevronUpIcon
              width="20"
              height="20"
              color={sortByItem === "status" && order === "asc" ? "black" : ""}
            />
            <ChevronDownIcon
              width="20"
              height="20"
              color={sortByItem === "status" && order === "desc" ? "black" : ""}
            />
          </div>
        </th>
        <th
          onClick={() => onSort("jobTitle")}
          scope="col"
          className="flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Role
          <div className="child">
            <ChevronUpIcon
              width="20"
              height="20"
              color={
                sortByItem === "jobTitle" && order === "asc" ? "black" : ""
              }
            />
            <ChevronDownIcon
              width="20"
              height="20"
              color={
                sortByItem === "jobTitle" && order === "desc" ? "black" : ""
              }
            />
          </div>
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
