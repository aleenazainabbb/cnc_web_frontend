import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  
import './index.css'
import Topbar from './Components/Home/Topbar'
import Navbar from './Components/Home/Navbar'
import FeatureBar from './Components/Home/Featurebar'
import AchievementsBar from './Components/Home/Acheivementbar'
import CleaningSection from './Components/Home/CleaningSection'
import StepsToClean from './Components/Home/StepsToClean'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Topbar />
    <Navbar />
    <FeatureBar />
    <AchievementsBar />
    <CleaningSection />
    <StepsToClean />
  </StrictMode>,
)
