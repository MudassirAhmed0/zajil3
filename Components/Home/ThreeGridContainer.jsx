 import styles from '../../styles/Home.module.css'
 import globalCapacity from '../../assets/NewImages/index/image/global-capcity.jpg'
 import simplicity from '../../assets/NewImages/index/image/simplicity.jpg'
 import flexibility from '../../assets/NewImages/index/image/flexibility.jpg'
import Image from 'next/image'
import Link from 'next/link'

const ThreeGridContainer = () => {
  return (
      <>
    <div className="mt-28 flex">
     <div className={`w-1/3 relative flex flex-col justify-end ${styles.threeCard}`}>
         <span className={styles.cardYellowOverlay}>

         </span>
         <span className={styles.cardYellowOverlay2}>

         </span>
         <div className="absolute top-0 left-0 w-full h-full">
             <Image src={globalCapacity} alt="global-capacity"/>

         </div>
         <span className={`ml-12 -top-6 relative flex flex-col gap-y-2 z-10 ${styles.cardText}`}>
            <span className="text-3xl z-5 relative text-white ">
            GLOBAL CAPACITY
            </span>
            <span className={`relative   text-grey medium-font pr-12 ${styles.hoverText}`}>
            Offices and distribution centers are strategically located in major economic centers on most continents.
            </span>
         </span>

     </div>
     <div className={`w-1/3 relative flex flex-col justify-end ${styles.threeCard}`}>
          <span className={styles.cardYellowOverlay}>

         </span>
          <span className={styles.cardYellowOverlay2}>

         </span>
        <div className="absolute top-0 left-0 w-full h-full">
         <Image src={flexibility} alt="flexibility"/>
        </div>
        <span className={`ml-12 -top-6 relative flex flex-col gap-y-2 z-10 ${styles.cardText}`}>
            <span className="text-3xl z-5 relative text-white ">
            FLEXIBILITY
            </span>
            <span className={`relative   text-grey medium-font pr-12 ${styles.hoverText}`}>
            Yes, Delivered. Zajil is happy to accommodate business demands from warehousing to door-to-door delivery of any type of freight or parcel.
            </span>
         </span>
        
     </div>
     <div className={`w-1/3 relative flex flex-col justify-end ${styles.threeCard}`}>
          <span className={styles.cardYellowOverlay}>

         </span>
          <span className={styles.cardYellowOverlay2}>

         </span>
     <div className="absolute top-0 left-0 w-full h-full">
         <Image src={simplicity} alt='simplicity'/>
        </div>
        <span className={`ml-12 -top-6 relative flex flex-col gap-y-2 z-10 ${styles.cardText}`}>
            <span className="text-3xl z-5 relative text-white ">
            SIMPLICITY
            </span>
            <span className={`relative   text-grey medium-font pr-12 ${styles.hoverText}`}>
                     From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.
            </span>
         </span>
     </div>

    </div>
    <div className="flex justify-center mt-10">
                
        <Link href='#' >
            <a  className='w-36 h-10   transition-all duration-300 rounded-md border-2 border-yellow medium-font text-grey  hover:shadow-md  hover:shadow-shadaw flex justify-center items-center hover:bg-yellow'>
                    Learn More

            </a>
        </Link>
    </div>
    </>
  )
}

export default ThreeGridContainer