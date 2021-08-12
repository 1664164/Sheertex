import Link from 'next/link';

export const Footer = () => {
	return (
		<>

			<div className='text-xs font-bold pt-24 px-24 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>							
				<form className='mt-8 w-full flex'>
				 	<text class="-mt-10 -mr-10">
				 		Get 15% off-Join our mailing list
				 	</text>
 					<input
  						className='border rounded-tl rounded-bl border-gray-100 w-full px-2 py-2 -ml-48 text-gray-900'
   						placeholder='Your Email Here'
   						type='email'
   						required
 					/>
 					<button
  						type='submit'
  						className='bg-yellow-400 text-gray-900 px-4 py-2 font-medium sm:text-lg rounded-tr rounded-br'
 					>
  						Subscribe
 					</button>
				</form>
			</div>


			<div className='text-xs font-bold pt-24 pr-40 pl-64 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
				About<br /><br />Our Story<br />Our Knit<br />Reviews<br />FAQ<br />Careers
			</div>

			<div className='text-xs font-bold pt-24 px-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
				Shop<br /><br />Home<br />Shop All<br />Gift Card<br />Refer a Friend
			</div>

			<div className='text-xs font-bold pt-24 px-40 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'> 
				Contact<br /><br />7471 Avenue Léonard-De Vinci,<br /> Montreal, QC H2A 2P3<br /><br />1 800-715-1658<br />hello@sheertex.com	
			</div>


		</>
	);
}