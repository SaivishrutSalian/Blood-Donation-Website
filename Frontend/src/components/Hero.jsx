

const Hero = () => {
  return (
    <div className="bg-[url('/hero.png')] bg-no-repeat bg-cover bg-center h-[85vh] px-[200px]">
        <div className="flex flex-col text-white w-[50%] pt-[10%]">
            <span className="text-[30px] mt-3">Donate Blood, Save Life!</span>
            <h1 className="text-[45px] mt-3">Your Blood can Bring Smile in Other Person's Life</h1>

            <div className="flex items-center mt-[20px]">
                <button className="bg-red-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">Donate Now</button>
                <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">CALL: (+91) 9665500000</button>
            </div>
        </div>
    </div>
  )
}

export default Hero