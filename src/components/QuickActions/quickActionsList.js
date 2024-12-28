import { TrainFront, ClockFill, CreditCard2Front } from 'react-bootstrap-icons'

export const quickActions = [
  {
    title: 'Book Tickets',
    icon: TrainFront,
    description: 'Purchase single or round-trip tickets',
    link: '/book-ticket',
    color: 'bg-blue-500'
  },
  {
    title: 'View Schedule',
    icon: ClockFill,
    description: 'Check real-time train schedules',
    link: '/schedule',
    color: 'bg-green-500'
  },
  {
    title: 'Recharge Card',
    icon: CreditCard2Front,
    description: 'Top up your MRT card balance',
    link: '/recharge',
    color: 'bg-purple-500'
  }
]