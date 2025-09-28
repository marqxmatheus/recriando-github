import React from 'react'
import Heatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { subYears } from 'date-fns'

import { Container } from './styles'

type HeatmapValue = { date: Date | string; count?: number }

export const classFor = (count?: number) => {
  if (!count || count <= 0) return 'color-empty'
  const c = Math.max(1, Math.min(count, 4))
  return `color-scale-${c}`
}

const RandomCalendar: React.FC = () => {
  const endDate = new Date()
  const startDate = subYears(endDate, 1)

  const values: HeatmapValue[] = [
    { date: new Date(), count: 3 },
  ]

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          gutterSize={3}
          classForValue={(v?: HeatmapValue) => classFor(v?.count)}
          showWeekdayLabels
        />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  )
}

export default RandomCalendar
