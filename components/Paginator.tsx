"use client"

import { FC, useState } from "react";
import { ButtonGroup, Button, Box, IconButton, useMediaQuery } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  totalPages?: number;
};

const Paginator: FC<Props> = ({ totalPages = 10 }) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", { ssr: true, fallback: true });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  };

  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;

      pages.push(
        <Button
          key={i}
          w="40px"
          h="40px"
          variant={isActive ? "solid" : "ghost"}
          bg={isActive ? "gray.50" : undefined}
          color="gray.800"
          colorScheme="grayIron"
          fontWeight={500}
          _hover={{
            bg: 'grayIron.150'
          }}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }
  } else {
    let startPage = 1;
    let endPage = totalPages;

    if (currentPage > 3) {
      pages.push(
        <Button
          key="1"
          w="40px"
          h="40px"
          variant="ghost"
          bg={1 === currentPage ? "fint.600" : undefined}
          fontWeight={500}
          colorScheme="grayIron"
          onClick={() => handlePageChange(1)}
        >
          1
        </Button>
      );

      pages.push(
        <Button
          key="ellipsis1"
          w="40px"
          h="40px"
          fontWeight={500}
          variant="ghost"
          isDisabled
        >...</Button>
      );

      startPage = currentPage - 2;
    }

    if (currentPage < totalPages - 3) {
      endPage = currentPage + 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      pages.push(
        <Button
          key={i}
          w="40px"
          h="40px"
          variant={isActive ? "solid" : "ghost"}
          bg={isActive ? "gray.50" : undefined}
          color="gray.800"
          fontWeight={500}
          colorScheme="grayIron"
          _hover={{
            bg: 'grayIron.150'
          }}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    if (currentPage < totalPages - 3) {
      pages.push(
        <Button
          key="ellipsis2"
          w="40px"
          h="40px"
          fontWeight={500}
          variant="ghost"
          isDisabled
        >...</Button>
      );
      pages.push(
        <Button
          key={totalPages}
          w="40px"
          h="40px"
          variant="ghost"
          bg={totalPages === currentPage ? "grayIron" : undefined}
          fontWeight={500}
          colorScheme="grayIron"
          _hover={{
            bg: 'grayIron.150'
          }}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Button>
      );
    }
  }

  return (
    <ButtonGroup w="full" justifyContent="space-between">
      {isDesktop ? (
        <Button px={3.5} leftIcon={<ArrowLeft size={20} />} colorScheme="grayIron" variant="outline" isDisabled>Anterior</Button>
      ) : (
        <IconButton px={3.5} aria-label='Previous page' icon={<ArrowLeft size={20} />} colorScheme="grayIron" variant="outline" isDisabled />
      )}
      <Box>{pages}</Box>
      {isDesktop ? (
        <Button px={3.5} rightIcon={<ArrowRight size={20} />} colorScheme="grayIron" variant="outline">Siguiente</Button>
      ) : (
        <IconButton px={3.5} aria-label='Next page' icon={<ArrowRight size={20} />} colorScheme="grayIron" variant="outline" />
      )}
    </ButtonGroup>
  );
};

export default Paginator;