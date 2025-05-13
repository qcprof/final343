import Link from 'next/link'

export default function Menubar() {
    return (
      <>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a href='https://expense-green-alpha.vercel.app/' target='_blank'>Midterm Part I - Expense</a>
          </li>
          <li>
            <a href='https://customer-weld.vercel.app/' target='_blank'>Midterm Part II Site</a>
          </li>
        </ul>
      </>
    )
  }
  