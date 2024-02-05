import { BadgeDollarSign, CornerRightDown, CornerRightUp, ShoppingCart, Truck, Undo2 } from "lucide-react"
import { ReactNode } from "react"

export default function Dashboard() {
  type TMonthlyStatus = {
    title: string,
    icon: ReactNode,
    value: number,
    status: 'high' | 'low'
  }
  const monthlyStatus: TMonthlyStatus[] = [
    {
      title: 'Sales',
      icon: <BadgeDollarSign />,
      value: 59467.67,
      status: 'high'
    },
    {
      title: 'Returns',
      icon: <Undo2 />,
      value: 878.60,
      status: 'low'
    },
    {
      title: 'Purchases',
      icon: <ShoppingCart />,
      value: 67689.67,
      status: 'high'
    },
    {
      title: 'Shipping Cost',
      icon: <Truck />,
      value: 989.67,
      status: 'low'
    },
  ]

  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {
          monthlyStatus.map(item => <div
            key={item.title}
            className="px-8 py-6 shadow-[5px_2px_5px_rgba(0,0,0,0.3)] rounded-lg space-y-2"
          >
            <div className="font-semibold flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-xl">{item.title}{item.icon}</h4>
              <span>
                {
                  item.status === 'high' ? <CornerRightUp className="size-8 text-green-400" /> :
                    item.status === 'low' ? <CornerRightDown className="size-8 text-red-400" /> : ''
                }
              </span>
            </div>
            <h2 className="text-4xl font-bold">$ {item.value}</h2>
            <p>Total for this month</p>
          </div>)
        }
      </div>

      <div></div>
    </section>
  )
}
