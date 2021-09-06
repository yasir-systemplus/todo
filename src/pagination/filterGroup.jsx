const Filter = ({ descriptors, selected, filterBy }) => {
  return (
    <ul className="rounded-md border-2">
      <li
        onClick={() => filterBy("all")}
        className={`px-2 py-3 border-solid border-b-2 rounded-md ${
          selected === "all" ? "bg-red-500 text-white" : ""
        }`}
      >
        All
      </li>
      {descriptors.map((jobD) => (
        <li
          key={jobD}
          onClick={() => filterBy(jobD)}
          className={`px-2 py-3 border-solid border-b-2 rounded-md ${
            selected === jobD ? "bg-red-500 text-white" : ""
          }`}
        >
          {jobD}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
