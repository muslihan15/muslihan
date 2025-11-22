import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box
          sx={{
            px: 4,
            "@media (max-width: 960px)": {
              px: 3,
            },
          }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

export default function SocialMedia() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "transparent", display: "flex", height: "auto" }}>
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ borderRight: 1, borderColor: "divider" }}>

        <Tab
          label={
            <div className="flex gap-x-3 w-full">
              <img src="/SocialMediaImg/instagram.svg" alt="Instagram Eki" />
              Instagram
            </div>
          }
          {...a11yProps(0)}
          sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["0.7rem", "1rem"] }}
        />

        <Tab
          label={
            <div className="flex gap-x-3 w-full">
              <img src="/SocialMediaImg/tiktok.svg" alt="Tiktok Eki" />
              Tiktok
            </div>
          }
          {...a11yProps(1)}
          sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["0.7rem", "1rem"] }}
        />

        <Tab
          label={
            <div className="flex gap-x-3 w-full">
              <img src="/SocialMediaImg/youtube.svg" alt="Youtube Eki" />
              Youtube
            </div>
          }
          {...a11yProps(2)}
          sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["0.7rem", "1rem"] }}
        />

        <Tab
          label={
            <div className="flex gap-x-3 w-full">
              <img src="/SocialMediaImg/linkedin.svg" alt="Linkedin Eki" />
              Linkedin
            </div>
          }
          {...a11yProps(3)}
          sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["0.7rem", "1rem"] }}
        />

        <Tab
          label={
            <div className="flex gap-x-3 w-full">
              <img src="/SocialMediaImg/github.svg" alt="Github Eki" />
              Github
            </div>
          }
          {...a11yProps(4)}
          sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["0.7rem", "1rem"] }}
        />
      </Tabs>

      {/* Panel tanpa SwipeableViews */}
      <Box sx={{ width: "100%" }}>
        <TabPanel value={value} index={0}>
          <a href="https://www.instagram.com/_muslihan">
            <img
              src="/SocialMediaImg/Instagram.PNG"
              alt="Instagram Muslihan"
              className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
            />
          </a>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <a href="https://www.tiktok.com/@_mslhn">
            <img
              src="/SocialMediaImg/tiktok.PNG"
              alt="Tiktok Muslihan"
              className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
            />
          </a>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <a href="https://youtube.com/@muslihan142">
            <img
              src="/SocialMediaImg/youtube.PNG"
              alt="Youtube Muslihan"
              className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
            />
          </a>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <a href="https://www.linkedin.com/">
            <img
              src="/SocialMediaImg/linkedin.jpg"
              alt="Linkedin Muslihan"
              className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
            />
          </a>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <a href="https://github.com/muslihan15">
            <img
              src="/SocialMediaImg/github.PNG"
              alt="Github Muslihan"
              className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
            />
          </a>
        </TabPanel>
      </Box>
    </Box>
  )
}
