import { FC } from "react"
import { Badge } from "@chakra-ui/react"
import type { MockDataTypes } from "@/types/data"
import {
  setBgColorStatus,
  setColorTextStatus,
} from "../utilities/setColorSchemeBadge"

interface Props {
  size: string
  member: MockDataTypes
}

const BadgeTheme: FC<Props> = ({ size, member }) => {
  return (
    <Badge
      size={size}
      bgColor={setBgColorStatus(member.student.status.id)}
      color={setColorTextStatus(member.student.status.id)}
      textTransform="capitalize"
    >
      {member.student.status.label}
    </Badge>
  )
}

export default BadgeTheme
