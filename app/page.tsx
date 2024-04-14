import Booking from '@/components/booking';
import Facilities from '@/components/facilities';
import Footer from '@/components/footer';
import Header from '@/components/header'
import HeroSection from '@/components/herosection'
import Slider from '@/components/slider'
import SpecialOffers from '@/components/specialoffers';
import Image from 'next/image'

export default function Home() {
	return (
		<>
		<Header/>
		<HeroSection/>
		<Booking/>
		<Facilities/>
		<SpecialOffers/>
		<Footer/>
		</>
	);
}
