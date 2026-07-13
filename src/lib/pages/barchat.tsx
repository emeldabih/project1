
import { type ChartConfig } from "@/components/ui/chart"
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts"
import { ChartContainer } from "@/components/ui/chart"
export default function barchat() {
 const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig =  {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig
  return (
    <>
    <div className="flex justify-between items-center mb-40">
    <div>
      <h2 className="font-bold text-1xl">Todays's trends</h2>
      <p>30 sept 2021</p>
    </div>
    <div>
      <h3 className="text-sm ml-10">
        --Today--Yesterday
      </h3>
    </div>
    </div>
    
 <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
  <BarChart accessibilityLayer data = {chartData}>
    <CartesianGrid vertical={false}/>
    <XAxis 
    dataKey="month"
    tickLine= {false}
    tickMargin={10}
    axisLine= {false}
    tickFormatter={(value)=> value.slice(0,3)}/>
    <Bar dataKey="mobile" fill="var(--color-desktop)" radius={4}/>
     <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>

  </BarChart>
 </ChartContainer>
 </>
  )
}
