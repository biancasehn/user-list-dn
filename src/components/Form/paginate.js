import React from "react";
import PropTypes from "prop-types";
import { Button, Text, Flex, useTheme } from "@chakra-ui/react";
import Icon from "../../atoms/Icon";

const COUNT_INDEX_PAGES = 4;

const PageButton = ({ children, selected, ...props }) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      backgroundColor={selected && "brand.primary"}
      p={0}
      borderRadius={theme.pxToRem(2)}
      height={theme.pxToRem(24)}
      minWidth={theme.pxToRem(24)}
      variant="ghost"
      mr={theme.pxToRem(8)}
    >
      {children}
    </Button>
  );
};

const Paginator = ({ dataLength, onChangePage, itemsPerPage, currentPage }) => {
  const theme = useTheme();
  const countPages = React.useMemo(
    () => Math.ceil(dataLength / itemsPerPage),
    [dataLength, itemsPerPage]
  );

  const pages = React.useMemo(() => {
    if (!countPages || !currentPage) return [];
    const pages = Array.from(Array(countPages).keys()).map((item) => item + 1);
    if (countPages <= COUNT_INDEX_PAGES) return pages;

    if (countPages > COUNT_INDEX_PAGES) {
      if (currentPage === countPages)
        return pages
          .slice(currentPage - COUNT_INDEX_PAGES)
          .splice(0, COUNT_INDEX_PAGES);

      if (currentPage === 1) return pages.slice(0).splice(0, COUNT_INDEX_PAGES);

      return pages
        .slice(currentPage > 3 ? currentPage - 3 : 0)
        .splice(0, COUNT_INDEX_PAGES);
    }
  }, [countPages, currentPage]);

  const onChange = (nextPage) =>
    onChangePage && onChangePage(nextPage, nextPage === pages.length);

  React.useEffect(() => {
    if (countPages && countPages < currentPage) onChange(1);
  }, [currentPage]);

  return (
    <Flex alignItems="center">
      <Button
        onClick={() => onChange(currentPage - 1)}
        isDisabled={currentPage === 1 || countPages <= 1}
        variant="ghost"
        p={0}
        borderRadius={theme.pxToRem(2)}
        height={theme.pxToRem(24)}
        minWidth={theme.pxToRem(24)}
        mr={theme.pxToRem(8)}
        _hover={{ bg: "transparent" }}
      >
        <Icon
          w={theme.pxToRem(25)}
          h={theme.pxToRem(25)}
          color={
            currentPage !== 1 && countPages > 1 ? "brand.primary" : "textMedium"
          }
          name="ChevronLeftIcon"
        />
      </Button>

      {pages.map((item, index) => (
        <PageButton
          onClick={() => item !== currentPage && onChange(item)}
          selected={currentPage === item}
          key={`page_${item}_${index}`}
        >
          <Text color={item === currentPage ? "white" : "textMedium"}>
            {item}
          </Text>
        </PageButton>
      ))}

      {pages[pages.length - 1] < countPages && (
        <React.Fragment>
          <Text color="textMedium">{"..."}</Text>
          <PageButton
            ml={theme.pxToRem(8)}
            onClick={() => onChange(countPages)}
          >
            <Text color="textMedium">{countPages}</Text>
          </PageButton>
        </React.Fragment>
      )}

      <Button
        onClick={() =>
          currentPage !== countPages ||
          (countPages > 1 && onChange(currentPage + 1))
        }
        isDisabled={currentPage === countPages || countPages <= 1}
        variant="ghost"
        _hover={{ bg: "transparent" }}
        p={0}
        borderRadius={theme.pxToRem(2)}
        height={theme.pxToRem(24)}
        minWidth={theme.pxToRem(24)}
      >
        <Icon
          w={theme.pxToRem(25)}
          h={theme.pxToRem(25)}
          name="ChevronRightIcon"
          color={
            currentPage !== countPages || countPages > 1
              ? "brand.primary"
              : "textMedium"
          }
          onClick={() => onChange(currentPage + 1)}
        />
      </Button>
    </Flex>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number,
  dataLength: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default Paginator;
