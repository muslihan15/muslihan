import React, { useEffect, useState } from "react"
import ButtonCV from "../Components/ButtonCV"
import AOS from "aos"
import "aos/dist/aos.css"
import { db } from "../firebase" // Mengimpor objek db dari file firebase.js
import { collection, getDocs } from "firebase/firestore" // Mengimpor modul yang benar

const AboutMe = () => {
	const [projectCount, setProjectCount] = useState(0)
	const [certificateCount, setCertificateCount] = useState(0)

	useEffect(() => {
		AOS.init()
		AOS.refresh()

		// Ambil data project dari Firestore
		const projectCollection = collection(db, "projects") // Mengacu pada koleksi "projects" di Firestore
		getDocs(projectCollection)
			.then((querySnapshot) => {
				setProjectCount(querySnapshot.size)
			})
			.catch((error) => {
				console.error("Error fetching projects: ", error)
			})

		// Ambil data certificate dari Firestore
		const certificateCollection = collection(db, "certificates") // Mengacu pada koleksi "certificates" di Firestore
		getDocs(certificateCollection)
			.then((querySnapshot) => {
				setCertificateCount(querySnapshot.size)
			})
			.catch((error) => {
				console.error("Error fetching certificates: ", error)
			})
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
					{/* Kolom Kiri */}
					<div className="flex justify-center items-center md:pr-10 pr-0 md:w-auto ">
						<div data-aos="fade-up" data-aos-duration="1000">
							<img
								src="/Photo.png"
								alt="Photo Siluet"
								className="
                            w-[30rem] h-auto rounded-xl "
								id="ImgAbout"
							/>
						</div>
					</div>

					{/* Kolom Kanan */}
					<div className="md:w-full flex flex-col justify-between">
						<p
							className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
							data-aos="fade-up"
							data-aos-duration="600">
							Selamat datang di website saya! Saya adalah Muslihan, seorang dosen pada Program Studi Teknik Informatika, Fakultas Ilmu Komputer di Universitas Al Asyariah Mandar. Saya memiliki fokus pada bidang Teknologi Informasi, khususnya dalam pengembangan web Kecerdasan Buatan dan literasi digital sebagai bagian dari upaya menghadapi era Revolusi Industri 5.0. Saya aktif dalam menjalankan Tridarma Perguruan Tinggi melalui proses pembelajaran yang adaptif, penelitian yang berorientasi pada pengembangan ilmu pengetahuan, serta pengabdian kepada masyarakat dalam meningkatkan pemahaman dan keterampilan digital di lingkungan sekolah hingga masyarakat umum. Melalui website ini, Anda dapat menjelajahi perjalanan akademik saya, publikasi ilmiah, kegiatan pengabdian masyarakat, hingga proyek teknologi yang telah saya kembangkan. Mari berkolaborasi dalam menciptakan inovasi dan kemajuan di bidang teknologi informasi!
						</p>

						<div className="relative " data-aos="fade-up" data-aos-duration="800">
							<ButtonCV />
						</div>

						<div
							class="grid grid-cols-3 md:gap-4 gap-5 mt-5"
							data-aos="fade-up"
							data-aos-duration="1000">
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">3+</b>
								<div className="text-center text-[#a6adba]">Years of Experience</div>
							</div>
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">{projectCount}+</b>
								<div className="text-center text-[#a6adba]">Project Created</div>
							</div>
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
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
