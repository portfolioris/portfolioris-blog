import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Theme from 'components/atoms/utilities/Theme';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Heading from 'components/atoms/text/Heading';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';
import Button from 'components/atoms/Button';
import TagFilter from 'components/molecules/TagFilter';

const ArticleOverview = ({
  heading,
  hideHeadingVisually,
  items,
  viewAllBlogs,
  tags,
}) => {
  // all items
  let activeItems = items;
  const $container = useRef(null);
  const [activeTags, setActiveTags] = useState([]);

  const handleClickTag = (slug) => {
    // const $items = $container.current.querySelectorAll('.js--articles__item');
    // console.log($items);
    // [...$items].forEach(($item) => {
    //   // const dims = $item.getBoundingClientRect();
    //   console.log('domel', $item/* .getBoundingClientRect() */);
    // });
    // console.log(activeItems);

    // is a filter removed?
    if (activeTags.indexOf(slug) > -1) {
      // filter it out
      setActiveTags(activeTags.filter(value => value !== slug));
    } else {
      // add it
      setActiveTags([...activeTags, slug]);
    }
  };

  useEffect(() => {
    const $items = $container.current.querySelectorAll('.js--articles__item');
    console.log($items);
    $items.forEach(($item) => {
      const dims = $item.getBoundingClientRect();
      console.log(dims);
    });
    console.log('ai', activeItems);
    // const $items = $container.current.querySelectorAll('.js--articles__item');
  });


  // if filters are set, filter out some items
  if (activeTags.length) {
    activeItems = items.filter(item => (
      item.tags.some(tag => (
        activeTags.indexOf(tag.slug) > -1
      ))
    ));
  }

  return (
    <section>
      <Theme color="black">
        <Layer>
          <Retain>
            <Heading
              text={heading}
              level={2}
              stylingLevel={2}
              className={hideHeadingVisually ? 'u-visually-hidden' : null}
            />
            <TagFilter
              handleClickTag={handleClickTag}
              tags={tags}
              activeTags={activeTags}
            />
          </Retain>
          <Retain size="breakout">

            <div className="c-articles" ref={$container}>
              <ul className="o-layout  o-layout--gutter  o-layout--equalheight">
                {activeItems.map(item => (
                  <li
                    key={item.id}
                    className="o-layout__cell   u-fraction--1/2@from-lap  u-fraction--1/3@from-desk"
                  >
                    <ArticleOverviewItem
                      className="c-articles__item  js--articles__item"
                      {...item}
                    />
                  </li>
                ))}
              </ul>
            </div>
            {viewAllBlogs && viewAllBlogs.entry ? (
              <div className="o-layout  o-layout--align-center">
                <div className="o-layout__cell  o-layout__cell--fit">
                  <p>
                    <Button
                      href={viewAllBlogs.entry.uri}
                      text={viewAllBlogs.customText}
                    />
                  </p>
                </div>
              </div>
            ) : null}
          </Retain>
        </Layer>
      </Theme>
    </section>
  );
};

ArticleOverview.propTypes = {
  heading: PropTypes.string,
  hideHeadingVisually: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.any),
  tags: PropTypes.arrayOf(PropTypes.any),
  viewAllBlogs: PropTypes.objectOf(PropTypes.any),
};
ArticleOverview.defaultProps = {
  heading: null,
  hideHeadingVisually: false,
  items: null,
  tags: null,
  viewAllBlogs: null,
};

export default ArticleOverview;
