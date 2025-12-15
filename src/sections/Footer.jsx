import { mySocials } from "../constants"

const Footer = () => {
  return (
    <section className='flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space'>
        <div className='mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full' />
        <div className='flex gap-2'>
            <p>Designed & Built by Francis</p>
        </div>
        <div className='flex gap-3'>{mySocials.map((mySocials, index) => (
            <a href={mySocials.href} key={index}><img src={mySocials.icon} className="w-5 h-5" alt={mySocials.name}/></a>
        ))}</div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
    </section>
  )
}

export default Footer