import videoBranding from '../assets/videos/branding/BrandingVideo.webm'
import  tcl from '../assets/videos/cases/tvc.webm'
import  socialMedia from '../assets/videos/cases/socialmedia.webm'
import  trends from '../assets/videos/cases/trend.webm'
import deoosthof from '../assets/imges/clientlogos/deoosthof.svg'
import Gazelle from '../assets/imges/clientlogos/Gazelle.svg'
import Heijmans from '../assets/imges/clientlogos/Heijmans - logo.svg'
import KitKat from '../assets/imges/clientlogos/KitKat - logo.svg'
import Nedap from '../assets/imges/clientlogos/Nedap.svg'
import Samsung from '../assets/imges/clientlogos/Samsung.svg'
import TailorSteel from '../assets/imges/clientlogos/TailorSteel.svg'
import Talpa from '../assets/imges/clientlogos/Talpa.svg'
import contactImg from '../assets/imges/1692590430013.jpg'


import workCell_tvc from '../assets/imges/work/TVC_WT.webp'
import workCell_knap from '../assets/imges/work/Knab_header.webp'
import workCell_veno from '../assets/imges/work/vano.webp'

import workCell_veno_v  from '../assets/videos/cases/Vano.webm'





const homeContent={
    text: ["Op zoek naar structurele zichtbaarheid, social media marketing of een snackable bedrijfsfilm? Wij maken content die opvalt in de drukte van de social feeds. Wij houden van snel, van aandacht. Van stories en likes."],
    videoBranding:videoBranding,
    servicesText:["Onze aanpak is anders. Efficiënt. Geen moeilijke producties met dure acteurs, ellenlange scripts en storyboards. Wij kiezen voor laagdrempelige producties met een eerlijk en snackable resultaat, waardoor je structureel zichtbaar bent."],
    services:{
        snackbleContent:{
            name: "Snackble Content",
            link: "",
            videoSrc: tcl
        },
        socialMedia:{
            name: "Social Media",
            link: "",
            videoSrc: socialMedia
        },
        trends:{
            name: "Trends & Innovaties",
            link: "",
            videoSrc: trends
        },

    },
    clientlogos:{
        logos1:{
            itemImgSrc1ST:deoosthof,
            itemImgAlt1ST:"deoosthof",
            itemImgSrc2ST:Gazelle,
            itemImgAlt2ST:"Gazelle",
            animateY:-160,
            initialY:50,
            animateX:0,
            initialX:-50
        },
        logos2:{
            itemImgSrc1ST:TailorSteel,
            itemImgAlt1ST:"TailorSteel",
            itemImgSrc2ST:Talpa,
            itemImgAlt2ST:"Talpa",
            animateY:0,
            initialY:-50,
            animateX:250,
            initialX:-150

        },
        logos3:{
            itemImgSrc1ST:Heijmans,
            itemImgAlt1ST:"Heijmans",
            itemImgSrc2ST:KitKat,
            itemImgAlt2ST:"KitKat",
            animateY:50,
            initialY:-50,
            animateX:-50,
            initialX:-100

        },
        logos4:{
            itemImgSrc1ST:Nedap,
            itemImgAlt1ST:"Nedap",
            itemImgSrc2ST:Samsung,
            itemImgAlt2ST:"Samsung",
            animateY:-50,
            initialY:100,
            animateX:50,
            initialX:0
            

        }
    },
    contactBar : {
      imgSrc: contactImg, 
      telfoneNumbar: "06 16692843", 
      eamilAddress: "abdoakhras4@gmail.com" 
  },
  workCells:{
    veno:{
        posterImg:workCell_veno,
        name:"Veno",
        title:"veno",
        videoSrc:workCell_veno_v,
    },
    tvc:{
        posterImg:workCell_tvc,
        name:"WerkTalent",
        title:"tvc",
        videoSrc:tcl,
  },
    knab:{
        posterImg:workCell_knap,
        name:"Knab",
        title:"knab",
        videoSrc:trends,
    },
    
    knab1:{
        posterImg:workCell_knap,
        name:"knab",
        title:"knab",
        videoSrc:trends,
    },
    veno1:{
        posterImg:workCell_veno,
        name:"Veno",
        title:"veno",
        videoSrc:workCell_veno_v,
    },
}
}
export default homeContent