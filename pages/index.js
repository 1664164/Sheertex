import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sheertex</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" 
                                                width="500" height="200" viewBox="0 -10 24 50" stroke-width="2" stroke="currentColor" 
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
          <line x1="12" y1="12" x2="20" y2="7.5"></line>
          <line x1="12" y1="12" x2="12" y2="21"></line>
          <line x1="12" y1="12" x2="4" y2="7.5"></line>
          <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-check" 
                                                width="500" height="200" viewBox="0 -10 24 50" stroke-width="2" stroke="currentColor" 
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-olympics" 
                                                width="500" height="200" viewBox="0 -10 24 50" stroke-width="2" stroke="currentColor" 
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="6" cy="9" r="3"></circle>
          <circle cx="18" cy="9" r="3"></circle>
          <circle cx="12" cy="9" r="3"></circle>
          <circle cx="9" cy="15" r="3"></circle>
          <circle cx="15" cy="15" r="3"></circle>
        </svg>
      </div>
      <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
        <p class="text-4xl text-center pl-20"><text class="pl-15">Free Shipping</text><br /><br />Same day shipping is inculded on all orders</p>
        <p class="text-4xl text-center pl-44 -mt-10"><text class="pl-5">30-Day Guarantee</text><br /><br />Covers any damage that renders your tights unwearable</p>
        <p class="text-4xl text-center pl-56 pr-4 -mt-20"><text class="pl-4 -ml-40">Strength Tested</text><br /><br /><text class="pl-48 pr-24 -ml-96 mr-32">Rated 5 stars by thousands of happy customers</text></p>
      </div>
      <Footer />
    </div>
  );
}
