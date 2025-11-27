import cloudImg from "../assets/cl.png";
import aiImg from "../assets/aiml2.png";
import genaiImg from "../assets/genaii.png";
import iotImg from "../assets/iot1.png";
import researchImg from "../assets/outsourcing2.jpeg";
import alfaImg from "../assets/education1.jpeg";
import contentImg from "../assets/cm1.png";
import marketingImg from "../assets/logi1.png";
import techn from "../assets/tech.png";
import "../styles/Home.css"

const servicesData = [
  {
    title: "Cloud Consulting",
    slug: "cloud-consulting",
    image: cloudImg,
    description: "Scalable cloud solutions for modern businesses",
    icon: "☁️",
    color: "#00eaff"
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    image: aiImg,
    description: "Intelligent systems that learn and adapt",
    icon: "🤖",
    color: "#8f65ff"
  },
  {
    title: "Generative AI",
    slug: "generative-ai",
    image: genaiImg,
    description: "Creative AI solutions for innovation",
    icon: "✨",
    color: "#ff6b6b"
  },
  {
    title: "Internet of Things",
    slug: "internet-of-things",
    image: iotImg,
    description: "Connect and automate your world",
    icon: "🌐",
    color: "#00ff88"
  },
  {
    title: "ALFA Platform",
    slug: "alfa-platform",
    image: alfaImg,
    description: "Comprehensive educational ecosystem",
    icon: "🎓",
    color: "#ffd93d"
  },
  {
    title: "Supply Chain & Logistics",
    slug: "supply-chain-logistics",
    image: marketingImg,
    description: "Optimized marketing and logistics",
    icon: "🚚",
    color: "#00b894"
  },
  {
    title: "Upskilling & Outsourcing",
    slug: "upskilling-outsourcing",
    image: techn,
    description: "Tech Manthana - Innovation hub",
    icon: "💡",
    color: "#e17055"
  },
  {
    title: "Content Management",
    slug: "content-management",
    image: contentImg,
    description: "Strategic content and PR solutions",
    icon: "📝",
    color: "#fd79a8"
  },
  {
    title: "Research & Development",
    slug: "research-development",
    image: researchImg,
    description: "Cutting-edge technology research",
    icon: "🔬",
    color: "#6c5ce7"
  }
];

export default servicesData;
