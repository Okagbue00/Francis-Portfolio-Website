import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
  return (
    <section id='about' className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            <div className="flex items-end grid-default-color grid-1"><img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
            <div className="z-10">
                <p className="headtext">Hi, I'm Francis</p>
                <p className="subtext">Over the last 5 years, I’ve built my cybersecurity skills to protect systems and data through threat detection, vulnerability management, and security best practices across modern web and cloud environments.</p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>
            
            <div className="grid-default-color grid-2">
                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">SECURITY IS KEY</p>
                    <Card style={{rotate: "75deg", top:"30%", left:"20%"}} text="STRONG DEFAULTS" containerRef={grid2Container} />
                    <Card style={{rotate: "-30deg", top:"60%", left:"45%"}} text="ZERO TRUST" containerRef={grid2Container}/>
                    <Card style={{rotate: "90deg", top:"30%", left:"70%"}} text="LEAST PRIVILEGE" containerRef={grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"55%", left:"0%"}} text="DEFAULT DENY" containerRef={grid2Container}/>
                    <Card style={{rotate: "20deg", top:"10%", left:"38%"}} text="DEFENSE IN DEPTH" containerRef={grid2Container}/>
                    <Card style={{rotate: "30deg", top:"70%", left:"70%"}} image="assets/logos/openvpn.png" containerRef={grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"75%", left:"25%"}} image="assets/logos/azure.svg" containerRef={grid2Container}/>
                </div>
            </div>
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">TimeZone</p>
                    <p className="subtext">I'm based in Canada, and open to collaboration on security-focused projects</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]"><Globe /></figure>
            </div>


            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">Do you work to start a project together?</p><CopyEmailButton />

                </div>
            </div>


            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headText">Tech Stack</p>
                    <p className="subtext">I specialize in a range of security tools, frameworks and technologies that help me to build and maintain resilient, well-defended systems</p>
                </div>
            <div className="absolute inset-y-0 md:inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"><Frameworks />
                </div>

            </div>
        </div>


    </section>
  )
}

export default About