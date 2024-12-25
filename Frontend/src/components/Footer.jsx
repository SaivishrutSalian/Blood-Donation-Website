import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-gray-100 px-[200px] h-[60vh] mt-[50px]">
            <div className="flex justify-between py-[5%]">
                <div>
                    <img src="/logo1.png" alt="" height={100} width={145} />
                    <span>Saving lives, one donation at a time.</span>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">About us</li>
                        <li className="hover:underline cursor-pointer">Donate</li>
                        <li className="hover:underline cursor-pointer">Contact</li>
                        <Link to="/login">
                            <li className="hover:underline cursor-pointer">Admin</li>
                        </Link>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p className="mt-2">123, Vinayak Colony, Dadar, Mumbai</p>
                    <p className="mt-2">Phone: (+91) 9665500000</p>
                    <p className="mt-2">Email: info@lifesource.com</p>
                </div>
            </div>
            <div className="mt-8 border-t border-red-800 pt-4 text-center">
                <p>&copy; 2024 LifeSource. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer