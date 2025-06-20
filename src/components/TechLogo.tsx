
import { Code, Github, Gitlab, FileCode, Blocks, LayoutGrid, Database } from "lucide-react";

type TechLogoProps = {
  tech: string;
  className?: string;
};

const TechLogo = ({ tech, className = "" }: TechLogoProps) => {
  const normalizedTech = tech.toLowerCase();
  
  // Map technologies to their respective icons
  if (normalizedTech.includes('react')) {
    return <Code className={className} />;
  } else if (normalizedTech.includes('node')) {
    return <Github className={className} />;
  } else if (normalizedTech.includes('python')) {
    return <Blocks className={className} />;
  } else if (normalizedTech.includes('next')) {
    return <LayoutGrid className={className} />;
  } else if (normalizedTech.includes('java')) {
    return <Code className={className} />;
  } else if (normalizedTech.includes('spring')) {
    return <Github className={className} />;
  } else if (normalizedTech.includes('php')) {
    return <FileCode className={className} />;
  } else if (normalizedTech.includes('laravel')) {
    return <Blocks className={className} />;
  } else {
    // Default icon for other technologies
    return <Database className={className} />;
  }
};

export default TechLogo;
