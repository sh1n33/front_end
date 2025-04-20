import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen">
            <div className='fixed top-0 z-50 w-full h-20 bg-white border border-gray-200 shadow-lg flex justify-between items-center text-gray-600 px-4'>
                <div className='w-24 h-3/5 rounded-[1vw] ml-4 mt-3'>
                <img
  src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
  alt="Cool pic"
  className="w-64 h-auto rounded shadow-lg"
/>
                </div>
                <div className='flex gap-x-12 h-full items-center text-gray-600'>
                    <p className='text-md font-bold text-center text-gray-600'>Үйлчилгээ</p>
                    <p className='text-md font-bold text-center text-gray-600'>Давуу тал</p>
                    <p className='text-md font-bold text-center text-gray-600'>Мэдээ</p>
                    <p className='text-md font-bold text-center text-gray-600'>Хамтран ажиллах</p>
                </div>
            </div>
            <div className='bg-[#fff2d7] w-full h-[800px] flex flex-col items-center mt-20'>
            <p className='text-3xl mt-10'>ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
            <img
  src="/phones.png"
  alt="Description of the screenshot"
  className="w-3/5 h-4/7 mt-10"
/>
            <img className='w-1/4 mt-3' src='/download.png'/>
            </div>
            <div className='flex flex-col-reverse md:flex-row bg-[#fafafa] w-full max-w-screen-xl mx-auto md:min-h-[600px] justify-between items-center px-6 md:px-16 py-10 gap-10'>
                <img className='w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:ml-0' src='/zaluu.png'/>
                <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-5'>
                    <p className='text-[#ffd400] text-4xl font-bold'>Toki Service</p>
                    <p className='w-[525px] mt-5'>Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row bg-[#fff2d7] w-full max-w-screen-xl mx-auto md:min-h-[600px] justify-between items-center px-6 md:px-16 py-10 gap-10'>
                <div className='flex flex-col justify-center items-center md:items-end w-full md:w-1/2 px-5'>
                    <p className='text-[#ffd400] text-4xl font-bold'>Toki Pay</p>
                    <p className='w-[525px] mt-5'>Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.</p>
                </div>
                <img className='w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:ml-0' src='/ohin3.png'/>
            </div>
            <div className='flex flex-col-reverse md:flex-row bg-[#fafafa] w-full max-w-screen-xl mx-auto md:min-h-[600px] justify-between items-center px-6 md:px-16 py-10 gap-10'>
                <img className='w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:ml-0' src='/ohin.png'/>
                <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-5'>
                    <p className='text-[#ffd400] text-4xl font-bold'>Toki Shop</p>
                    <p className='w-[525px] mt-5'>Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.</p>
                </div>
            </div>
            <div className='w-full h-[400px] bg-white flex flex-col items-center justify-center'>
                <p className='text-[#ffd400] text-4xl font-bold'>Toki апп өдөр бүр танд тусална</p>
                <p className='text-center mt-6'>Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг<br></br>хэмнэх хялбар, хэрэгтэй аппликейшн юм.</p>
            </div>
            <div className='flex justify-center items-center bg-[#fff2d7] w-full h-[100px]'>
                <div className='flex justify-center items-center  bg-[#ffd800] w-48 h-12 rounded-3xl'>
                    <p className='text-white font-bold'>ДАВУУ ТАЛ</p>
                </div>
            </div>
            <footer className="bg-black text-gray-300 py-10 px-5 md:px-10">
              <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
                <div className="flex-shrink-0">
                  <img src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" alt="Toki Logo" className="w-32 md:w-40 mx-auto md:mx-0" />
                </div>

                <div className="text-sm space-y-2 text-center md:text-left">
                  <p className="font-semibold">Түгээмэл асуулт</p>
                  <p className="flex items-center gap-1">
                    <span>📍</span> Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар
                  </p>
                  <p className="flex items-center gap-1">
                    <span>📞</span> 77074477, 4477
                  </p>
                  <p className="flex items-center gap-1">
                    <span>✉️</span> info@toki.mn
                  </p>
                  <p>Copyright © 2022 | Toki.mn</p>
                </div>

                {/* Socials + Link */}
                <div className="space-y-2 text-sm text-center md:text-right">
                  <p>Нууцлал</p>
                  <div className="flex justify-center md:justify-end gap-4 text-xl">
                    <a href="#" aria-label="Facebook">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
        </div>
    );
}