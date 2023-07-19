export const usePagination = ({
    totalCount,
    pageSize,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
      const totalPageCount = Math.ceil(totalCount / pageSize);
  
      // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  
      /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
      */
      /*
          Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
      */

  
      /*
        We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */

  
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;
       
      /*
          Case 4: Both left and right dots to be shown
      */
      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };
  