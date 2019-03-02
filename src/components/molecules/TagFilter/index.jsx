import React, { useState } from 'react';
import PropTypes from 'prop-types';

// const useFilter = (initialValues = ['css']) => {
//   const [filters, setFilters] = useState(initialValues);
//
//   return {
//     filters,
//     checkFilter: (slug) => {
//       if (filters.includes(slug)) {
//         filters.splice(filters.indexOf(slug), 1);
//       } else {
//         filters.push(slug);
//       }
//       setFilters(
//         filters,
//       );
//     },
//   };
// };


const TagFilter = ({
  tags,
}) => {
  // const [value, setValue] = useState([]);
  const [count, setCount] = useState({});

  const handleCheck = (slug) => {
    const arr = count;
    arr[slug] = true;
    // arr.push(slug);
    setCount(arr);
    // value.push(slug);
    // setValue(value);
    console.log(arr);
  };
  // const { filters, checkFilter } = useFilter();

  return (
    <form method="get" action="">
      <div className="o-layout  o-layout--gutter">
        {tags.map(tag => (
          <div
            key={tag.slug}
            className="o-layout__cell  o-layout__cell--fit"
          >
            <label htmlFor={tag.slug}>
              <input
                type="checkbox"
                name={tag.slug}
                id={tag.slug}
                // value={tag.slug}
                onChange={() => handleCheck(tag.slug)}
                // onChange={() => checkFilter(tag.slug)}
                // checked={value.includes(tag.slug)}
              />
              <span>
                {count[tag.slug] ? 'ja' : 'nee'}
                {tag.title}
              </span>
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any),
};

TagFilter.defaultProps = {
  tags: [],
};

export default TagFilter;
