import React, { useEffect, useState } from "react"
import ButtonCV from "../Components/ButtonCV"
import AOS from "aos"
import "aos/dist/aos.css"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore"

const AboutMe = () => {
	const [projectCount, setProjectCount] = useState(0)
	const [certificateCount, setCertificateCount] = useState(0)

	useEffect(() => {
		AOS.init()
		AOS.refresh()

		const getCounts = async () => {
			try {
				// Ambil jumlah dokumen project
				const projectSnapshot = await getDocs(collection(db, "projects"))
				setProjectCount(projectSnapshot.size)

				// Ambil jumlah dokumen certificate
				const certificateSnapshot = await getDocs(collection(db, "certificates"))
				setCertificateCount(certificateSnapshot.size)
			} catch (error) {
				console.error("Error fetching Firestore data: ", error)
			}
		}

		getCounts()
	}, [])

	return (
		<>
			<div className="md:px-[10%] px-[6%]" id="About">
				<div
					className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4"
					data-aos="fade-up"
					data-aos-duration="400">
					ABOUT ME
				</div>

				<div className="flex flex-col md:flex-row">
					{/* Kiri */}
					<div className="flex justify-center items-center md:pr-10">
						<div data-aos="fade-up" data-aos-duration="1000">
							<img
								src="/Photo.png"
								alt="Photo Siluet"
								className="w-[30rem] h-auto rounded-xl"
								id="ImgAbout"
							/>
						</div>
					</div>

					{/* Kanan */}
					<div className="md:w-full flex flex-col justify-between">
						<p
							className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
							data-aos="fade-up"
							data-aos-duration="600">
							Selamat datang di website saya! Saya adalah Muslihan, seorang dosen pada Program Studi Teknik Informatika, Fakultas Ilmu Komputer di Universitas Al Asyariah Mandar. Saya memiliki fokus pada bidang Teknologi Informasi, khususnya dalam pengembangan web Kecerdasan Buatan dan literasi digital sebagai bagian dari upaya menghadapi era Revolusi Industri 5.0 dalam meningkatkan pemahaman dan keterampilan digital di lingkungan sekolah hingga masyarakat umum. Mari berkolaborasi dalam menciptakan inovasi dan kemajuan di bidang teknologi informasi!
						</p>

						<div className="relative" data-aos="fade-up" data-aos-duration="800">
							<ButtonCV />
						</div>

						<div
							className="grid grid-cols-3 md:gap-4 gap-5 mt-5"
							data-aos="fade-up"
							data-aos-duration="1000">
							
							<div className="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm" id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">3+</b>
								<div className="text-center text-[#a6adba]">Years of Experience</div>
							</div>

							<div className="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm" id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">{projectCount}+</b>
								<div className="text-center text-[#a6adba]">Project Created</div>
							</div>

							<div className="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm" id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">{certificateCount}+</b>
								<div className="text-center text-[#a6adba]">Certificate</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe
