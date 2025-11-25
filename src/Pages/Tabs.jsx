import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../Components/Card";
import Certificate from "../Components/Certificate";
import PIcon from "../Components/CardIcon";
import AOS from "aos";
import "aos/dist/aos.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // PROJECT DATA
  const projects = [
    {
      title: "e-Learning",
      description:
        "Platform pembelajaran online yang digunakan untuk mendukung proses belajar mengajar melalui materi, tugas, dan evaluasi.",
      img: "https://www.cybermakassar.com/asset/foto_berita/elearning-app.png",
      link: "https://fikomlearning.xyz",
    },
    {
      title: "Sistem Informasi UKM MAPALA UNASMAN",
      description:
        "Sistem informasi untuk mengelola data anggota, kegiatan pendakian, serta publikasi dokumentasi organisasi pecinta alam.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9otTx7O3ZL8WOz_ipn-Kz9JsOCyepHNIH2A&s",
      link: "https://mapala.unasman.ac.id",
    },
    {
      title: "Sistem Informasi Fakultas Ilmu Komputer UNASMAN",
      description:
        "Website resmi fakultas yang menyajikan informasi akademik, layanan fakultas, dan publikasi kegiatan.",
      img: "https://lib.lppm-unasman.ac.id/template/default/img/1.jpg",
      link: "https://fikom-unasman.ac.id",
    },
  ];

  // CERTIFICATE DATA
  const certificates = [
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      img: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/course_certificate_433_0722_b6d7858ea9c8b8bc4bfef87429abb64e9b3e3e35.png",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      img: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/course_certificate_556_0923_d6b53c7f6135c0b016e918a1962fa2a343b3bced.png",
    },
    {
      title: "Belajar Membuat Aplikasi Web dengan React",
      img: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/course_certificate_621_1223_0de93e572cca0dfafad9dca7c42a7dc011b0a4af.png",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      img: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/course_certificate_594_1223_02e21c661d6d7b53e32a315b7d952c8f92edf3ec.png",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      img: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/course_certificate_528_1123_4a46b2a18bdc2a0b99e8a4e6e22d0d82d7c5c7e0.png",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      img: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/course_certificate_478_0823_43e92b033f213922c6d8a167f9d24a45ad7955da.png",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%] md:mt-20 mt-10" id="Tabs">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab label="Project" {...a11yProps(0)} sx={{ fontWeight: "bold" }} />
            <Tab label="Certificate" {...a11yProps(1)} sx={{ fontWeight: "bold" }} />
            <Tab label="Tech Stack" {...a11yProps(2)} sx={{ fontWeight: "bold" }} />
          </Tabs>
        </AppBar>

        {/* PROJECT TAB */}
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up">
                <CardProject
                  Img={project.img}
                  Title={project.title}
                  Description={project.description}
                  Link={project.link}
                />
              </div>
            ))}
          </div>
        </TabPanel>

        {/* CERTIFICATE TAB */}
        <TabPanel value={value} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} data-aos="zoom-in">
                <Certificate ImgSertif={cert.img} />
                <p className="text-center text-[#dadada] mt-2 font-medium">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* TECH STACK TAB */}
        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <PIcon PIcon="html.svg" Language="HTML" />
            <PIcon PIcon="css.svg" Language="CSS" />
            <PIcon PIcon="javascript.svg" Language="JavaScript" />
            <PIcon PIcon="tailwind.svg" Language="Tailwind CSS" />
            <PIcon PIcon="reactjs.svg" Language="ReactJS" />
            <PIcon PIcon="vite.svg" Language="Vite" />
            <PIcon PIcon="nodejs.svg" Language="Node JS" />
            <PIcon PIcon="bootstrap.svg" Language="Bootstrap" />
            <PIcon PIcon="firebase.svg" Language="Firebase" />
            <PIcon PIcon="MUI.svg" Language="Material UI" />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
