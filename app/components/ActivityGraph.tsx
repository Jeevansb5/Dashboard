"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"



const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ActivityGraph() {

  const { activity } = useGlobalContext();

  if (activity.length == 0) {
    return (<Skeleton className='h-[100%] w-[100%] col-span-2 md:col-span-full' />)
  }

  return (

    <Card className="shadow-md max-[450px]:w-[90%] max-[450px]:mx-3 mx-auto">
      <CardHeader className="border-gray-300 py-3 border-b-[1px] mx-3">
        <CardTitle>Acitivity</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={activity}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
