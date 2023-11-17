import { Box } from '@chakra-ui/react'
import { MemberTable } from '../member-table'

export const List = () => {
  return (
    <Box width="full" bg="white" boxShadow="xs" overflowX="auto" borderRadius="8px 8px 0 0" border="1px solid" borderColor="gray.200" borderBottom={0}>
      <MemberTable />
    </Box>
  )
}
