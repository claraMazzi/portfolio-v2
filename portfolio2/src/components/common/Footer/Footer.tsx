import Link from "next/link";
import { FC, memo } from "react";


export interface Props {
    children?: React.ReactNode;

}

const Footer:FC<Props> = ({children}) => {
  return (
    <footer className="bg-gradient-1 h-40">
        <section>
            <Link href="/">Get your quote</Link>
        </section>
    </footer>
  )
}


export default memo(Footer);