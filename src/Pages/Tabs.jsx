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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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

  //=========================== PROJECT DATA ===========================//
  const projects = [
     {
      title: "CRUD Data Mahasiswa",
      description:
        "CRUD Data Mahasiswa adalah kumpulan informasi lengkap tentang mahasiswa di perguruan tinggi di Indonesia.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fo-FtoY3CbGBimy3DW61Rw2REj6S7ojeng&s",
      link: "https://komputerku.co-id.id/boostrap/",
    },
    {
      title: "e-Learning",
      description:
        "Platform pembelajaran online yang digunakan untuk mendukung proses belajar mengajar secara daring melalui fitur materi, tugas, dan evaluasi.",
      img: "https://www.cybermakassar.com/asset/foto_berita/elearning-app.png",
      link: "https://fikomlearning.xyz",
    },
    {
      title: "Web Portofolio",
      description:
        "Web portofolio adalah situs web yang digunakan untuk memamerkan karya terbaik, keterampilan, dan pengalaman seseorang secara digital kepada publik. yang bisa diakses secara online oleh siapa saja.",
      img: "https://mycoding.id/storage/covers/270.jpg",
      link: "https://muslihan.vercel.app/",
    },
    {
      title: "Sistem Informasi UKM MAPALA UNASMAN",
      description:
        "Sistem informasi organisasi pecinta alam untuk mengelola data anggota, kegiatan pendakian, serta publikasi dokumentasi secara digital.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9otTx7O3ZL8WOz_ipn-Kz9JsOCyepHNIH2A&s",
      link: "https://mapala.unasman.ac.id",
    },
    {
      title: "Sistem Informasi Fakultas Ilmu Komputer UNASMAN",
      description:
        "Website resmi fakultas yang menyediakan informasi akademik, kegiatan, berita, serta akses layanan fakultas berbasis web.",
      img: "https://lib.lppm-unasman.ac.id/template/default/img/1.jpg",
      link: "https://fikom-unasman.ac.id",
    },
  ];

  const certificates = []; // jika mau isi nanti tinggal tambah

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%] md:mt-20 mt-10" id="Tabs" data-aos="fade-up" data-aos-duration="800">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }} className="px-[6%]">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{ display: "flex", justifyContent: "center", width: "auto", margin: "0 auto" }}
          >
            <Tab label="Project" {...a11yProps(0)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"] }} />
            <Tab label="Certificate" {...a11yProps(1)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"] }} />
            <Tab label="Tech Stack" {...a11yProps(2)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"] }} />
          </Tabs>
        </AppBar>

        {/* PROJECT PANEL */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <div key={index} data-aos="fade-up" data-aos-duration="1000">
                  <CardProject
                    Img={project.img}
                    Title={project.title}
                    Description={project.description}
                    Link={project.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </TabPanel>

        {/* CERTIFICATE PANEL */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <p className="text-center text-[#a6adba] italic">Belum ada sertifikat ditambahkan kecuali sertifikat Vaksin Heheheee :) </p>
        </TabPanel>

        {/* TECH STACK PANEL */}
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
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
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
