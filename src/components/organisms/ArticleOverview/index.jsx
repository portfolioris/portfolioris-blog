import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Theme from 'components/atoms/utilities/Theme';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Heading from 'components/atoms/text/Heading';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';
import Button from 'components/atoms/Button';
import TagFilter from 'components/molecules/TagFilter';

import './ArticleOverview.scss';

const ArticleOverview = ({
  heading,
  hideHeadingVisually,
  latest,
  items,
  viewAllBlogs,
  tags,
}) => {
  const $container = useRef(null);
  const [activeTags, setActiveTags] = useState([]);

  const handleClickTag = (slug) => {
    // is a filter removed?
    if (activeTags.contains(slug)) {
      // filter it out
      setActiveTags(activeTags.filter(value => value !== slug));
    } else {
      // add it
      setActiveTags([...activeTags, slug]);
    }
  };

  // useEffect(() => {
  //   const activeItemIds = items.reduce((ids, item) => {
  //     if (item.tags.some(tag => (
  //       activeTags.includes(tag.slug)
  //       // activeTags.indexOf(tag.slug) > -1
  //     ))) {
  //       return ids.push(item.id);
  //     }
  //     return ids;
  //   }, []);
  //
  //   const $items = $container.current.querySelectorAll('.js--articles__item');
  //
  //   $items.forEach(($item) => {
  //     if (activeItemIds.includes(parseFloat($item.dataset.itemId))) {
  //       $item.classList.add('is-active');
  //       $item.removeAttribute('hidden');
  //     } else {
  //       $item.setAttribute('hidden', '');
  //       $item.classList.remove('is-active');
  //     }
  //     const dims = $item.getBoundingClientRect();
  //     console.log(dims);
  //   });
  // });

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
                {items.map(item => (
                  <li
                    key={item.id}
                    data-item-id={item.id}
                    className="o-layout__cell   u-fraction--1/2@from-lap  u-fraction--1/3@from-desk  js--articles__item  c-articles__item"
                  >
                    <ArticleOverviewItem
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
  latest: PropTypes.number,
};
ArticleOverview.defaultProps = {
  heading: null,
  hideHeadingVisually: false,
  items: null,
  tags: null,
  viewAllBlogs: null,
  latest: null,
};

export default ArticleOverview;
