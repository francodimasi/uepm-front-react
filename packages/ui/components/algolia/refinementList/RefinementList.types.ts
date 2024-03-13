export type RefinementListProps = {
  attribute: string;
  escapeFacetValues: boolean;
  searchable: boolean;
  classNames?: Partial<RefinementListClassNames>;
};

export type RefinementListClassNames = {
  /**
   * Class names to apply to the root element
   */
  root: string;
  /**
   * Class names to apply to the root element when there are no refinements possible
   */
  noRefinementRoot: string;
  /**
   * Class names to apply to the search box wrapper element
   */
  searchBox: string;
  /**
   * Class names to apply to the root element
   */
  noResults: string;
  /**
   * Class names to apply to the list element
   */
  list: string;
  /**
   * Class names to apply to each item element
   */
  item: string;
  /**
   * Class names to apply to each selected item element
   */
  selectedItem: string;
  /**
   * Class names to apply to each label element
   */
  label: string;
  /**
   * Class names to apply to each checkbox element
   */
  checkbox: string;
  /**
   * Class names to apply to the text for each label
   */
  labelText: string;
  /**
   * Class names to apply to the facet count of each item
   */
  count: string;
  /**
   * Class names to apply to the "Show more" button
   */
  showMore: string;
  /**
   * Class names to apply to the "Show more" button if it's disabled
   */
  disabledShowMore: string;
};
